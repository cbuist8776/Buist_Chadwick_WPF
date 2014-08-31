/*  
 *Chadwick Buist
 * WPF 1408 Section 1
 * Functions_Wacky Project
 * 8-28-2014
 */

//Calculate how many cars it will take to fill the parking spaces at the party this Labor Day Weekend.

var cars = prompt("How many cars are you bringing to the party?")
	
	while(cars === ""){cars = prompt ("Please enter the number of cars you're bringing to the party!");}

    console.log(cars);

//Validate the prompt



//Create a function to see how many cars it will take to fill up the 20 parking spaces before running out of space.

function parking (spaces, cars) {
	
	var spaces = 20
	
	var vehicles = cars
	
	var capacity = spaces/cars
	
	return capacity;
	
//Set up return variable and arguements to put into the parameters
	
	var totalParking = parking(20, 40, 100);
	
	console.log (totalParking);
	
	
	//Questions for Professor Garlic
	// I know this function is very simple and before I make it further complex I'm getting an error in the console on line one that states "Unexpected end of input".
	//I'm not sure what that error is pointing to and I'm having a hard time correcting it to run the function.
	//Could you help me in that regard and then let me know if the code so far for this function, return value, call, etc are correct or not?
	//Thank you once more for all your help as I do greatly appreciate it.
	//Sincerely,
	//Chad Buist
	
	
	
	
	
	
	
	




	
	



