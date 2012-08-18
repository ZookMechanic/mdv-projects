// Kevin Flanagan
// Web App Part 3
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
	function storeData(key) {
		if(!key) {
			var id			= Math.floor(Math.random()*10000001);
		} else {
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
		var item			= {};
			item.group      = ["Group:", $('groups').value];
			item.compName	= ["Company Name:", $('companyName').value];
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
		alert("Biz Card Saved!");
	} // End StoreData Function

	// GetData Function
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage.");
		}
		// Write Data From Local Storage To Browser
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++) {
			var makeLi = document.createElement('li');
			var linksLi = document.createElement('li');
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
				 makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); // Create Our Edit And Delete Buttons/Link For Each Item
		}
	} // End GetData Function

	// Make Item Links Function
	function makeItemLinks(key, linksLi) {
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Contact";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Add Line Break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);

		// Add Delete Single Item Link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Contact";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	} // End MakeItemLinks Function

	// EditItem Function
	function editItem() {
		// Grab Data From My Item From Local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);

		// Show The Form
		toggleControls("off");
	
		// Populate The Form Fields With Current localStorage Values
		$('groups').value = item.group[1];
		$('companyName').value = item.compName[1];
		$('firstName').value = item.firstName[1];
		$('lastName').value = item.lastName[1];
		$('address').value = item.address[1];
		$('city').value = item.city[1];
		$('state').value = item.state[1];
		$('email').value = item.email[1];
		var radios = document.forms[0].mOwner;
		for(var i=0; i<radios.length; i++) {
			if(radios[i].value == "Yes" && item.mOwner[1] == "Yes") {
			} else if(radios[i].value == "No" && item.mOwner[1] == "No") {
				radios[i].setAttribute("checked", "checked");
			}
		}
		if(item.favorite[1] == "Yes") {
			$('fav').setAttribute("checked", "checked");
		}
		$('date').value = item.date[1];
		$('notes').value = item.notes[1];
	
		save.removeEventListener("click", storeData);
		$('submit').value = "Edit Contact";
		var editSubmit = $('submit');
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	} // End EditItem Function

	function deleteItem() {
		var ask = confirm("Are you sure you want to delete this contact?");
		if(ask) {
			localStorage.removeItem(this.key);
			alert("Contact was deleted!!");
			window.location.reload();
		} else {
			alert("Contact was NOT deleted.");
		}
	}
		
	// Clear Local Storage Function
	function clearLocal() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.")
		} else {
			localStorage.clear();
			alert("All biz card info is deleted!");
			window.location.reload();
			return false;
		}
	} // End Clear Local Storage Function

	// Validation Function
	function validate(e) {
		var getGroup 		= $('groups');
		var getFirstName	= $('firstName');
		var getLastName		= $('lastName');
		var getEmail		= $('email');
	
		// Reset Error Messages
		errMsg.innerHTML = "";
		getGroup.style.border 		= "1px solid black";
		getFirstName.style.border 	= "1px solid black";
		getLastName.style.border 	= "1px solid black";
		getEmail.style.border 		= "1px solid black";


		// Get Error Messages
		var messageAry = [];
		// Group Validation
		if(getGroup.value === "--Pick A Group--") {
			var groupError = "Please choose a group.";
			getGroup.style.border = "1px solid red";
			messageAry.push(groupError);
		}
		
		// First Name Validation
		if(getFirstName.value === "") {
			var firstNameError = "Please enter a first name.";
			getFirstName.style.border = "1px solid red";
			messageAry.push(firstNameError);
		}
	
		// Last Name Validation
		if(getLastName.value === "") {
			var lastNameError = "Please enter a last name.";
			getLastName.style.border = "1px solid red";
			messageAry.push(lastNameError);
		}

		// Email Validation
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!(re.exec(getEmail.value))) {
			var emailError = "Please enter a valid email address.";
			getEmail.style.border = "1px solid red";
			messageAry.push(emailError);
		}

		// If There Are Errors, Display Them On-Screen
		if(messageAry.length >= 1) {
			for(var i=0, j=messageAry.length; i < j; i++) {
				var txt = document.createElement('li');
				txt.innerHTML = messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		} else {
			// If All Is OK, Save The Data!
			storeData(this.key);
		}
	} // End Validation Function

	// Variable Defaults
	var cardGroups = ["--Pick A Group--", "Vendor", "Dealership", "Independent Shop", "Custom Service"],
		mOwnerValue,
		favoriteValue = "No"
		errMsg = $('errors');
	;
	makeCats();

	// Set Link & Submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", validate);

});