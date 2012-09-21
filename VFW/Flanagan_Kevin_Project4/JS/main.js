// Kevin Flanagan
// Web App Part 4
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
			floorValue = $('floor').value;
		} else {
			floorValue = "No"
		}
	} // End Checkbox Value Function


	// toggleControls Function
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
	} // End toggleControls Function


	// storeData Function
	function storeData(key) {
		// If There Is No Key, This Means This Is A Brand New Item And We Need A New Key.
		if(!key) {
			var id   				= Math.floor(Math.random()*1000001);	
		} else {
			id = key;
		}
		getSelectedRadio();
		getCheckboxValue();
		var item				= {};
			item.group 			= ["Group:", $('groups').value];
			item.year			= ["Year:", $('year').value];
			item.manuf			= ["Manufacturer:", $('manufacturer').value];
			item.model			= ["Model:", $('model').value];
			item.vin			= ["VIN:", $('vin').value];
			item.crated			= ["Still In Crate:", crateValue];
			item.floor			= ["On The Floor:", floorValue];
			item.price			= ["Price:", $('price').value];
			item.date			= ["Date Added:", $('date').value];
			item.notes			= ["Notes:", $('notes').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Vehicle Info Saved!");
	} // End storeData Function
	
	
	// getData Function
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There is no data in Local Storage so default data was added.");
			autoFillData();
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
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert String From Local Storage Value Back To An Object By Using JSON.parse()
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
			for(var n in obj) {
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}
	} // End getData Function


	// Get The Image For The Right Category
	function getImage(catName, makeSubList) {
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement('img');
		var setSrc = newImg.setAttribute("src", "images/"+ catName + ".png");
		imageLi.appendChild(newImg);
	} // End getImage Function

	// Auto Populate Locale Storage
	// autoFillData Function
	function autoFillData() {
		// The actual JSON Object data required for this to work is coming from our JSON.js file, which is loaded from our HTML page.
		// Store the JSON Object into Local Storage.
		for(var n in JSON) {
			var id = Math.floor(Math.random()*1000001);
			localStorage.setItem(id, JSON.stringify(JSON[n]));
		}
	} // End autoFillData Function


	// Make Item Function
	function makeItemLinks (key, linksLi) {
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Vehicle";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Add Link Break
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);

		// Add Delete Single Item Link
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Vehicle";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	} // End Make Item Function

	
	// editItem Function
	function editItem () {
		//Grab The Data From Our Item From Local Storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value)

		// Show The Form
		toggleControls("off");

		// Populate The Form Fields With Current localStorage Values
		$('groups').value = item.group[1];
		$('year').value = item.year[1];
		$('manufacturer').value = item.manuf[1];
		$('model').value = item.model[1];
		$('vin').value = item.vin[1];
		var radios = document.forms[0].status;
		for(var i=0; i<radios.length; i++) {
			if(radios[i].value === "crated" && item.crated[1] === "crated") {
				radios[i].setAttribute("checked", "checked");
			} else if(radios[i].value === "alreadyBuilt" && item.crated[1] === "alreadyBuilt") {
				radios[i].setAttribute("checked", "checked");
			}
		}
		if(item.floor[1] == "Yes") {
			$('floor').setAttribute("checked", "checked");
		}
		$('price').value = item.price[1];
		$('date').value = item.date[1];
		$('notes').value = item.notes[1];
	
		// Remove The Initial Listener From The Input 'Save Vehicle' Button
		save.removeEventListener("click", storeData);
		// Change Submit Button Value To Edit Button
		$('submit').value = "Edit Vehicle";
		var editSubmit = $('submit');
		// Save The Key Value Established In This Function As A Property Of The editSubmit event
		// So I Can Use That Value When We Save The Data I Edited
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	} // End editItem Function


	// deleteItem Function
	function deleteItem () {
		var ask = confirm("Are you sure you want to delete this vehicle from inventory?");
		if(ask) {
			localStorage.removeItem(this.key);
			alert("Vehicle was deleted!");
			window.location.reload();
		} else {
			alert("Vehicle was NOT deleted.")
		}
	} // End deleteItem Function
	

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


	// validate Function
	function validate (e) {
		// Define The Elements I Want To Check
		var getGroup 		= $('groups');
		var getYear 		= $('year');
		var getManufacturer	= $('manufacturer')
		var getModel		= $('model')
	
		// Reset Error Messages
		errMsg.innerHTML = "";
		getGroup.style.border 			= "1px solid black";	
		getYear.style.border 			= "1px solid black";
		getManufacturer.style.border 	= "1px solid black";
		getModel.style.border 			= "1px solid black";
		
		// Get Error Messages
		var messageArray = [];
		// Group Validation
		if(getGroup.value === "--Choose A Group--") {
			var groupError = "Please choose a group.";
			getGroup.style.border = "1px solid red";
			messageArray.push(groupError);
		}

		// Year Validation
		if(getYear.value === "") {
			var yearError = "Please enter a year.";
			getYear.style.border = "1px solid red";
			messageArray.push(yearError);
		}

		// Manufacturer Validation
		if(getManufacturer.value === "") {
			var manufacturerError = "Please enter a manufacturer.";
			getManufacturer.style.border = "1px solid red";
			messageArray.push(manufacturerError);
		}

		// Model Validation
		if(getModel.value === "") {
			var modelError = "Please enter a model.";
			getModel.style.border = "1px solid red";
			messageArray.push(modelError);
		}

		// If There Were Errors, Display Them On The Screen
		if(messageArray.length >= 1) {
			for(var i=0, j=messageArray.length; i < j; i++) {
				var txt = document.createElement('li');
				txt.innerHTML = messageArray[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		} else {
			// If All Is OK, Save The Data! Send The Key Value (Which Came From The editData Function
			// Remember This Key Value Was Passed Through The editSubmit Event Listener As A Property
			storeData(this.key);
		}
	} // End validate Function


	// Variable Defaults
	var contactGroups = ["--Choose A Group--", "ATV", "Dirt Bike", "Watercraft", "Street Bike", "Cruiser", "Scooter"],
		crateValue,
		floorValue = "No",
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

}); // End Program