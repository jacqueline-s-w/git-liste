// TERNARY OPERATOR
// Der Operator wird durch ein Fragezeichen ? dargestellt. Er wird "ternär" genannt, weil der Operator drei Operanden hat.
// Es ist der einzige Operator in JavaScript, der so viele Operatoren hat.
// VERWENDUNG: Im Allgemeinen verwenden wir einen ternären Operator, wenn wir einer Variablen einen Wert auf der Grundlage einer Bedingung zuweisen wollen.

// const c = a + b;
// operator ist +
// operands :  a und b, daher binär

// Syntax: const result = condition ? value1 : value2

// operator ist ?
// operands : condition, value1 and value2, daher ternär

// 1.
// Die Bedingung wird ausgewertet: Wenn sie wahr ist, wird Wert1 zurückgegeben, andernfalls - Wert2.
const age = 21;
const accessAllowed = age > 18 ? true : false;

console.log(accessAllowed); // true

// ---------###--------
// 2.

const weather = "sunny";
console.log(
  weather === "sunny"
    ? "Vergessen Sie Ihre Sonnenbrille nicht!"
    : "Vergessen Sie Ihren Regenschirm nicht!"
);

// ---------###--------
// 3.

// wenn firstVar kleiner als secondVar ist, wird secondVar ausgegeben, ansonsten wird "Blah" ausgegeben.
// Speichern der Ausgabe in einer Variablen namens ternaryOp

const firstVar = 10;

const secondVar = 20;

const ternaryOp = firstVar < secondVar ? console.log(secondVar) : "Blah"; // 20

console.log(ternaryOp);
