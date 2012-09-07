// Kevin Flanagan
// Web App Part 2
// VFW 1209

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {


	// getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}

	
	// Select Field Function
	function makeCats() {
		var formTag = document.getElementsByTagName("form");
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
		for(var i=0; j=contactGroups.length; i++) {
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}

	
	// Variable Defaults
	var contactGroups = ["--Choose A Group--", "ATV", "Dirt Bike", "Watercraft", "Street Bike", "Cruiser", "Scooter"];
	makeCats();


	// Set Link & Submit Click Events
	/*
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
	*/
});