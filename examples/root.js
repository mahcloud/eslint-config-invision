// This file is used to validate the base ESLint rules are running correctly.
// It's a poor man's unit test, basically.

// this checks for use before define for functions
link();

function link( scope, element, attributes ) {
	var a, b, c, d, result;
	var paramReassign = true;

	paramReassign = 1;

	var varNotOnTop = "This tests quotes";

	b = {
		no: "quotes",
		when: "unneeded"
	};

	c = {
		"consistent": "quotes",
		"when-they-are": "needed"
	};

	element.text( scope.myAttr );

	if (paramReassign) {
		result = (a + b + c + d);
	} else {
		result = varNotOnTop;
	}

	if ( ! a ) {
		a = "allow space after !";
	}

	switch (a) {
		case "b":
			break;
		default:
			break;
	}

	return result;
}

var thirdPartyNotCapitalizingContructor = function() {};
var newConstructor = new thirdPartyNotCapitalizingContructor();
newConstructor();
