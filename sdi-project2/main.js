// Kevin Flanagan
// 5 June 2012
// Deliverable 2
// COD Zombies on Ascension Rounds 5 - 10


// Initial Output
console.log("Welcome back to Ascension!");
console.log("Time to break out of the first room and explore.");


// Procedure Function
var openTopDoor = function (requiredPoints, myTotalPoints) {
	if (myTotalPoints - requiredPoints >= requiredPoints) {
		console.log("You have " + myTotalPoints + " points.  This door is only " + requiredPoints + " points.  Go ahead and open the door!");
	} else {
		console.log("You don\'t have enough points to buy this door.");
	}
};

openTopDoor(750, 4526);


//Boolean Function
var getAmmo = function (fullAmmo, emptyAmmo) {
	var fullAmmo = false,
		emptyAmmo = true;
	if (fullAmmo === false) {
		console.log("You're low on ammo...better find some more!");
	} else {
		console.log("No need to find ammo...your full.");	
		return getAmmo;
	}
};

getAmmo(false, true);


// Number Function
var getStuffDone = function (crawler, zombies) {
	var crawler = 2,
		zombies = 0;
	if (crawler >= 1) {
		console.log("Good...you have " + crawler + " crawlers.  Don\'t let them hit you!");
		if (zombies === 0) {
			console.log("No zombies...Get some stuff done before the crawler bleeds out.");
		} else {
			console.log("Take a grenade and make a crawler.");
		}	
	} else {
		console.log("Use your knife or get some headshots to rack up points.");
		return getStuffDone;
	}
};

getStuffDone(2, 0);


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