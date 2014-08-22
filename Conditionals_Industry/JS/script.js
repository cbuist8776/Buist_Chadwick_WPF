/*
 * Chadwick Buist
 * WPF 1408 Section 1
 * Conditionals Industry
 * 8-21-2014
 */

//Calculate if person is old enough and has enough money to buy a lap top from the store.

//Establish variables needed to make the purchase.
var age = prompt("How old are you?");

//Validate the prompt

if(age === ""){age = prompt("Please enter your age!");}

var money = prompt("How much money do you have to spend?") 

//Validate the prompt

if(money === ""){money = prompt("Please enter the amount you have to spend!");}

//if person is over 18 then he/she can make a purchase.

if(age >= 18){console.log("Yes you are old enough to make a purchase here.");}

//if the person has 100 dollars or more to spend then he/she can make a purchase.

if(money >= 100){console.log("Yes you have enough money to make a purchase here");}






