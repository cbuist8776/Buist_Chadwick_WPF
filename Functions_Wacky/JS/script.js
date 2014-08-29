/*
 * Chadwick Buist
 * WPF 1408 Section 1
 * Functions_Wacky Project
 * 8-28-2014
 */

//Calculate how many cars it will take to fill the parking spaces at the party this Labor Day Weekend.



//Validate the prompt



//Create a function to see how many cars it will take to fill up the 20 parking spaces before running out of space.

function parking (spaces) {
	
	var cars = prompt("How many cars are you bringing to the party?")
	
	while(cars === ""){cars = prompt ("Please enter the number of cars you're bringing to the party!");}

    console.log(cars);
    
    var capacity = spaces/cars
	
	console.log(capacity);}
	
	parking();
	
	parking (20);
	
	parking (40);
	
	parking (100);
	
	
	




	
	



