// Kevin Flanagan
// Web App Part 2
// VFW 1209

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {


	// getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	} // End getElementById Function

	
	// Select Field Function
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=contactGroups.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	} // End Select Field Function


	// Selected Radio Button Function
	function getSelectedRadio() {
		var radios = document.forms[0].status;
		for(var i=0; i<radios.length; i++) {
			if(radios[i].checked) {
				crateValue = radios[i].value;
			}
		}
	} // End Selected Radio Button Function


	// Checkbox Value Function
	function getCheckboxValue() {
		if($('floor').checked) {
			builtValue = $('floor').value;
		} else {
			builtValue = "No"
		}
	} // End Checkbox Value Function


	// Toggle Controls Function
	function toggleControls(n) {
		switch(n) {
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	} // End Toggle Controls Function


	// storeData Function
	function storeData() {
		var id   				= Math.floor(Math.random()*1000001);
		getSelectedRadio();
		getCheckboxValue();
		var item				= {};
			item.group 			= ["Group:", $('groups').value];
			item.year			= ["Year:", $('year').value];
			item.manuf			= ["Manufacturer:", $('manufacturer').value];
			item.model			= ["Model:", $('model').value];
			item.vin			= ["VIN:", $('vin').value];
			item.crated			= ["Still In Crate", crateValue];
			item.alreadybuilt	= ["Already Built", builtValue];
			item.floor			= ["Is The Unit On The Showroom Floor?", $('floor').value];
			item.price			= ["Price:", $('price').value];
			item.date			= ["Date:", $('date').value];
			item.notes			= ["Notes:", $('notes').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Vehicle Info Saved!");
	} // End storeData Function
	
	
	// getData Function
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage.");
		}
		// Write Data From Local Storage To The Browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++) {
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert String From Local Storage Value Back To An Object By Using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	} // End getData Function


	// clearLocal Function
	function clearLocal() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.")
		} else {
			localStorage.clear();
			alert("All vehicles are deleted!");
			window.location.reload();
			return false;
		}
	} // End clearLocal Function


	// Variable Defaults
	var contactGroups = ["--Choose A Group--", "ATV", "Dirt Bike", "Watercraft", "Street Bike", "Cruiser", "Scooter"],
		crateValue,
		builtValue = "No"
	;
	makeCats();


	// Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);

});