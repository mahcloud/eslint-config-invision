// This file is used to validate that certain code syntax/styles fail.
// It will contain a bunch of eslint errors. This is correct.
// When run through eslint, it should report many issues

var reusedVarNoShadow = {};

function link( reusedVarNoShadow, element, attributes ) {
	// using a variable before it is defined
	var foo = bar;

	// using spaces instead of tabs
  var bar = 2;

	// mix spaces and tabs
	if (foo == bar) {
		return foo
		  .mixedSpacesAndTabs
				.weirdIndention
      .indentWithSpaces;
	}

	if ("true" == bar) {
		// calling a function that doesn't exist
		echo("should catch error")
	}

	element.text( reusedVarNoShadow["myAttr"] + 'single quotes');

	if (foo == bar) {
		return;
	}

	foo = {
		"can't": "use",
		nonConsistent: "quoting for properties"
	};

	// no console.log usage
	console.log("Bad dog!");

	return foo + bar;
}
