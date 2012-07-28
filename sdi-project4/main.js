// Kevin Flanagan
// 28 July 2012
// Deliverable 4
// Function Library 


// *** String ***

// Does a string follow a 123-456-7890 pattern like a phone number?

// Phone Number Function
var checkString = function(testNumber) {
	var phoneNumber = testNumber;
	var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; // Phone number reg expression pattern
	if (pattern.test(phoneNumber)) { // Check the number against the pattern
		var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3"); // Places the string in the phone number format
		console.log(phoneNumber + " is a valid phone number.");	// Outputs the phone number to the console.
	} else {
		console.log(phoneNumber + " is not a valid phone Number.");
	}	
}; // End Phone Number Function


// Does a string follow an aaa@bbb.ccc pattern like an email address?

// Email Addy Function
var checkEmailString = function(email) {
	var inputString = email;
	var pattern = /^(\w+)[@](\w+)[.](\w{3})$/; // Regular Expression pattern
	if (pattern.test(inputString)) { // passing through the string to see if it is comparable
		console.log(inputString + " is an email string."); // Output the result
	} else {
		console.log(inputString + " is not an email string.");
	}
}; // End Email Addy Function


// *** Number ***

// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10.

// Number Decimal Function
var number = function(numberDecimal) {
	var decimal = numberDecimal; // Define number
	decimal.toFixed(2); // Method of changing the number decimal
	console.log(decimal.toFixed(2)); 
}; // End Number Decimal Function


// Fuzzy-match a number: is the number above or below a number within a certain percent?

// Fuzzy Number Function
var fuzzNum = function(val1, val2) {
	if (val1 < val2) {
		var percent = ((val1 / val2) * 100); // Dividing the values to get percentage
		console.log(val1 + " is " + percent + "% of " + val2);
	} else {
		if (val > val2) {
			var percent = ((val1 / val2) * 100); // Dividing the values to get percentage
			console.log(val1 + " is " + percent + "% greater than " + val2);
		} else {
			if (val1 === val2) {
				console.log (val1 + "is equal to " + val2);
			}
		}
	}
}; // End Fuzzy Number Function


// Find the number of hours or days difference between two dates.

// Difference In Date Function
var date = function(yyyy, mm, dd) {
	var today = new Date(); // Define current date
	var dayOf = new Date (yyyy, (mm-1), dd); // Define second date
	var minutes = (dayOf - today)/60000; // Subtracting both days to get minutes
	var hours = minutes / 60; // Converting minutes to hours
	var days = Math.floor(hours/24); // Converting hours to days
	console.log("There are " + days + " days until my wife's birthday!");
}; // End Difference In Date Function


// Given a string version of a number such as "42", return the value as an actual Number, such as 42.

// String To Number Function
var stringNum = function(string) {
	parseInt("string"); // Parsing the string to an integer
	console.log("The string is converted to " + string); // Output of the string conversion
}; // End String To Number Function


// Outputs
checkString("316-686-5689");
checkEmailString("bmxpert26@gmail.com");
number(2.1);
fuzzNum(5, 10);
date(2012, 12, 19);
stringNum(42);
