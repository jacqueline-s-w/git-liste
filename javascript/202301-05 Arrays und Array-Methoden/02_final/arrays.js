// ARRAYS
// Arrays sind geordnete Sammlungen, die ein erstes, ein zweites, ein drittes Element usw. haben.
// Sie sind durch Komma getrennte Werte.
// Sie sind veränderlich.

// Declaration:
// Für die Erstellung eines leeren Arrays gibt es zwei verschiedene Schreibweisen:

const arr = new Array();
console.log(arr); // []

const arr2 = [];
console.log(arr2); // []

let fruits = [];
console.log(typeof fruits); // object

fruits = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits); // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]
console.log(fruits[0]); // Apple
console.log(fruits.length); // 5

//-----------------####----------------

// Wir können ein Element ersetzen:
console.log(fruits[0]); // Apple

fruits[0] = "Cherry";
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon' ]

// … oder wir fügen dem Array ein neues hinzu:
fruits[6] = "Grapes";
console.log(fruits);

// Löschen von Werten
// Da Arrays Objekte sind, werden die Elemente als Werte und die Indizes als Schlüssel gespeichert.
// delete obj.key löscht einen Wert mit dem Schlüssel.
delete fruits[fruits.length - 1];
console.log(fruits); // [ 'Cherry', 'Orange', 'Banana', 'Melon', <3 empty items> ]

//-----------------####----------------

// Werte-Mix
const mixtureOfData = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];
console.log(mixtureOfData); // [ 'Apple', { name: 'John' }, true, [Function (anonymous)] ]

// das Objekt mit dem Index 1 erhalten und dann seinen Namen anzeigen
console.log(mixtureOfData[1].name); // John

// die Funktion bei Index 3 abrufen und ausführen
mixtureOfData[3](); // hello

//-----------------####----------------####------------------
// Array Methods
// Methoden zum Hinzufügen und Entfernen von Elementen am Anfang oder am Ende: push(), pop(), shift(), unshift().

const fruits2 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];

console.log(fruits2); // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]

// pop() und push() arbeiten mit dem Ende des Arrays.
// pop(): extrahiert das letzte Element eines Arrays und gibt es zurück.

fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana', 'Melon' ]

fruits2.pop();
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana' ]

// ------##------
// push(): Das Element wird an das Ende des Arrays angehängt.

fruits2.push("grapes");
console.log(fruits2); // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

// ------------##----------------
// shift(): extrahiert das erste Element des Arrays und gibt es zurück.
console.log("Original fruits array:", fruits2); // [ 'Apple', 'Orange', 'Banana', 'grapes' ]

const shiftedItem = fruits2.shift();
console.log("array after shift():", fruits2); // [ 'Orange', 'Banana', 'grapes' ]
console.log("Shifted item stored as another variable-", shiftedItem); // Apple

// ------##------
// unshift(): Element an den Anfang des Arrays hinzufügen.

console.log("Original fruits array:", fruits2); // Original fruits array: ['Orange', 'Banana', 'grapes']

fruits2.unshift("Lemon", "kite");
console.log(fruits2); // [ 'Lemon', 'kite', 'Orange', 'Banana', 'grapes' ]

// Eine QUEUE ist eine der häufigsten Verwendungen eines Arrays. In der Informatik bedeutet dies eine geordnete Sammlung von Elementen, die zwei Operationen unterstützt:

// push fügt ein Element an das Ende an.
// shift holt ein Element vom Anfang und schiebt die Warteschlange vor, so dass das zweite Element zum ersten wird.

// Arrays unterstützen beide Operationen.
// In der Praxis brauchen wir sie sehr oft. Zum Beispiel eine Warteschlange von Nachrichten, die auf dem Bildschirm angezeigt werden müssen.

// ------##------

// Es gibt einen weiteren Anwendungsfall für Arrays - die Datenstruktur namens STACK.

// Es unterstützt zwei Operationen:
// push fügt ein Element an das Ende an.
// pop nimmt ein Element vom Ende.
// Neue Elemente werden also immer vom "Ende" her hinzugefügt oder entnommen.

// ------------##----------------
// Da Arrays Objekte sind, werden die Elemente als Werte und die Indizes als Schlüssel gespeichert.
// delete obj.key löscht einen Wert mit dem Schlüssel.

// splice()
const greeting = ["Have", "a", "nice", "day!"];

greeting.splice(0, 1); // ab Index 0 ein Element entfernen
console.log(greeting); // [ 'a', 'nice', 'day!' ]

greeting.splice(0, 2); // ab Index 0 zwei Elemente entfernen
console.log(greeting); // [ 'day!' ]

const greeting2 = ["Have", "a", "nice", "day!"];
// Entferne die ersten 3 Elemente und ersetze sie durch ein anderes.
const removedElements = greeting2.splice(0, 3, "It's", "a", "beautiful");
console.log(greeting2); // [ "It's", 'a', 'beautiful', 'day!' ]

// splice gibt das Array der entfernten Elemente zurück:
console.log(removedElements); // [ 'Have', 'a', 'nice' ]

// Jetzt können wir push() verwenden, um Elemente zum Array removedElements hinzuzufügen.
removedElements.push("evening!");
console.log(removedElements); // [ 'Have', 'a', 'nice', 'evening!' ]

// Die Splice-Methode kann auch Elemente einfügen, ohne sie zu entfernen. Dazu müssen wir deleteCount auf 0 setzen:

const statement1 = ["We", "are", "learning", "the", "language", "JavaScript"];
statement1.splice(4, 0, "programming");
console.log(statement1); // ['We', 'are', 'learning', 'the', 'programming', 'language', 'JavaScript']

// In Array-Methoden sind negative Indizes erlaubt.
// Sie geben die Position ab dem Ende des Arrays an

const numbersArr = [1, 2, 5];
// ab Index -1 (ein Schritt vom Ende) 0 Elemente löschen, dann 3 und 4 einfügen
numbersArr.splice(-1, 0, 3, 4);

console.log(numbersArr); // 1,2,3,4,5

// ------------##----------------

// slice()
const numbersArr2 = [0, 1, 2, 3, 4, 5, 6];
const slicedElements = numbersArr2.slice(0, 3); // von index 0 bis 2
console.log("sliced elements:", slicedElements); // sliced elements: [ 0, 1, 2 ]
console.log("original array:", numbersArr2); // original array: [0, 1, 2, 3,4, 5, 6]

// ------------##----------------
// concat()
// concat() erstellt ein neues Array, das Werte aus anderen Arrays und zusätzliche Elemente enthält.
// Es akzeptiert eine beliebige Anzahl von Argumenten - entweder Arrays oder Werte.

const numbersArr3 = [1, 2];
const concatNumbers = numbersArr3.concat([3, 4]);
console.log(concatNumbers); // [ 1, 2, 3, 4 ]
console.log(numbersArr3); // [ 1, 2 ]

let concat2Arrays = numbersArr3.concat([3, 4], [5, 6]);
console.log(concat2Arrays); // [ 1, 2, 3, 4, 5, 6 ]

const concatStringsToArrays = numbersArr3.concat([3, 4], "hello", "holla");
console.log(concatStringsToArrays); // [ 1, 2, 3, 4, 'hello', 'holla' ]

// arrays are mutable
concat2Arrays = concat2Arrays.concat([7, 8]);
console.log(concat2Arrays); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

const testArray1 = ["hello"];
const testArray2 = ["world"];

const concatTwoArrays = testArray1.concat(testArray2);
console.log(concatTwoArrays); // [ 'hello', 'world' ]

// ------------##----------------
// reverse()
// Die Methode reverse kehrt die Reihenfolge der Elemente in arr um.
const aNewArray = [1, 2, 3, 4, 5];
aNewArray.reverse();
console.log(aNewArray); // [ 5, 4, 3, 2, 1 ]

// indexOf()
const anotherArray = ["hello", "world"];
console.log(anotherArray.indexOf("hello")); // 0
console.log(anotherArray.indexOf("hello", 1)); // -1: look from hello from index 1

// includes()
console.log(anotherArray.includes("hello")); // true
console.log(anotherArray.includes("hello", 1)); // false

// // join verwandelt ein Array in eine Zeichenkette
const newVariable = anotherArray.join("-");
console.log(newVariable); // hello-world
console.log(typeof newVariable); // string

// ---------###--------
// sort()

const newNumArray2 = [1, 2, 15];
newNumArray2.sort();
console.log(newNumArray2); // [ 1, 15, 2 ]

const newNumArray3 = [1, 2, 15, -4362346, "string", "abc"];
newNumArray3.sort();
console.log(newNumArray3); // [ -4362346, 1, 15, 2, 'abc', 'string' ]
console.log(typeof newNumArray3); // object

// ----------------####----------------

const fruits3 = ["Apple", "Orange", "Banana", "Melon", "Lemon"];
console.log(fruits3); // [ 'Apple', 'Orange', 'Banana', 'Melon', 'Lemon' ]

// toString()
const arrayToString = fruits3.toString();
console.log(arrayToString); // Apple,Orange,Banana,Melon,Lemon

console.log(typeof arrayToString); // string
console.log(arrayToString[3]); // l
