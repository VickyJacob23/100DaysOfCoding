'use strict'


let coffeeCups = 3;
if (coffeeCups > 2) {
    console.log("You're super charged! Time to code!");
} else {
    console.log("Grab another cup, rookie!");
}

let num = Number("42"); // String to Number
let str = String(42); // Number to String

console.log("5" + 3); // Outputs "53" (number coerced to string)
console.log("5" - 3); // Outputs 2 (string coerced to number)

if ("JavaScript is awesome!") {
    console.log("This will always run!");
}

if (0) {
    console.log("This will never see the light of day.");
}

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