// Kevin Flanagan

// JSON Weapon Data
var weaponCache = {
	"weapons": [
		{	
			"name": "M1911",
			"upgraded name": "Mustang & Sally",
			"class": "Pistols",
			"magazine size": "7",
			"max base damage": "2k",
			"max base damage after modifier": "6k",
			"upgraded max base damage": "62k",
			"upgraded max damage after modifier": "310k",
			"mystery box?": "false"
		},
		{
			"name": "CZ75",
			"upgraded name": "Calamity",
			"class": "Pistols",
			"magazine size": "12",
			"max base damage": "23k",
			"max base damage after modifier": "79k",
			"upgraded max base damage": "78k",
			"upgraded max damage after modifier": "273k",
			"mystery box?": "true"
		},
		{
			"name": "Python",
			"upgraded name": "Cobra",
			"class": "Pistols",
			"magazine size": "6",
			"max base damage": "90k",
			"max base damage after modifier": "135k",
			"upgraded max base damage": "108k",
			"upgraded max damage after modifier": "324k",
			"mystery box?": "true"
		},
		{
			"name": "Dual CZ75",
			"upgraded name": "Calamity & Jane",
			"class": "Pistols",
			"magazine size": "24",
			"max base damage": "38k",
			"max base damage after modifier": "126k",
			"upgraded max base damage": "108k",
			"upgraded max damage after modifier": "357k",
			"mystery box?": "true"
		},
		{
			"name": "Olympia",
			"upgraded name": "Hades",
			"class": "Shotguns",
			"magazine size": "2",
			"max base damage": "27k",
			"max base damage after modifier": "27k",
			"upgraded max base damage": "149k",
			"upgraded max damage after modifier": "149k",
			"mystery box?": "false"
		},
		{
			"name": "Stakeout",
			"upgraded name": "Raid",
			"class": "Shotguns",
			"magazine size": "4",
			"max base damage": "58k",
			"max base damage after modifier": "58k",
			"upgraded max base damage": "168k",
			"upgraded max damage after modifier": "168k",
			"mystery box?": "false"
		},
		{
			"name": "SPAS-12",
			"upgraded name": "SPAZ-24",
			"class": "Shotguns",
			"magazine size": "8",
			"max base damage": "51k",
			"max base damage after modifier": "51k",
			"upgraded max base damage": "230k",
			"upgraded max damage after modifier": "230k",
			"mystery box?": "true"
		},
		{
			"name": "HS-10",
			"upgraded name": "Typhoid & Mary",
			"class": "Shotguns",
			"magazine size": "4",
			"max base damage": "54k",
			"max base damage after modifier": "54k",
			"upgraded max base damage": "230k",
			"upgraded max damage after modifier": "230k",
			"mystery box?": "true"
		},
		{
			"name": "MPK5",
			"upgraded name": "MP115 Kollider",
			"class": "Sub-Machine Guns",
			"magazine size": "30",
			"max base damage": "15k",
			"max base damage after modifier": "60k",
			"upgraded max base damage": "34k",
			"upgraded max damage after modifier": "168k",
			"mystery box?": "false"
		},
		{
			"name": "AK74u",
			"upgraded name": "AK74fu2",
			"class": "Sub-Machine Guns",
			"magazine size": "30",
			"max base damage": "22k",
			"max base damage after modifier": "86k",
			"upgraded max base damage": "61k",
			"upgraded max damage after modifier": "304k",
			"mystery box?": "false"
		},
		{
			"name": "PM63",
			"upgraded name": "Tokyo & Base",
			"class": "Sub-Machine Guns",
			"magazine size": "20",
			"max base damage": "12k",
			"max base damage after modifier": "48k",
			"upgraded max base damage": "39k",
			"upgraded max damage after modifier": "175k",
			"mystery box?": "true"
		},
		{
			"name": "MPL",
			"upgraded name": "MPL-LF",
			"class": "Sub-Machine Guns",
			"magazine size": "32",
			"max base damage": "14k",
			"max base damage after modifier": "58k",
			"upgraded max base damage": "34k",
			"upgraded max damage after modifier": "168k",
			"mystery box?": "false"
		},
		{
			"name": "Spectre",
			"upgraded name": "The Phantom",
			"class": "Sub-Machine Guns",
			"magazine size": "32",
			"max base damage": "14k",
			"max base damage after modifier": "54k",
			"upgraded max base damage": "35k",
			"upgraded max damage after modifier": "176k",
			"mystery box?": "true"
		},
		{
			"name": "M16",
			"upgraded name": "Skull Crusher",
			"class": "Assault Rifles",
			"magazine size": "30",
			"max base damage": "15k",
			"max base damage after modifier": "60k",
			"upgraded max base damage": "45k",
			"upgraded max damage after modifier": "225k",
			"mystery box?": "false"
		},
		{
			"name": "M14",
			"upgraded name": "Mnesia",
			"class": "Assault Rifles",
			"magazine size": "20",
			"max base damage": "11k",
			"max base damage after modifier": "33k",
			"upgraded max base damage": "42k",
			"upgraded max damage after modifier": "250k",
			"mystery box?": "false"
		},
		{
			"name": "FAMAS",
			"upgraded name": "G16-GL35",
			"class": "Assault Rifles",
			"magazine size": "30",
			"max base damage": "18k",
			"max base damage after modifier": "72k",
			"upgraded max base damage": "41k",
			"upgraded max damage after modifier": "203k",
			"mystery box?": "true"
		},
		{
			"name": "Galil",
			"upgraded name": "Lemantation",
			"class": "Assault Rifles",
			"magazine size": "35",
			"max base damage": "52k",
			"max base damage after modifier": "210k",
			"upgraded max base damage": "116k",
			"upgraded max damage after modifier": "578k",
			"mystery box?": "true"
		},
		{
			"name": "AUG",
			"upgraded name": "AUG-50M3",
			"class": "Assault Rifles",
			"magazine size": "30",
			"max base damage": "42k",
			"max base damage after modifier": "168k",
			"upgraded max base damage": "84k",
			"upgraded max damage after modifier": "489k",
			"mystery box?": "true"
		},
		{
			"name": "FN-FAL",
			"upgraded name": "EPC WN",
			"class": "Assault Rifles",
			"magazine size": "20",
			"max base damage": "32k",
			"max base damage after modifier": "128k",
			"upgraded max base damage": "94k",
			"upgraded max damage after modifier": "468k",
			"mystery box?": "true"
		},
		{
			"name": "Commando",
			"upgraded name": "Predator",
			"class": "Assault Rifles",
			"magazine size": "30",
			"max base damage": "45k",
			"max base damage after modifier": "180k",
			"upgraded max base damage": "84k",
			"upgraded max damage after modifier": "420k",
			"mystery box?": "true"
		},
		{
			"name": "G11",
			"upgraded name": "G115 Generator",
			"class": "Assault Rifles",
			"magazine size": "48",
			"max base damage": "19k",
			"max base damage after modifier": "77k",
			"upgraded max base damage": "50k",
			"upgraded max damage after modifier": "252k",
			"mystery box?": "true"
		},
		{
			"name": "HK21",
			"upgraded name": "H115 Oscillator",
			"class": "Light Machine Guns",
			"magazine size": "30",
			"max base damage": "94k",
			"max base damage after modifier": "281k",
			"upgraded max base damage": "189k",
			"upgraded max damage after modifier": "567k",
			"mystery box?": "true"
		},
		{
			"name": "RPK",
			"upgraded name": "R115 Resonator",
			"class": "Light Machine Guns",
			"magazine size": "30",
			"max base damage": "65k",
			"max base damage after modifier": "195k",
			"upgraded max base damage": "113k",
			"upgraded max damage after modifier": "338k",
			"mystery box?": "true"
		},
		{
			"name": "Ray Gun",
			"upgraded name": "Porter's X2 Ray Gun",
			"class": "Specials",
			"magazine size": "30",
			"max base damage": "180k",
			"max base damage after modifier": "180k",
			"upgraded max base damage": "400k",
			"upgraded max damage after modifier": "2.0m",
			"mystery box?": "true"
		},
		{
			"name": "ThunderGun",
			"upgraded name": "Zeus Cannon",
			"class": "Specials",
			"magazine size": "7",
			"max base damage": "~",
			"max base damage after modifier": "~",
			"upgraded max base damage": "~",
			"upgraded max damage after modifier": "~",
			"mystery box?": "true"
		},
		{
			"name": "Crossbow",
			"upgraded name": "Awful Lawton",
			"class": "Specials",
			"magazine size": "1",
			"max base damage": "200",
			"max base damage after modifier": "200",
			"upgraded max base damage": "750",
			"upgraded max damage after modifier": "750",
			"mystery box?": "true"
		},

	]


};