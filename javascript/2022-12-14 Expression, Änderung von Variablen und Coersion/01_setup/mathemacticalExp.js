// Mathematical expressions:
// +, -, *, /, exponentiation- **, modulo- %

console.log(1 + 1); // 2
console.log("1 + 1"); // 1 + 1
console.log(1 / 100); // 0.01
console.log(1 - 100); // -99

// concatenation = zwei strings werden miteinander verbunden sobakld ein + dabei ist
// bei -, / etc wird gerechnet
console.log("hello" + " " + "world"); // hello world
console.log("1" + 1); // 11
console.log("2" + "3"); // 23
console.log(1 + "1"); //11
console.log("Good morning" + " Class " + 32); // Good morning Class 32

// modulo: % gibt den Restbetrag einer division zurück
console.log(10 / 3); // 3.3333333333333335
console.log(10 % 3); // 1
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(7 / 4); // 1.75
// kommastellen vergessen beim berechnen
console.log(7 % 4); // 1 (7 / 4 = 1.75 -> 4 * 1 = 4 - 7 = 3 => 7 % 4)
console.log(500 % 2); // 0 (500 / 2 = 250 -> 250 * 2 = 500 - 500 = 0 => 500 % 2)

// Operand: ist das, worauf die Operatoren angewendet werden (+,- etc)
let varOne = 8;
console.log(varOne); // 8
varOne = -varOne; // setzt operand auf -8
console.log(varOne); // -8
// 5 * 2 -> Zwei operands 5 und 2
const varTwo = 5;
const varThree = 8;
console.log(varThree + varTwo); // 13
// operator: +. -, *, etc
// operands in dem fall 5 und 8
// operations ist binär weil wir nur zwei operands haben

// Potenzierung - ** (exponentiation)
console.log(2 ** 2); // 4 (2 wird zweimal Mal genommen mit sich selber = 2 * 2)
console.log(2 ** 3); // 8 (2 * 2 * 2, 3-mal)

// String Verkettung (concatinations) mit binären

const strOne = "Hello";
const strTwo = "World";
console.log(strOne + " " + strTwo); // Hello World

console.log("2" + 1); // "21"
console.log(1 + "2"); // "12"
// ist der string hinten wird erst die mathematische berechnung genommen und dann concatiniert
console.log(2 + 2 + "1"); // "41"
// wenn string vorne ist wird alles als concatination angesehen
console.log("2" + 2 + 1); // "221"
// ist der string vorne und die mathematische berechnung in klammern wird erst die mathematische berechnung zuerst genommen und dann concatiniert
console.log("2" + (2 + 1)); // "23"

// ----------------x----------------
// BODMAS (REGELUNG): 2 + (1 * 5) / 4 = 3.25
// Bracket
// Devide
// Multiply
// Add
// Subtract
// ----------------x----------------

let myVar = 2;
myVar = myVar + 5;
console.log("myVar ist" + " " + myVar); // myVar ist 7

myVar = myVar * 2;
console.log("myVar ist" + " " + myVar); // myVar ist 14

//shorthand für obiges bsp
// myVar += 5;
// myVar *= 2;

let myVar2 = 2;
myVar2 *= 3 + 5; // myVar2 *= (3 + 5) = 16 // rechte Seite wird zuerst gerechnet
console.log(myVar2); // 16

let counter = 2;
// postfix form
// sonderfall wenns es um +/- 1 geht -> shorthand eines shorthands
// increment ++
// decrememt --
counter++; // selbe wie counter += 1; -> counter = counter + 1
console.log("Counter is " + counter); // Counter is 3

let counter2 = 2;
counter2--; // selbe wie counter -= 1; -> counter = counter - 1
console.log("Counter2 is " + counter2); // Counter2 is 1

// prefix form

let counter3 = 2;
++counter3; // prefix form
console.log("Counter ist " + counter3); // Counter3 ist 3
