
// Kevin Flanagan
// 5 June 2012
// Deliverable 2
// COD Zombies on Ascension Rounds 5 - 10


// Initial Output
console.log("Welcome back to Ascension!");
console.log("Time to break out of the first room and explore.");

// Initial Variables
var myTotalPoints = 4526;
var requiredPoints = 750;
var fullAmmo = false;
var emptyAmmo = true;
var zombies = 5;
var weaponBoxPointReq = 950;
var yourPoints = 7000;
var minimumPoints = 2500;
var weaponBox = ["HK21", "RPK", "Thundergun", "Gersh Device", "Commando", "Ray Gun", "AUG", "Galil"];
var weapons = weaponBox[Math.floor(Math.random()*weaponBox.length)];


// Procedure Function
var openTopDoor = function (requiredPoints, myTotalPoints) {
	var myTotalPoints = 4526;
	var requiredPoints = 750;
	if (myTotalPoints - requiredPoints >= requiredPoints) {
		console.log("You have " + myTotalPoints + " points.  This door is only " + requiredPoints + " points.  Go ahead and open the door!");
	} else {
		console.log("You don\'t have enough points to buy this door.");
	}
};

openTopDoor(750, 4526);


// Boolean Function
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


console.log("Go ahead and kill your crawlers, start Round 5 to get some more points.");
console.log("We will only worry about the last 5 zombies in the rounds to get a crawler.");


// Number Function
var createACrawler = function (zombies) {};	
	var zombies = 5;
	while (zombies > 0) {
		console.log(zombies + " zombies left in the round.");
		zombies--;
	if (zombies === 1) {
		console.log("Don\'t forget to make a crawler.");
	}
};


// Number Function
var useTheBox = function () {};
	var weaponBoxPointReq = 950;
	var yourPoints = 7000;
	var minimumPoints = 2500;
	if (yourPoints >= 7000 || minimumPoints < 2500) {
		console.log("You have plenty of points to go and use the weapon box...Hopefully you get something good!");
	} else { 
		console.log("Crappy! You need to save some points and go another round to hit the box.");
};


// Array Function
var getNewWeapon = function () {
	var weaponBox = ["HK21", "RPK", "Thundergun", "Gersh Device", "Commando", "Ray Gun", "AUG", "Galil"];
	var weapons = weaponBox[Math.floor(Math.random()*weaponBox.length)];
		console.log("You hit up the box and received the " + weapons + "!");
};

getNewWeapon();

// String Function
var endThisRound = function () {
	var fullAmmo = true;
	var zombies = 0;
	if (fullAmmo === true || zombies === 0) {
		console.log("You\'ve got a full clip of a good weapon hopefully...Kill that crawler and advance to the next round.");
	} else {
		console.log("Go and get anything else done that you need to.");
	}
};

endThisRound();


console.log("Just rinse and repeat this strategy and try not to get hit.");
console.log("Remember your head and neck shots!");
console.log("Ride the Lunar Landers if you have enough points to unlock the Power Room.");
console.log("Once you get close to Round 10, most players will benefit from purchasing the Juggernaut Perk.");
console.log("Next time we will continue on through to upgrading your weapons.");















