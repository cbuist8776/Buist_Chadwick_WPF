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
	
	var totalMonitorToPC = desktopPC*monitorPC
	return totalMonitorToPC;
	
}

//establish return value

var trueTotalMonitorToPC = monitors(5,15);

//run to console.

console.log(trueTotalMonitorToPC);

//Questions for professor Garlic
// The questions I have on this section of code is regarding the arguement's I've established and how they are not going into the parameters I believe.
//How do I set up the call of the function to measure the arguements versus the origional variable's being taken from the prompt above to get the correct measurement?
//Am I doing the code in the correct order?
//Thank you once more for your help as I do greatly appreciate it.
//Sincerely,
//Chad Buist  1-757-392-8218  chadscontacts2014@gmail.com





