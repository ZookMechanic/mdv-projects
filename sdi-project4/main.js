// Kevin Flanagan
// 26 July 2012
// Deliverable 4
// My Library


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.

// Number Decimal Function
var number = function(numberDecimal) {
	var decimal = numberDecimal; // Define number
	decimal.toFixed(2); // Method of changing the number decimal
	console.log(decimal.toFixed(2)); 
}; // End Number Decimal Function


// Fuzzy-match a number: is the number above or below a number within a certain percent?

// Fuzzy Number Function
var fuzzNum = function(val1, val2) {
	if (val1 < val2) {
		var percent = ((val1 / val2) * 100);
		console.log(val1 + " is " + percent + "% of " + val2);
	} else {
		if (val > val2) {
			var percent = ((val1 / val2) * 100);
			console.log(val1 + " is " + percent + "% greater than " + val2);
		} else {
			if (val1 === val2) {
				console.log (val1 + "is equal to " + val2);
			}
		}
	}
}; // End Fuzzy Number Function


// Find the number of hours or days difference between two dates.

// Difference In Date Function
var date = function(yyyy, mm, dd) {
	var today = new Date(); // Define current date
	var dayOf = new Date (yyyy, (mm-1), dd); // Define second date
	var minutes = (dayOf - today)/60000; // Subtracting both days to get minutes
	var hours = minutes / 60; // Converting minutes to hours
	var days = Math.floor(hours/24); // Converting hours to days
	console.log("There are " + days + " days until my wife's birthday!");
}; // End Difference In Date Function




// Outputs
number(2.1);
fuzzNum(5, 10);
date(2012, 12, 19);
