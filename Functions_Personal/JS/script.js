/*
 * Chadwick L. Buist
 * WPF 1408 Section 1
 * Functions_Personal
 * 8-28-2014
 */
//Calculate how many push-ups, sit ups, and squats I must do combined to  make either team A's standards or team B's standards.

//Prompt user for the number of push-ups, sit ups, and squats completed and validate the prompt with a function.

//Standard to make team A is total 150 or greater.  Standard to make team B is total 149 or less.  Calculate which team I will be on after information is entered.

//Create function for calculating whether I make team A or B.


var pushup = prompt("How many pushups did you complete?")
	
	//Validate the prompt

while(pushup === ""){pushup = prompt ("Please enter the number of pushups completed!");}

console.log(pushup)
	
	var situp = prompt ("How many situps did you complete?")
	
	//Validate the prompt

while(situp === ""){situp = prompt ("Please enter the number of situps completed!")}

console.log(situp)
	
	var squat = prompt("How many squats did you complete?")
	
	//Validate the prompt

while(squat === ""){squat = prompt ("Please enter the number of squats you completed!")}

console.log(squat)

function teamTotal(pushup, situp, squat){
	
	
	var total= (pushup) * (situp) * (squat)/3
	
	return total
	
	console.log(total);}
	
	//Call the function.
	
	teamTotal();
	
	var trueTotal = teamTotal();
	
	console.log (trueTotal);
	
	
	
	
	
	
    









