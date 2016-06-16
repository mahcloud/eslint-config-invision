// This file is used to validate the `Browser` ESLint rules are running correctly.

angular.directive("myDir", link);

function link( scope, element, attributes ) {
	var foo = 1;
	var bar = 2;

	element.text( scope.myAttr );

	window.location.href = "http://google.com";

	return foo + bar;
}

link();
