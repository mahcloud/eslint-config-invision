// This file is used to validate that certain code syntax/styles fail.
// It will contain a bunch of eslint errors. This is correct.
// When run through eslint, it should report many issues

// Shouldn't have access to Node globals
module.exports = function() {
	// should require semi-colons
	var foo = __dirname

	return foo;
};
