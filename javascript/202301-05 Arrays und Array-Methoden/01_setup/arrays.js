// Arrays
/**
 * Arrays sind geordnete Sammlungen, die ein erstes,
 * ein zweites, ein drittes Element usw. haben
 * Die Elemente werden durch Komma getrennt.
 * Die Elemente sind veränderlich.
 */

// Declaration:
/**
 * Für die Erstellung eines leeren Arrays gibt es zwei
 * verschiedene Schreibweisen:
 */

const arr = new Array();
console.log(arr); // []

const arr2 = [];
console.log(arr2); // []

let fruits = [];
console.log(typeof fruits); // object

fruits = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits); // ["Apple", "Orange", "Banana", "Melon", "Lemon"]
console.log(fruits.length); // 5

// ------------ \\

// Wir können ein Element in einem Array ersetzen:
console.log(fruits[0]); // Apple

fruits[0] = "Cherry"; // ["Cherry", "Orange", "Banana", "Melon", "Lemon"]
console.log(fruits);

// ... oder wir fügen dem Array ein neues hinzu:
fruits[6] = "Grapes";
console.log(fruits); // ["Cherry", "Orange", "Banana", "Melon", "Lemon", <1 empty item>, "Grapes"]

// löschen von Werten in einem Array
/**
 * Da Arrays Objekte sind, werden die Elemente als Werte und die Idizes als
 * Schlüssel gespeichert.
 * delete obj.key löscht einen Wert mit des keys (Schlüssel)
 * {0: "Cherry", 1:"Orange"...6: undefined}
 */
delete fruits[fruits.length - 1]; // same as "delete fruits[6];"
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon', 'Lemon', <2 empty items> ]

// ------------ \\

// Werte-Mix

const mixtureOfData = [
    "Apple",
    { name: "John" },
    true,
    function () {
        console.log("Hello");
    },
];
console.log(mixtureOfData); // [ 'Apple', { name: 'John' }, true, [Function (anonymous)] ]

console.log(mixtureOfData[0]); // Apple
console.log(mixtureOfData[1]); // { name: 'John' }
// das Objekt mit dem Index 1 erhalten und dann seinen Namen anzeigen
console.log(mixtureOfData[1].name); // John
console.log(mixtureOfData[2]); // true
console.log(mixtureOfData[3]); // [Function (anonymous)]
// die Funktion bei Index 3 abrufen und dann ausführen
mixtureOfData[3](); // Hello

// ------------ \\

// Array Methods
/**
 * Methoden zum Hinzufügen und Entfernen von Elementen am Anfang oder am Ende:
 * push(), pop(), shift(), unshift().
 */
const fruits2 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits2);

// pop() und push()
/**
 * pop() und push() arbeiten mit dem Ende des Arrays.
 * pop() löscht immer das letzte Element in einem Array mitsamt index.
 * push() fügt hinter das letzte Element in einem Array ein neues hinzu.
 */
// pop()
fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana', 'Melon' ]

fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana' ]

// push()
fruits2.push("grapes");
console.log(fruits2);

// ------------ \\

// shift() und unshift()
/**
 *
 * shift() löscht immer der ersste Element in einem Array mitsamt index,
 * unshift() fügt vor dem ersten Element in einem Array ein neues hinzu.
 */
// shift()
console.log("Original fruits array:", fruits2);
fruits2.shift();
console.log("array after shift():", fruits2);

// unshift()
console.log("Original fruits array:", fruits2);
fruits2.unshift("Lemon", "Kite");
console.log("array after ushift():", fruits2);

// ------------ \\

// splice()
/**
 * splice() entfernt an der angegebenen stelle des arrays, die angegebene
 * menge an Elemente. Man kann auch gleichzeitig neue Elemente hinzufügen.
 * splice() ermöglicht auch einfach Elemente an bestimmten Indexstellen
 * hinzuzufügen.
 *
 * splice(index position, anzahl der elemente).
 * splice() ohne angabe lösch alles aus dem array.
 * splice(index position, 0, element)
 */

const greeting = ["Have", "a", "nice", "day!"];
greeting.splice(0, 1); // ab Index 0 ein Element entfernen
console.log(greeting); // [ 'a', 'nice', 'day!' ]

greeting.splice(0, 2); // ab Index 0 zwei Elemente entfernen
console.log(greeting); // [ 'day!' ]

const greeting2 = ["Have", "a", "nice", "day!"];
// Entferne die ersten 3 Elemente und ersetze sie durch andere
const removedElements = greeting2.splice(0, 3, "It's", "a", "beautiful");
console.log(greeting2); // [ "It's", 'a', 'beautiful', 'day!' ]
// splice gibt das Array der entfernten Elemente zurück:
console.log(removedElements); // [ 'Have', 'a', 'nice' ]

// Jetzt können wir push() verwenden, um Elemente zum Arrey removedElements hinzuzufügen.
removedElements.push("evening!");
console.log(removedElements); // [ 'Have', 'a', 'nice', 'evening!' ]

const statement1 = ["We", "are", "learning", "the", "language", "JavaScript"];

statement1.splice(4, 0, "programming");

console.log(statement1); // ["We", "are", "learning", "the", "programming", "language", "JavaScript"];

/**
 * In Array-Methoden sind negative Indizes erlaubt.
 * Sie geben die Position ab dem Ende des Arrays an.
 */
const numbersArr = [1, 2, 5];
// ab Index -1 (ein schritt vom ende) 0 elemente löschen, dann 3 und 4 einfügen
numbersArr.splice(-1, 0, 3, 4);
console.log(numbersArr); // [ 1, 2, 3, 4, 5 ]

// ------------ \\

// slice()

const numbersArr2 = [0, 1, 2, 3, 4, 5, 6];
const slicedElements = numbersArr2.slice(0, 3);
console.log(slicedElements); // [ 0, 1, 2 ]

// ------------ \\

// concat()
/**
 * concat() kann mehrere Arrays verbinden
 */
const numbersArr3 = [1, 2];
const concatNumbers = numbersArr3.concat([3, 4]);
console.log(concatNumbers); // [ 1, 2, 3, 4 ]
console.log(numbersArr3); // [ 1, 2 ]

let concat2Arrays = numbersArr3.concat([3, 4], [5, 6]);
console.log(concat2Arrays); // [ 1, 2, 3, 4, 5, 6 ]

const concatStringsToArrays = numbersArr3.concat([3, 4], "hello", "hola");
console.log(concatStringsToArrays); // [ 1, 2, 3, 4, 'hello', 'hola' ]

// arrays are mutable (arry können verändert werden)
concat2Arrays = concat2Arrays.concat([7, 8]);
console.log(concat2Arrays); // [1, 2, 3, 4, 5, 6, 7, 8];

const testArray1 = ["hello"];
const testArray2 = ["world"];
const concatTwoArrays = testArray1.concat(testArray2);
console.log(concatTwoArrays); // [ 'hello', 'world' ]

// ------------ \\

// reverse()
// kehrt die reihenfolge der elemente im array um.
const aNewArray = [1, 2, 3, 4, 5];
aNewArray.reverse();
console.log(aNewArray); // [ 5, 4, 3, 2, 1 ]

// ------------ \\

// indexOf()

const anotherArray = ["hello", "world"];
console.log(anotherArray.indexOf("hello")); // 0
console.log(anotherArray.indexOf("hello", 1)); // -1

// ------------ \\

//includes()

console.log(anotherArray.includes("hello")); // true
console.log(anotherArray.includes("hello", 1)); // false

// ------------ \\

//join()
/**
 * wandelt array daten in einen string um, um es es anderweitig weiter verarbeiten.
 * zu können.
 */
const newVariable = anotherArray.join("-");
console.log(newVariable); // hello-world
console.log(typeof newVariable); // string

// ------------ \\

// sort()
/**
 * sortiert array/string numerisch und alphabetisch
 */
const aNewArray2 = [1, 2, 15];
aNewArray2.sort();
console.log(aNewArray2); // [ 1, 15, 2 ]

const newNumArray3 = [1, 2, 15, -4362346, "string", "abc"];
newNumArray3.sort();
console.log(newNumArray3); // [ -4362346, 1, 15, 2, 'abc', 'string' ]
console.log(typeof newNumArray3); // object

// ------------ \\

// toString()
/**
 * ähnlich wie join() aber nimmt komma als seperator
 */
const fruits3 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits3);
const arrayToString = fruits3.toString();
console.log(arrayToString); // Apple,Orange,Banana,Melon,Lemon

console.log(typeof arrayToString); // string

console.log(arrayToString[3]); // l
