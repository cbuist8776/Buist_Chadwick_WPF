/* Chadwick Buist
 * WPF 1408 Section 1
 * Personal Expressions Assignment
 * 8-14-2014
 */
//
var tank = 20;

var distance = 180*2;

var price = 3.40;

//Ask the driver how many times he or she filled up?

var fillups = prompt("How many times did you fill up on the whole trip?");

console.log(fillups);

//Calculate the total gallons and multiply it by the price.

var total = (20*3.40)*fillups;

//Write to the total to the console.

console.log(total);

//Alert the user with the total cost for the whole trip.

alert("Your total cost for gas is" + "" + total + " " + "dollars") ;


