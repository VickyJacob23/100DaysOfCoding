"use strict";

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
