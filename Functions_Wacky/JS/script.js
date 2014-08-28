/*
 * Chadwick Buist
 * WPF 1408 Section 1
 * Functions_Wacky Project
 * 8-28-2014
 */

//Calculate how many cars it will take to fill the parking spaces at the party this Labor Day Weekend.

var cars = prompt("How many cars are you bringing to the party?")

//Validate the prompt

while(cars === ""){cars = prompt ("Please enter the number of cars you are bringing to the party);}

console.log(cars)

//Create a function to see how many cars it will take to fill up the 20 parking spaces before running out of space.

function parking () {
	var cars = 1 
	var spaces = 20
	var capacity = spaces/cars
	console.log(capacity);}
	
	parking();



