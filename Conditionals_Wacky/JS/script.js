/*
 * Chadwick Buist
 * WPF 1408 Section 1
 * Conditionals Wacky
 * 8-21-2014
 */

//Calculate if a person is old and fast enough to make the team in the 50m freestyle



var team;

//Prompt the kid for age.

var age = prompt("What is your age?");

//Validate the prompt

if(age === ""){age = prompt("Please enter your age!");}

//Prompt kid for speedTime.

var speedTime = prompt("What is your speed time?");

//Validate the prompt

if(speedTime === ""){speedTime = prompt("Please enter your speed time!");}

//if the kid is 14 or older and can swim in 24 seconds or faster then he makes the team.

team= (age >=14 && speedTime <=24)? "yes you make the team":"no you do not make the team";
console.log(team);
