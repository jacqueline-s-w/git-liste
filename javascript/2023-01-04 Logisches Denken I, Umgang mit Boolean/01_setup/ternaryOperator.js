// Ternary Operator
/**
 * Dieser Operator wird durch ein Fragezeichen ? dargestellt. Er wird "ternär"
 * genannt, weil der Operator drei Operanden hat.
 * Es ist der einzige Operator in JavaScript, der so viele Operanden hat.
 *
 * const result = bedingung ? value1 : value2;
 *
 * Bedingung: true
 * const result = value 1
 *
 * Bedingung: false
 * const result = value2
 *
 * Verwendung: Im Allgemeinen verwenden wir einen ternären Operator,
 * wenn wir einer Variablen einen Wert auf der Grundlage einer Bedingung zuweisen
 * wollen.
 */

// const customUser = "Manuel Fahrenholz";
// const user = customUser != "" ? customUser : "Max Mustermann";
// console.log(user);

/**
 * const c = a + b;
 * operator ist +
 * operands: a und b, daher binär
 *
 * Syntax: const result = condition = value1 : value2;
 *
 * operator ist ?
 * operand: condition, value1 und value2, daher tenär (dreifach)
 */

// 1. Beispiel
/**
 * Die Bedingung wird ausgewertet:
 * Wenn sie wahr ist, wird Wert1 zurückgegeben,
 * andernfalls - Wert2
 */
const age = 21;
const accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);

// 2. Beispiel
const weather = "sunny";
console.log(
    weather === "sunny"
        ? "Vergiss deine Sonnenbrille nicht!"
        : "Vergiss deinen Regenschirm nicht!"
);

// 3. Beispiel
const firstVar = 10;
const secondVar = 20;
const ternaryOp = firstVar < secondVar ? console.log(secondVar) : "Blah"; // 20
// console.log(ternaryOp); // undefined
