/*
 * Chadwick L. Buist
 * WPF 1408 Section 1
 * Functions_Industry Project
 * 8-28-2014
 */

//Calculate how many monitors are needed for each desktop PC ordered.

var desktop = prompt("How many desktop PC's are you ordering?")

//Validate the prompt:

while(desktop === ""){desktop = prompt ("Please enter the number of desktop PC's you wish to purchase");}

console.log(desktop)

//Create a function to see how many monitors are needed per desktop purchased.

function monitors (desktopPC, monitorPC){
	var desktopPC = desktop
	var monitorPC = 1
	var totalMonitorToPC = desktopPC*monitorPC
	return totalMonitorToPC;
	
}

//establish return value

var trueTotalMonitorToPC = monitors(5,15);

//run to console.

console.log(trueTotalMonitorToPC);





