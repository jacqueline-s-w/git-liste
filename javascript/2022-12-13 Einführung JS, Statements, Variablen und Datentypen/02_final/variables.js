// JS Variables
// Definieren einer variablen Option:
// 1. const ES6- ES2015
// 2. let   ES6- ES2015
// 3. var   (Vermeiden)
// Verwendet grundsätzlich immer const, es sei denn, ihr brauchen let. Vermeidet var.

const otherName = "John";
console.log(otherName);    // John
console.log('otherName');  // otherName

// camel case: customerName;
// snake case: customer_name;

let firstName = "Kera";
console.log(firstName); // Kera

firstName = "Henna";
console.log(firstName); // Henna

firstName = "Gerry";    // Gerry
console.log(firstName);

const lastName = `Lang`;    
console.log(lastName);      // Lang

// const lastName = "Hello";    // error
// console.log(lastName);

// Verwendet niemals var, es sei denn, ihr müsst es WIRKLICH, WIRKLICH, WIRKLICH (Ihr müsst es nicht.)
var otherName = "Dave"; 
console.log(otherName);    // Dave

var otherName = "Mona";
console.log(otherName);    // Mona

var otherName = "Lena";
console.log(otherName);    // Lena