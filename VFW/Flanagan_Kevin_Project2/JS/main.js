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

	// Create Select Field Element Function
	function makeCats() {
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
		for(var i=0, j=cardGroups.length; i<j; i++) {
			var makeOption = document.createElement('option'),
			var optText = cardGroups[i],
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	} // End Create Select Field Element Function

	// Selected Radio Button Function
	function getSelectedRadio() {
		var radios = document.forms[0].mOwner;
		for(var i=0; i<radios.length; i++) {
			if(radios[i].checked) {
				mOwnerValue = radios[i].value;
			}			
		}
	} // End Selected Radio Button Function

	// Checkbox Function
	function getCheckboxValue() {
		if($('fav').checked) {
			favoriteValue = $('fav').value;
		} else {
			favoriteValue = "No";
		}
	} // End Checkbox Function

	function toggleControls(n) {
		switch(n) {
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				$('addNew').style.display = "inline";
				break;
		   case "off":
		   		$('contactForm').style.display = "display";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "display";
				$('addNew').style.display = "inline";
		   		$('items').style.display = "none";
		   		break;
		   	default:
		   		return values;
		}
	}

	// Store Data Function
	function storeData() {
		var id 				= Math.floor(Math.random()*100000001);
		// Gather Up Form Field Values And Store In Object
		// Object Properties Contain Array With Form Label And Input Value
		getSelectedRadio();
		getCheckboxValue();
		var item			= {};
			item.group 		= ["Group:", $('groups').value];
			item.cname		= ["Company Name:", $('companyName').value];
			item.fname		= ["First Name:", $('firstName').value];
			item.lname		= ["Last Name:", $('lastName').value];
			item.address	= ["Address:", $('address').value];
			item.city		= ["City:", $('city').value];
			item.state    	= ["State:", $('state').value];
			item.email		= ["Email:", $('email').value];
			item.mOwner		= ["Motorcycle Owner:", mOwnerValue];
			item.fav		= ["Save As Favorite:", favoriteValue];
			item.date		= ["Date Added:", $('date').value];
			item.notes		= ["Notes:", $('notes').value];
		// Save Data Into Local Storage: Use Stringify To Convert The Object To A String
		localStorage.setItem(id, JSON.stringify(item));
		console.log("Contact Saved!");
	} // End Store Data Function

	// Get Data Function
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0) {
			console.log("There is no data in Local Storage.")
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0; len=localStorage.length; i<len; i++) {
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// Convert String From Local Storage To An Object
			var object = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in object) {
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = object[n][0]+" "+object[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	} // End Get Data Function

	function clearLocal() {
		if(localStorage.length === 0) {
			console.log("There is no data to clear.")
		} else {
			localStorage.clear();
			console.log("All data is clear!");
			window.location.reload();
			return false;
		}
	}



	// Variable defaults
	var cardGroups = ["--Pick A Group--", "Vendor", "Dealership", "Independent Shop", "Custom Service"],
		mOwnerValue,
		favoriteValue = "No"
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
