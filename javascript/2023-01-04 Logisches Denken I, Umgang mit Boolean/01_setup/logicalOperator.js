// Logical Operators
/**
 * && - and
 * || - or
 * ! - not
 */

/**
 * In JavaScript gibt es nur sechs falsy Werte. Sowohl null als auch undefined sind
 * zwei der sechs falschen Werte. Hier ist eine vollständige Liste:
 * false
 * 0 (zero)
 * “” (empty string)
 * null
 * undefined
 * NaN (Not A Number)
 * Jeder andere Wert in JavaScript wird als truthy angesehen
 */

const firstVar = 10;
const secondVar = 20;

/**
 * bei && müssen alle werte true sein um true ausgegeben zu bekommen.
 * wenn nicht beide true sind wird immer false ausgegeben
 *
 * bei || reicht es wenn nur ein wert true ist um true ausgegeben zu bekommen
 *
 * ! wandelt aussagen (true or false) in das gegenteil um:
 * aus true wird false
 * aus false wird true
 */
console.log(firstVar < secondVar && firstVar == secondVar); // false
console.log(firstVar < secondVar || firstVar == secondVar); // true
console.log(!(firstVar < secondVar)); // false
console.log(!(firstVar > secondVar)); // true

const thridVar = 20;

/**
 *
 */
console.log(
    firstVar < secondVar || (firstVar == secondVar && secondVar === thridVar)
); // true

/**
 * bei || wird der erste wert der truthy ist ausgegeben, falls alle werte false sind,
 * wird der letzte Wert zurückgegeben.
 *
 * bei && wird der erste wert der falsy ist ausgegeben, falls alle Werte true sind,
 * wird der letzte Wert zurückgegeben.
 */
const str = "" || "John" || 0;
console.log(str);
console.log("" || "John" || 0);
console.log("" && false && "Hello World");
