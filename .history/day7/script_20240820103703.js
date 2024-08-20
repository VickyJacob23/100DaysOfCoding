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

//The big difference? It's all about timing! Function declarations are like VIPs - JavaScript knows about them before running any code. But function expressions are treated like regular folks - JavaScript only recognizes them when it reaches that line of code. This timing difference can really affect how and when you can use these functions in your program.

//Arrow Function
let greetMe = () => {
  console.log("Hello, World!");
};

//Call the function
greetMe();

const greets = () => console.log("Hello, World!");
