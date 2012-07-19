// Kevin Flanagan
// 18 July 2012
// Deliverable 3
// Closing Down The Shop


// Initial Variables
var availableSpaces = 2,
	firstString = "count the drawer",
	secondString = "clock out",
	motorcycles = [
		"Kawasaki KLX250",
		"Honda Fury",
		"Yamaha RoadStar S",
		"Yamaha V Star 1100",
		"Yamaha V Star 250",
		"Yamaha V Star Tourer",
		"Yamaha Royal Star Venture",
		"Kawasaki Vulcan 1700 Nomad",
	];


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
	return startClosing
	}
}; // End Boolean Function

startClosing(false, true);


// Number Function
var isThereShedSpace = function (availableSpaces) {
	var availableSpaces = 2;
	while (availableSpaces >= 0) {
		console.log("There are " + availableSpaces + " spaces left in the shed for a motorcycle.");
		availableSpaces--;
	};
		console.log("The storage shed is full.");
		return isThereShedSpace
}; // End Number Function

isThereShedSpace();


// String Function
var lastFewTasks = function (firstString, secondString) {
	var firstString = "count the drawer",
		secondString = "clock out";
	console.log("Make sure to " + firstString + " and " + secondString + " after pushing in the bikes.");
	return lastFewTasks
};  // End String Function

lastFewTasks();


// Array Function
var bikePushIn = function (motorcycles) {
	var motorcycles = [
		"Kawasaki KLX250",
		"Honda Fury",
		"Yamaha RoadStar S",
		"Yamaha V Star 1100",
		"Yamaha V Star 250",
		"Yamaha V Star Tourer",
		"Yamaha Royal Star Venture",
		"Kawasaki Vulcan 1700 Nomad",
	];
	for (var i = 0; i < 7; i ++) {
		console.log( "The " + motorcycles[i] + " is in the shop now." );
	};
		console.log("All the bikes are inside.  Let\'s get out of here and grab an adult beverage!");
		return bikePushIn
}; // End Array Function

bikePushIn();