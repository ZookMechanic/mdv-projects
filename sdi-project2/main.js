 // Kevin Flanagan
// 09 July 2012
// Deliverable 2
// More Time Spent At Work


// Initial Variables


// Procedure Function
var isItClosingTime = function (currentTime) {
	if (currentTime === 630) {
		console.log("It is time to close this place down!");
	} else {
		console.log("Don\'t stare at the clock...it will only move slower!");
	}
};

isItClosingTime(630);


// Boolean Function
var startClosing = function (anyCustomers, lockedFrontDoor) {
	if (anyCustomers === false && lockedFrontDoor === true) {
		console.log("Let\'s start bringing in the merchandise and motorcycles.");
	} else {
		console.log("We still have some customers browsing around the showroom.");
	}
};

startClosing(false, true);


// Number Function
