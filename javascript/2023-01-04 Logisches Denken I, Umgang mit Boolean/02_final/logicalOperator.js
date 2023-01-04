// LOGICAL OPERATORS
// && - and
// || - or
// ! - not

const firstVar = 10;
const secondVar = 20;

console.log(firstVar < secondVar && firstVar == secondVar); // false
console.log(firstVar < secondVar || firstVar == secondVar); // true

console.log(firstVar < secondVar); // true
console.log(!(firstVar < secondVar)); // false
console.log(!(firstVar > secondVar)); // true

const thirdVar = 20;
console.log(
  firstVar < secondVar || (firstVar == secondVar && secondVar === thirdVar)
); // true

//---------------###------------------
let str = "" || "John" || 0; // John
let leererStr = "" && false && "Hello World"; // ""

// && gibt den ersten false Wert zurück. Falls alle Werte true sind, wird der letzte Wert zurückgegeben. (erster false Wert oder letzter true Wert)
// || gibt den ersten true Wert zurück. Falls alle Werte falsch sind, wird der letzte Wert zurückgegeben. (erster true oder letzter false Wert)
// Diese Werte geben immer false zurück: false, 0, "", null, undefined, NaN
