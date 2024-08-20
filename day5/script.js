"use strict";

// Logical Operators

let isTired = false;
let isHungry = true;

if (!isTired && isHungry) {
  console.log("Eat something!");
} else {
  console.log("No need to eat!");
}

// Conditional Operator

let age = 17;
let isEligible = age >= 18;

console.log(isEligible ? "Welcome to the party!" : "Sorry, you're too young!");

let isRaining = true;
let isWindy = false;

if (isRaining && !isWindy) {
  console.log("Take an umbrella!");
} else if (isRaining || isWindy) {
  console.log("Better stay inside!");
} else {
  console.log("Perfect day for a picnic!");
}
