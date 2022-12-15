// JS Variablen
// Definieren einer variablen option:
// 1. const ES6- ES2015 Standard
// 2. let ES6- ES2015 Standard
// 3. var (Vermeide)
// Verwendet grundsätzlich immer const, es sein denn,
// ihr braucht let (variable muss veränderbar sein).
// Vermeidet komplett var!

const nachname = "Arsu";
let nachName = "Scharrer-Weißgerber";
var Nachname = "Groller";
let NachName = "Tinmaz";

console.log("Fahrenholz");
console.log(nachname);
console.log(nachName);
console.log(Nachname);
console.log(NachName);

// camel case: customerName;
// snake case: customer_name;

console.log("---");

// JS Arbeitet von oben nach nach unten.
// let macht variablen änderbar

let firstName = "Kera";
console.log(firstName);

// firstName wird hier neu deklariert und überschreibt den oben
// festgelegten wert

firstName = "Henna";
console.log(firstName);

// kann beliebig oft wiederholt werden
firstName = "Garry";
console.log(firstName);

console.log("---");

// const kann NICHT später verändert werden
const lastName = `Lang`;
console.log(lastName);

// lastName = "Hello"  // error TypeError: Assignment to constant variable.
// console.log(lastName);

console.log("---");

// Verwendet niemals var, es sein denn,
// ihr müsst es WIRKLICH, WIRKLICH, WIRKLICH  (Ihr müsst es nicht.)

var otherName1 = "Dave"; // Dave
console.log(otherName1);
var otherName1 = "Mona"; // Mona
console.log(otherName1);
var otherName1 = "Lena"; // Lena
console.log(otherName1);
