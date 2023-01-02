// STRING METHODS
// Alle String-Methoden geben eine neue Strings zurück. Sie ändern die ursprüngliche Zeichenkette nicht.
// Förmlich gesagt: Strings sind unveränderlich: Strings können nicht geändert, sondern nur ersetzt werden.

// LENGTH
const myText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const findLength = myText.length;
console.log(findLength); // 26

// ---------###--------

// POSITION

const myString = "Bitte lokalisieren Sie, wo 'lokalisieren' vorkommt";
const findPosition = myString.indexOf("lokalisieren");
console.log(findPosition); // 6

const findLastPosition = myString.lastIndexOf("lokalisieren");
console.log(findLastPosition); // 28

// Sowohl indexOf() als auch lastIndexOf() geben -1 zurück, wenn der Text nicht gefunden wird.
const findMissingElement = myString.indexOf("sun");
console.log(findMissingElement); // -1

// Beide Methoden akzeptieren einen zweiten Parameter als Startposition für die Suche
const findPositionStartingPoint = myString.indexOf("lokalisieren", 15);
console.log(findPositionStartingPoint); // 28

// Die Methode lastIndexOf() gibt den Index des letzten Vorkommens eines angegebenen Textes in einer Zeichenkette zurück
// Sie sucht rückwärts (vom Ende zum Anfang)
const findPositionFromEnd = myString.lastIndexOf("lokalisieren", 5);
console.log(findPositionFromEnd); // -1

const myString2 = "widget with id";
const findPosition2 = myString2.indexOf("id");
console.log(findPosition2); // 1

const findLastPosition2 = myString2.lastIndexOf("id");
console.log(findLastPosition2); // 12

const findPositionWithSpace = myString2.indexOf(" id");
console.log(findPositionWithSpace); // 11

const findPositionWithSpace2 = myString2.indexOf("id ");
console.log(findPositionWithSpace2); // -1

// --------###--------
// INCLUDES

const ifSubStringIncluded = myString2.includes("id", 3);
console.log(ifSubStringIncluded); // true

// --------###--------
// EXTRACTING STRING PARTS

// slice()
// Sie benötigt 2 Parameter: die Startposition und die Endposition (das Ende ist nicht enthalten)
const fruits = "Apple, Banana, Kiwi";
const slicedString = fruits.slice(7, 13);
console.log(slicedString); // Banana: B is index 7, a is index 12

// Wenn Sie den zweiten Parameter weglassen, schneidet die Methode den Rest der Zeichenkette aus.
const sliceWith1Param = fruits.slice(7);
console.log(sliceWith1Param); // Banana, Kiwi

// Ist ein Parameter negativ, wird die Position vom Ende der Zeichenkette aus gezählt.
const slicedStringInNegative = fruits.slice(-13, -7);
console.log(slicedStringInNegative); // " Banan": index -13 will not be counted, -7 is counted

// vom Ende her zählend
const slicedStringFromEnd = fruits.slice(-7);
console.log(slicedStringFromEnd); // "a, Kiwi": -7 is not counted

console.log(fruits.slice(-1)); // i: index -1 will not be counted -0 does not exist
console.log(fruits[0]); // A

// ---------####----------
// substr
// substr() ist ähnlich wie slice(). Der Unterschied besteht darin, dass der zweite Parameter die Länge des extrahierten Teils angibt.
const substrString = "Apple, Pineapple, Kiwi";
const getSubstrString = substrString.substr(7, 6);
console.log(getSubstrString); // Pineap

// Wenn Sie den zweiten Parameter weglassen, schneidet substr() den Rest der Zeichenkette aus.
const getSubstrWithout2ndPara = substrString.substr(7);
console.log(getSubstrWithout2ndPara); // Pineapple, Kiwi

// Ist der erste Parameter negativ, so zählt die Position vom Ende der Zeichenkette an.
const getSubstrNegativePara = substrString.substr(-7);
console.log(getSubstrNegativePara); // e, Kiwi

// -----------####-----------####-----------
// DEN INHALT DER ZEICHENKETTE ZU ERSETZEN
// replace()
// Die Methode replace() ersetzt einen angegebenen Wert durch einen anderen Wert in einer Zeichenkette
const stringToReplace = "It's a lovely lovely outside!";
console.log(stringToReplace.replace("lovely", "cold")); // It's a cold lovely outside!
// Die Methode replace() ändert die Zeichenkette, die sie aufruft, nicht. Sie gibt eine neue Zeichenkette zurück.

// Standardmäßig ersetzt die Methode replace() nur die erste Übereinstimmung
// Standardmäßig wird bei der Methode replace() zwischen Groß- und Kleinschreibung unterschieden. Wenn Sie LOVELY (mit Großbuchstaben) schreiben, funktioniert das nicht.

const replacedString = stringToReplace.replace("lovely", "cold");
console.log(replacedString); // It's a cold lovely outside!

console.log(stringToReplace); // It's a lovely lovely outside!

// Zum Ersetzen ohne Berücksichtigung der Groß-/Kleinschreibung verwenden Sie einen regulären Ausdruck mit dem Kennzeichen /i (ohne Berücksichtigung der Groß-/Kleinschreibung)
console.log(stringToReplace.replace(/LOVELY/i, "cold")); // It's a cold lovely outside

// -----------####-----------####-----------
// CONVERTING TO UPPER CASE & LOWER CASE

// to upper case
const text1 = "Hello World";
const text2 = text1.toUpperCase();
console.log(text2); // HELLO WORLD

// to lower case
const text3 = "HELLO WORLD";
const text4 = text3.toLowerCase();
console.log(text4); // hello world

// capitalise only the first letter
const name = "earth";
const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
console.log("First uppercase letter", nameCapitalized); // Earth

// -----------####-----------####-----------
// trim()
// Die Methode trim() entfernt Leerzeichen von beiden Seiten einer Zeichenkette
const stringToTrim = "    Hello Class FBW32!    ";
const trimmedString = stringToTrim.trim();
console.log(trimmedString); // Hello Class FBW32!

// -----------####-----------####-----------
// EXTRACTING STRING CHARACTERS
// charAt()
// Die Methode charAt() gibt das Zeichen an einem bestimmten Index (Position) in einer Zeichenkette zurück
const charAtString = "Hello World";
const charAtResult = charAtString.charAt(6);
console.log(charAtResult); // W

// charCodeAt()
// Die Methode charCodeAt() gibt den Unicode des Zeichens an einem bestimmten Index in einer Zeichenkette zurück. Die Methode gibt einen UTF-16-Code zurück (eine ganze Zahl zwischen 0 und 65535).
const charCodeAtString = "Hello World";
const getCharCode = charCodeAtString.charCodeAt(0);
console.log(getCharCode); // 72

// -----------####-----------####-----------
// CONVERT A STRING TO AN ARRAY
// split()
// Eine Zeichenkette kann mit der Methode split() in ein Array umgewandelt werden.
// Arrays sind durch Kommata getrennte Werte. Arrays sind veränderbar.
// Dies ist ein Array: [1, 2, 3, "abcd", true, null, undefiniert]

const txt1 = "It is a beautiful day today!";
console.log(txt1.split("t")); // [ 'I', ' is a beau', 'iful day ', 'oday!' ]

const txt2 = "1a1b1c1d1e1";
console.log(txt2); // "1a1b1c1d1e1"

console.log(txt2.split("1")); // [ '', 'a', 'b', 'c', 'd', 'e', '' ]

const txt3 = "abc def ghi";
console.log(txt3.split(" ")); // [ 'abc', 'def', 'ghi' ]

const txt4 = "abc-def-ghi";
console.log(txt4.split("-")); // [ 'abc', 'def', 'ghi' ]

const txt5 = "a,b,c,d,e";
console.log(txt5); // a,b,c,d,e

console.log(txt5.split(" ")); // [ 'a,b,c,d,e' ]: String inside an array

console.log(txt5.split(",")); //  [ 'a', 'b', 'c', 'd', 'e' ]

const txt6 = "Hello Class 'FBW32'";
console.log(txt6.split("")); // ['H', 'e', 'l', 'l', 'o',' ', 'C', 'l', 'a', 's','s', ' ', 'F', 'B', 'W','3', '2']

console.log(txt6.split(",")); // [ "Hello Class 'FBW32'" ]
