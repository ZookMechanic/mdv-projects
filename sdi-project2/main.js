 // Kevin Flanagan
// 09 July 2012
// Deliverable 2
// More Time Spent At Work


// Initial Variables
var availableSpaces = 2;


// Procedure Function
var isItClosingTime = function (currentTime) {
	if (currentTime === 630) {
		console.log("It is time to close this place down!");
	} else {
		console.log("Don\'t stare at the clock...it will only move slower!");
	}
}; // End Procedure Function

isItClosingTime(630);


// Boolean Function
var startClosing = function (anyCustomers, lockedFrontDoor) {
	if (anyCustomers === false && lockedFrontDoor === true) {
		console.log("Let\'s start bringing in the merchandise and motorcycles.");
	} else {
		console.log("We still have some customers browsing around the showroom.");
	}
}; // End Boolean Function

startClosing(false, true);


// Number Function
var shedSpaces = function (availableSpaces) {
	var availableSpaces = 2;
	while (availableSpaces > 0) {
		console.log("There is " + availableSpaces + " spaces left in the shed for a motorcycle.");
		availableSpaces--;
	};
		console.log("There are no more spaces left in the shed for bikes.");
}; // End Number Function

shedSpaces();

// String Function


// Array Function