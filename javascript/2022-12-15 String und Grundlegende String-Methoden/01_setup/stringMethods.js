// STRING METHODS
/**
 * Alle String-Methoden geben einen neuen String zurück.
 * Sie ändern den Urspünglichen String nicht.
 * ---
 * Anders gesagt: Strings sind unveränderlich:
 * Strings können nicht geändert werden, sondern nur ersetzt (überschrieben) werden.
 */

// LENGTH
const myText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const findLength = myText.length;
console.log(findLength);

// ********** ### **********

// POSITION

const myString = "Bitte lokalisieren Sie, wo 'lokalisieren' vorkommt";
const findPosition = myString.indexOf("lokalisieren");
console.log(findPosition);

const findLastPosition = myString.lastIndexOf("lokalisieren");
console.log(findLastPosition);

/**
 * Sowohl indexOf() als auch lastIndexOf() geben -1 zurürck, wenn der gesuchte
 * Text nicht gefunden wird
 */
const findMissingElement = myString.lastIndexOf("sonne");
console.log(findMissingElement);

/**
 * Beide Methoden akzeptieren einen zweiten Parameter als Startposition
 * für die Suche.
 */
const findPostionStartingPoint = myString.indexOf("lokalisieren", 15);
console.log(findPostionStartingPoint);
/**
 * Die Methode lastIndexof() gibt den Index des letzten Vorkommens eines angegebenen
 * Textes in einer Zeichenkette zurück.
 * Sie sucht rückweärts (vom Ende zum Anfang)
 */
const findLastPostionStartingPoint = myString.lastIndexOf("lokalisieren", 27);
console.log(findLastPostionStartingPoint);

// INCLUDES

const myString2 = "widget with id";

const ifSubStringIncluded = myString2.includes("id", 3);
console.log(ifSubStringIncluded);

// EXTRACTING STRING PARTS

// slice()
// Benötigz 2 Parameter: Die Startposition und die Endposition (das Ende ist nicht enthalten)
const fruits = "Apple, Banana, Kiwi";
const slicedString = fruits.slice(7, 13); // Startwert ist inclusive und Endwert ist exlusive (also nicht mehr inbegriffen)
console.log(slicedString); // Banana: B ist am index 7 und a ist am index 12

// Wenn wir den zweiten Parameter weglassen, schneidet die Methode den Rest des Strings (Zeichenkette) aus.

const sliceWith1Param = fruits.slice(7);
console.log(sliceWith1Param); // Banana, Kiwi

// Ist ein Parameter negativ, wird die Position vom Ende der Zeichenkette (String) aus gezählt.

const slicedStringInNegative = fruits.slice(-12, -6);
console.log(slicedStringInNegative); // B ist an Index -12 uind a ist an index -7

// vom Ende her zählend
const sliceFromEnd = fruits.slice(-7);
console.log(sliceFromEnd);

const slicedStringFromEnd = fruits.slice(-1); // index -1 deswegen, weil es kein 0 gibt.
console.log(slicedStringFromEnd);

//////////////////////////////////////////////////
const bananaOderApfel = true ? "banane" : "apfel";
console.log(bananaOderApfel);
//////////////////////////////////////////////////
