
{
// var SolarSystem = (function(oldSolarSystem) {
	let spacecraft = [
		{name: "Apollo 2.5", year: "1968"}
	]

	let ships = Object.create(null);

	ships.wreckSpacecraft = function() {
		spacecraft.pop();
	}

	ships.printSpacecraft = function() {
		spacecraft.forEach(function(craft) {
			document.getElementById("spacecraft").innerHTML += `<h3>${craft.name} was first launched in ${craft.year}</h3>`
		})
	}

	ships.getSpacecraft = function() {
		return spacecraft;
	}

	ships.addSpacecraft = function(craft) {
		spacecraft.push(craft);
	}

	window.SolarSystem = window.SolarSystem || {};
	SolarSystem.Ships = ships;

	// define a new property on SolarSystem and assign ti the value of the new ships obj
	// oldSolarSystem.Ships = ships;

	// return oldSolarSystem;


}



