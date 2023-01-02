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

// ------------------ \\

// substr()

/**
 * substr() ist ähnlich wie slice(). Der Unterschied besteht darin,
 * dass der zweite Parameter die Länge des extrahierten Teils angibt.
 */

const substrString = "Apple, Pineapple, Kiwi";
console.log(substrString.substr(7, 6)); // Pineap

// Wenn wir den zweiten Parameter weglassen, schneidet substr() den
// Rest der Zeichenkette aus
const getSubstrWithout2ndPara = substrString.substr(7);
console.log(getSubstrWithout2ndPara);

// Ist der erste Parameter negativ, so zählt die Position
// vom ende der Zeichenkette an.
const getSubstrNegativePara = substrString.substr(-7, 4);
console.log(getSubstrNegativePara); // e, K

// ------------------ \\

// replace()
/**
 * Die Methode replace() ersetzt einen angegebenen Wert
 * durch einen anderen Wert in einer (neuen) Zeichenkette.
 */

const stringToReplace = "It's a lovely lovely outside.";
console.log(stringToReplace, stringToReplace.replace("lovely", "cold"));

/**
 * Die Methode replace() ändert die Zeichenkette, die sie aufrucht, nicht.
 * Sie gibt eine neue Zeichenkette zurück.
 */

/**
 * Standardmäßig ersetzt die Methode replace() nur die erste Übereinstimmung.
 * (Wenn alle Üereinstimmungen ersetzt werden sollem, dann kann man die replaceAll()
 * Methode verwenden.)
 * Standardmäßig wird bei der Methode replace() zwischen Groß- und Kleinschreibung
 * unterschieden. Wenn wir LOVELY (mit Großbuchstaben) schreiben, funktioniert das nicht
 */

const replacedString = stringToReplace.replace("lovely", "cold");
console.log(replacedString);

console.log(stringToReplace);

/**
 * Zum ersetzen ohne Berücksichtigung der Groß-/Kleinschreibung verwenden wir einen
 * regulären Ausdruck (RegEx) mit Kennzeichen /i (ohne Berücksichtigung der Groß-/
 * Kleinschreibung)
 */
console.log(stringToReplace.replace(/LOVELY/i, "cold"));

// ------------------ \\

// Converting to Upper case & Lower Case

// to uppecase
const text1 = "Hello World";
const text2 = text1.toUpperCase();
console.log(text2);

// to lowercase
const text3 = "HELLO WORLD";
const text4 = text3.toLocaleLowerCase();
console.log(text4);

// capitalise only the first letter
const name = "earth";
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
console.log(nameCapitalized);

// ------------------ \\

//trim()

/**
 * entfernt überflüssige Leerzeichen
 */

const stringToTrim = "   Hello Class FBW WD 22D07 A     ";
const trimmedString = stringToTrim.trim();
console.log(trimmedString);

// ------------------ \\

// charAt()
/**
 * Die Methode charAt() gibt das Zeichen an einem bestimmten Index in einer
 * Zeichenkette zurück.
 */
const charAtString = "Hallo World";
const charAtResult = charAtString.charAt(6); // console.log(charAtString[6]);
console.log(charAtResult);

// charCodeAt()
/**
 * Die Methode charCodeAt() gibt den Unicode des Zeichens an einem bestimmten Index
 * in einer Zeichenkette zurück.
 * Die Methode gibt einen UTF-16-Code zurück (eine ganze Zahl zwischen 0 und 65535)
 */
const charCodeAtString = "Hello World";
const getCharCode = charCodeAtString.charCodeAt(0);
console.log(getCharCode);

// ------------------ \\

// Convert a string to an array
// split()

/**
 * Eine Zeichenkette kann mit der Methode split() in ein Array umgewandelt werden.
 * Arrays sind durch kommata getrente Werte. Arrays sind veränderbar.
 * Array: [1, 2, 3, "abcd", true, null undefined]
 */
const txt1 = "It is a beautiful day today!";
console.log(txt1.split("t"));

const txt2 = "a1b1c1d1e";
console.log(txt2.split("1"));

const txt3 = "abc def ghi";
console.log(txt3.split(" "));

const txt4 = "a,b,c,d,e";
console.log(txt3.split(","));

const txt5 = "abc-def-ghi";
console.log(txt3.split("-"));

const txt6 = "Hello Class 'FBW WD 22D07 A'";
console.log(txt3.split(""));
