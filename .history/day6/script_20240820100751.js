"use strict";

//SWITCH STATEMENTS
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Wednesday":
    console.log("Midweek motivation!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Just another day!");
}

//TERNARY OPERATOR
let age = 18;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // "Allowed"

// EXPRESSIONS AND STATEMENTS
let a = 5; // This is a statement.
let b = a * 2; // The expression `a * 2` evaluates to 10.
