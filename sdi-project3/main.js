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


// Method Accessor
var pushIn = function () {
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
}; // End Method Accessor





// Returned Values
store.closeUp(630, 0);
preparation.floorCleanup(true, true);
pushIn();

