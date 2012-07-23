// Kevin Flanagan
// 22 July 2012
// Deliverable 3
// Closing Down The Shop


// JSON Data
var employee = {
	"name": "Kevin",
	"age": 30,
	"position": "Parts Associate",
};


// Global Variables
var availableSpaces = 2


// Method Procedure
var store = {
	closeUp: function (currentTime, currentCustomers) {
		if (currentTime === 630) {
			console.log("Horray!  It\'s time to close this place down!");
		} else if (currentCustomers === 0) {
			console.log("All the customers are gone as well.");
		} else {
			console.log("We can\'t do anything until it\'s time and the customers are gone.");
		}
	} 
}; // End Method Procedure


// Method Function
var preparation = {
	floorCleanup: function (carpetPieces, greyCarpet) {
		if (carpetPieces === true && greyCarpet === true) {
			console.log("Put the carpets out before moving the motorcycles in.");
		} else {
			console.log("We can\'t bring in the bikes until the carpets are out...It will ruin the floor.");
		}
	}
}; // End Method Function


// Method Mutator
var shedSpace = {
	isThereSpace: function () {
		while (availableSpaces >= 0) {
			console.log("There are " + availableSpaces + " spaces left in the shed for a motorcycle.");
			availableSpaces--;
		}
			console.log("The storage shed is full of machines now.");
	}
}; // End Method Mutator


// Method Accessor
var bikes = {
	pushIn: function () {
	var motorcycles = [
		"Kawasaki KLX250",
		"Honda Fury",
		"Yamaha RoadStar S",
		"Yamaha V Star 1100",
		"Yamaha V Star 250",
		"Yamaha V Star Tourer",
		"Yamaha Royal Star Venture",
		"Kawasaki Vulcan 1700 Nomad"
	];
	for (var i = 0; i < 7; i ++) {
		console.log("The " + motorcycles[i] + " is in the shop now.");
	}
		console.log("All the bikes are inside finally.  Let\'s get out of here and try to enjoy the rest of the day.");
	}
}; // End Method Accessor


// String Object
var register = function (firstString, secondString) {
	var firstString = "make sure the drawer is good",
		secondString = "clock out";
	console.log("Don\'t forget to " + secondString + " and " + firstString + "."); 
}; // End String Object


// Object
var myCar = {
	make: "Mazda",
	model: "3",
	color: "grey"
}; // End Object


// Output
store.closeUp(630, 0);
preparation.floorCleanup(true, true);
shedSpace.isThereSpace();
bikes.pushIn();
register();
console.log( "I\'ll get into my", myCar.make, "and drive home.");
