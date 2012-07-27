// Kevin Flanagan
// 26 July 2012
// Deliverable 4
// My Library


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.





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

date(2012, 12, 19);
