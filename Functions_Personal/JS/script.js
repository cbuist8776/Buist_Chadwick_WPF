/*
 * Chadwick L. Buist
 * WPF 1408 Section 1
 * Functions_Personal
 * 8-28-2014
 */
//Calculate how many push-ups, sit ups, and squats I must do combined to  make either team A's standards or team B's standards.

//Prompt user for the number of push-ups, sit ups, and squats completed and validate the prompt.

var pushup = prompt("How many pushups did you complete?")

//Validate the prompt

while(pushup === ""){pushup = prompt ("Please enter the number of pushups completed!");}

console.log(pushup)

var situp= prompt ("How many situps did you complete?")

//Validate the prompt

while(situp === ""){situp = prompt ("Please enter the number of situps completed!")}

console.log(situp)

var squat= prompt("How many squats did you complete?")

//Validate the prompt

while(squat === ""){squat = prompt ("Please enter the number of squats you completed!")}

console.log(squat)

//Standard to make team A is 150.  Standard to make team B is 100.  Calculate which team I will be on after information is entered.

//Create function for calculating whether I make team A or B.

function teamTotal(){
	var pushup = pushup
	
	var situp = situp
	
	var squat = squat
	
	var total= pushup+situp+squat
	console.log(total);}
	
	teamTotal();









