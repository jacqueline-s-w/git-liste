// Mathematical expressions:
// +, -, *, /, modulo- %, exponentiation- **

console.log(1 + 1);         // 2
console.log("1 + 100");     // 1 + 100
console.log(1 + 100);       // 101

// concatenation
console.log("Hello" + "World");
console.log("2" + "3");
console.log("Good morning" + "Class" + 32);

// modulo: % gibt den Restbetrag zurück
console.log(10 % 3);        // 1
console.log(500 % 2);       // 0

// Operand: ist das, worauf die Operatoren angewendet werden.
let varOne = 8; 
console.log(varOne); // 8
// Neuzuordnung von varOne
varOne = -varOne;   // unary
console.log(varOne); // -8

// 5 * 2 : 2 operands 5 and 2.
const varTwo = 5;
const varThree = 8;
console.log(varThree + varTwo); // 13

// operator: +
// operands: 5 and 8
// operation: binary because two operands are involved

// Potenzierung - **
console.log(2 ** 2); // 4 (2 multiplied by itself 2 times)
console.log(2 ** 3); // 8 (2 * 2 * 2, 3 times)

// String Verkettung mit binären

let strOne = "Hello";
let strTwo = "World";
console.log(strOne + " " + strTwo); // Hello World

console.log("2" + 1); // "21"
console.log(1 + "2"); // "12"
console.log(2 + 2 + "1"); // 41
console.log("2" + 2 + 1); // 221
console.log("2" + (2 + 1)); // 23

// BODMAS: 2 + (1 * 5) / 4
// Bracket
// Open
// Divide
// Multiply
// Add
// Subtract
// ----------X---------

// Declaration
let myVar = 2;
myVar = myVar + 5;
console.log("myVar is " + myVar);   // myVar is 7

myVar = myVar * 2;
console.log("myVar ist " + myVar);   // myVar ist 14
// Neuzuweisung
myVar += 5;
myVar *= 2;

let myVar2 = 2;
myVar2 *= 3 + 5; // (rechter Teil zuerst bewertet)
console.log(myVar2); // 16

// increment ++
// decrement --

let counter = 2;
counter++; // postfix form
console.log("Counter is " + counter); // Counter is 3

let counter2 = 2;
counter2--;
console.log("Counter is " + counter2); // Counter is 1

// console.log(5++); error!!!

let counter3 = 2;
++counter3; // prefix form
console.log("Counter is " + counter3); // Counter is 3