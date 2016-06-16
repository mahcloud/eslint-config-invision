/*eslint no-console:0*/

function validateCountMatch(expected, actual, type) {
	if (expected != actual) {
		console.log("Expected " + expected + " " + type + " but found " + actual);
		return false;
	}

	return true;
}

module.exports = function( results ) {
	results = results || [ ];

	// accumulate the errors and warnings
	var summary = results.reduce( function( seq, current ) {
		seq.errors += current.errorCount;
		seq.warnings += current.warningCount;
		return seq;
	}, { errors: 0, warnings: 0 } );

	var errorCountMatches = validateCountMatch(process.env.ERRORS, summary.errors, "errors");
	var warningCountMatches = validateCountMatch(process.env.WARNINGS, summary.warnings, "warnings");

	if ( errorCountMatches && warningCountMatches ) {
		process.exit(0);
	} else {
		process.exit(1);
	}
};
