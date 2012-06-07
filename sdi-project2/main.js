// Kevin Flanagan
// 5 June 2012
// Deliverable 2
// COD Zombies on Ascension Rounds 5 - 10


// Initial Output
console.log("Welcome back to Ascension!");
console.log("Time to break out of the first room and explore.");


// Procedure Function
var openDoor = function (requiredPoints, myTotalPoints) {
	if (myTotalPoints - requiredPoints >= requiredPoints) {
		console.log("You have " + myTotalPoints + " points.  This door is only " + requiredPoints + " points.  Go ahead and open the door!");
	} else {
		console.log("You don\'t have enough points to buy this door.");
	}
};

openDoor(750, 4526);


//Boolean Function





// Array Index
var randomWeaponBox = [
	"Python",
	"CZ75", 
	"Spectre", 
	"SPAZ-12", 
	"HS10", 
	"China Lake", 
	"M72 LAW", 
	"HK21", 
	"RPK", 
	"Thundergun", 
	"Ballistic Knife", 
	"Matryoshka Dolls", 
	"Gersh Device", 
	"G11", 
	"Commando", 
	"FAMAS", 
	"Ray Gun", 
	"Crossbow", 
	"AUG", 
	"Galil", 
	"FN FAL"
];