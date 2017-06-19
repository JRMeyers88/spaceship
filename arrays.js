// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then substract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

// -----------------------------------------------------------

// let sortyInts = integers.sort(function(first, second) {
// 	return first - second;
// }).reverse().filter(function(value){
// 	return value <= 19;
// }).map(function(item){
// 	return item * 1.5;
// }).map(function(item){
// 	return item - 1;
// }).reduce(function(pre, cur){
// 	return pre + cur;
// });
// console.log("current state", sortyInts);

// -----------------------------------------------------------

// function compareNumbers(a, b){
// 	return a - b;
// };

// let array = integers.sort(compareNumbers).reverse().filter(function(integer){
// 	return integer <= 19;
// }).map(function(item){
// 	return (item * 1.5) -1;
// }).reduce(function(pre, cur){
// 	return pre + cur;
// });
// console.log("array", array);

// -----------------------------------------------------------

	// let globalVar = 500;
	// iife: immediately invoked function expression
// var globalThing = (function() {
// 	return {name: "GlobalThing"};
// }());

// var globalThing = (function(thing) {
// 	thing.newProp = "Now I'm lost";
// 	return thing;
// }(globalThing));
// console.log("global var", globalThing);
	// Augmenting. can be done with var, not let.

	// a fuction is only as good as what it returns


	// getters and setters
// var globalThing = (function() {
// 	let name = "fred";
// 	return {
// 		title: "GlobalThing",
// 		saymyname: function() {
// 			return: name + "smith";
// 		}
// 	};
// }());
// console.log("global var", globalThing);
	// if it's not necessary for "fred" to be accessible, define it in a var in the function



// var makeProfile = (function() {
//   let name = "Fred Jones";
//   let age = 37;
//   let likes =["puppies", "flowers", "pro wrestling"];
//   return {age, name, likes};
// }());

// var makeProfile = (function(city){
// 	city.newProp = "nashville";
// 	return city;
// }(makeProfile));
// console.log("make profile", makeProfile);


// var Profile = (makeProfile() {
//   let name = "Fred Jones";
//   let age = 37;
//   let likes =["puppies", "flowers", "pro wrestling"];
//   return {age, name, likes};
// }());

// var Profile = (function(previousProfile) {
// 	const possibleDates = ["Barb", "Biff", "Bart"];
// 	previousProfile.getDates = function() {
// 		return possibleDates
// 	}
// 	return previousProfile
// }(Profile));

// console.log("Profile?", Profile);



// ---------------------------------------------------------
// Space IFFE's
// ---------------------------------------------------------

// My Solar System app. It's gonna be yuge
console.log("IFFE's in spaaaace");

var SolarSystem = {};


