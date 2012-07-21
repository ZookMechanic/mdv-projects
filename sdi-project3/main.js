// Kevin Flanagan
// 18 July 2012
// Deliverable 3
// Closing Down The Shop


// JSON Data
var employee = {
	"name": "Kevin",
	"age": 30,
	"position": "Parts Associate",
};


// Global Variables
var currentTime = 630,
	customers = 0;


// Method Function
var store = {
	closeUp: function () {
		if (currentTime === 630) {
			console.log("Horray!  It\'s time to close this place down!");
		} else if (customers === 0) {
			console.log("All the customers are gone as well.");
		} else {
			console.log("We can\'t do anything until it\'s time and the customers are gone.");
		}
	}
}; // End Method Function


// 