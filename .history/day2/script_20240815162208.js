"use strict";

let globalVar = "I'm global";
function testScope() {
  let localVar = "I'm local";
  console.log(globalVar, localVar);
}
testScope();
// console.log(localVar); // This would cause an error

//Advance Console Interface
console.table([
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
]);
console.time("Timer");
// Some code here
console.timeEnd("Timer");
console.assert(1 !== 2, "This will show an error message");
