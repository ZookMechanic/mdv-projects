// Kevin Flanagan
// Web App Part 2
// VFW 1208

// Is the DOM ready?
window.addEventListener("DOMContentLoaded", function () {
	
	// getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	} // End getElementById Function

	// Select Field Element Function
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=cardGroups.length; i<j; i++) {
			var makeOption = document.createElement('option');
			var optText = cardGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	} // End Select Field Element Function 

	// Selected Radio Button Function
	function getSelectedRadio() {
		var radios = document.forms[0].mOwner;
		for(var i=0; i<radios.length; i++) {
			if(radios[i].checked) {
				mOwnerValue = radios[i].value;
			}
		}
	} // End Selected Radio Button Function

	// Checkbox Value Function
	function getCheckboxValue() {
		if($('fav').checked) {
			favoriteValue = $('fav').value;
		} else {
			favoriteValue = "No"
		}
	} // Checkbox Value Function

	// Toggle Controls Function
	function toggleControls(n) {
		switch(n) {
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	} // End Toggle Controls Function


	// StoreData Function
	function storeData() {
		var id				= Math.floor(Math.random()*10000001);
		// Gather Up All Form Field Values And Store In Object
		// Object Properties Contain Array With Form Label And Input Value
		getSelectedRadio();
		getCheckboxValue();
		var item			= {};
			item.group      = ["Group:", $('groups').value];
			item.compName	= ["CompanyName:", $('companyName').value];
			item.firstName	= ["First Name:", $('firstName').value];
			item.lastName	= ["Last Name:", $('lastName').value];
			item.address	= ["Address:", $('address').value];
			item.city		= ["City:", $('city').value];
			item.state  	= ["State:", $('state').value];
			item.email		= ["Email:", $('email').value];
			item.mOwner		= ["Motorcycle Owner:", mOwnerValue];
			item.favorite	= ["Save As Favorite:", favoriteValue];
			item.date		= ["Date:", $('date').value];
			item.notes		= ["Notes:", $('notes').value];
		// Save Data Into Local Storage: Use Stringify To Convert Object To String
		localStorage.setItem(id, JSON.stringify(item));
		alert("Contact Save!");
	} // End StoreData Function

	// GetData Function
	function getData() {
		toggleControls("on");
		// Write Data From Local Storage To Browser
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for (var n in obj) {
				 var makeSubli = document.createElement('li');
				 makeSubList.appendChild(makeSubli);
				 var optSubText = obj[n][0]+" "+obj[n][1];
				 makeSubli.innerHTML = optSubText;
			}
		}
	} // End GetData Function

	// Variable Defaults
	var cardGroups = ["--Pick A Group--", "Vendor", "Dealership", "Independent Shop", "Custom Service"],
		mOwner,
		favoriteValue = "No"
	;
	makeCats();

	// Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
/*	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal); */
	var save = $('submit');
	save.addEventListener("click", storeData);

});