"use strict";

//Function
function greet() {
  console.log("Hello, World!");
}

//Call the function
greet();

//Function Expressions
function greet(name) {
  return `Hello, ${name}!`;
}

//Function Declaration
const greet = function (name) {
  return `Hello, ${name}!`;
};

//

//Arrow Function
let greetMe = () => {
  console.log("Hello, World!");
};

//Call the function
greetMe();

const greets = () => console.log("Hello, World!");
