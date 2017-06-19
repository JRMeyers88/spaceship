
var SolarSystem = (function(oldSolarSystem) {
	let planets = [];
	let dwarfPlanets = [];
	let planetsLandedOn = 0;

	planetsArr.push("mercury", "venus", "earf", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto");

	let planets = Object.create(null);
		//object set to null has no properties, as opposed to set to {}

	planets.setPlanetsLandedOn = function(count) {
		if (count < 0 || count > planetsArr.length) {
			throw `I don't think so, bud. There's only ${planetsArr.length} planets`
		} else {
			planetsLandedOn = count;
		}
	} 

	planets.lowercasePlanets = function() {
		// TODO loop through the planets and use .toLowercase()
		planetsArr.forEach( function(planet) {
			planet = planet.toLowercase();
		});
	}

	planets.addDwarfPlanet = function(planetoid) {
		dwarfPlanets.push(planetoid);
	}

	planets.getPlanets = function() {
		return planetsArr;
	}

	oldSolarSystem.Planets = planets;

	return Planets

}(SolarSystem || {}));















