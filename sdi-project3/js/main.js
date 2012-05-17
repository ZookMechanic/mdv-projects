// Kevin Flanagan



// JSON Data
var handleData = function (weaponCache) {
	for (var i = 0; i < weaponCache.weapons.length; i++){
		var weapon = weaponCache.weapons[i];
		console.log("name:" + weapon.name);
	};
};

handleData(weaponCache);

