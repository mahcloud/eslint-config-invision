// This file is used to validate the `React` ESLint rules are running correctly.
// Code pulled from https://github.com/InVisionApp/v2.projects.invisionapp.com/blob/develop/wwwroot/assets/apps/boards/components/Board.jsx

// should be able to require components (we use browserify for React code)
var cx = require("classnames");

var SetIntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.forEach(clearInterval);
	}
};

var BoardHeader, Loading;

var BoardStore = {};

var Board = React.createClass({
	propTypes: {
		user: React.PropTypes.string.isRequired,
		boardID: React.PropTypes.string.isRequired
	},

	mixins: [SetIntervalMixin],

	getInitialState: function() {
		BoardStore.loadFromBoardsCache(this.props.user);
	},

	componentDidMount: function() {
		BoardStore.addChangeListener(this._onChange);

		if (!!window.analytics) {
			window.analytics.track("Board viewed via share", {
				boardid: this.props.boardID
			});
		}

		document.addEventListener("keydown", this.keydownHandler, false);
		document.addEventListener("keyup", this.keypressHandler, false);
		document.addEventListener("click", this.handleDocumentClick, false);
	},

	render: function() {
		var headerClass = cx({
			wrap: true
		});

		return (
			<div>
				<BoardHeader
					board={this.state.board}
					user={this.state.user}
					commentsRoundup={this.state.commentsRoundup}/>

				{ this.state.isLoading ? <Loading /> :
				<div className={headerClass}></div>
				}

				{ ! this.state.user || ! this.state.user.isAccountAuthenticated ?
				<footer className="unauthorized-user">
					<a
						className="in-logo"
						href="http://www.invisionapp.com/"
						target="_blank"></a>
					<p>InVision makes it easy to share, present & collaborate on design!</p>

					<a
						className="signup-button"
						href="http://www.invisionapp.com/"
						target="_blank">Sign Up Free</a>
				</footer>
				: null }
			</div>
		);
	}
});

module.exports = Board;
