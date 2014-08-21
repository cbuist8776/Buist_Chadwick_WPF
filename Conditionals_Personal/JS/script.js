/*
 * Chadwick Buist
 * WPF 1408 Section 1
 * Conditionals Personal
 * 8-21-2014
 */

//Calculate whether or not I should go out with a person based on where we live, how much we make, and if we like each other.

//Ask the woman's name.

var name = prompt("What is your name?");

//Validate the prompt

if(name === "") {name= prompt("Please enter your name!");}

//Ask where the person lives and validate the prompt.

var residence = prompt("Where do you live?");

//Validate the prompt

if(residence === ""){residence= prompt("Please enter where you live!");}

//Ask how much the person makes.

var income = prompt("How much do you make per year?");

//Validate the prompt

if (income === ""){income= prompt("Please enter your income!");}

//Ask if she likes me.

var like = prompt("Do you like Chad Buist?");

//Validate the prompt

if(like === ""){like= prompt("Please enter if you like Chad Buist or not!");}

//Let Chad know if she lives in Onancock or not.

if(residence = "Onancock"){alert("Chad she lives in the same town as you.");}

//Let Chad know if she makes over 35,000 per year.

if(income >= "35,000"){alert("Chad she makes enough money.");}








