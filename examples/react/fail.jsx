// This file is used to validate that certain code syntax/styles fail.
// It will contain a bunch of eslint errors. This is correct.
// When run through eslint, it should report many issues
var cx = require("classnames");

React.createClass({
	propTypes: {
		user: React.PropTypes.object
	},

	render: function() {

		var boardHeaderClass = cx({
			"wrap": true
		});

		return (
			<header className={boardHeaderClass}>
			</header>
		);
	}
});


// A second component will throw an error
var Board = React.createClass({
	getInitialState: function() {
		this.props.user;
	},

	render: function() {
		return (
			<div class="bad-class-declaration">
				<BoardHeaderDoesNotExist board/>
			</div>
		);
	}
});

module.exports = Board;
