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
		var currentTime = 630,
			currentCustomers = 0;
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
	floorCleanup: function () {
		var carpetPieces = true,
			greyCarpet = true;
		if (carpetPieces === true && greyCarpet === true) {
			console.log("Put the carpets out before moving the motorcycles in.");
		} else {
			console.log("We can\'t bring in the bikes until the carpets are out...It will ruin the floor.");
		}
	}
}; // End Method Function


