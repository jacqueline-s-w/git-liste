// STRINGS
const myString = "Es ist ein wunderschöner Tag!";
console.log(myString); // Es ist ein wunderschöner Tag!

// erste angesprochene stelle ist 0
// in diesem fall, wird "E" in der console ausgegeben
console.log(myString[0]); // E
// in diesem fall, wird "S" in der console ausgegeben
console.log(myString[1]); // S
// in diesem fall, wird ein "Leerzeichen" in der console ausgegeben
console.log(myString[2]); // Leerzeichen (space)

// length / länge
// Punktnotation (dot notation)
console.log(myString.length); // 29

const str1 = "25";
console.log(str1[1]); // 5

// NUMBERS:
// 1. Integer / Ganze Zahlen
// 2. Float / Kommazahlen
// 3. + Infinity / + Unendlich
// 4. - Infinity / - Unendlich
// 5. NaN / Not a Number

const myNum = 50; // Integer
const numTwo = 2.22; // Float
console.log(50 * Infinity); // Infinity
console.log(50 / Infinity); // 0

console.log(myString - 2); // NaN
console.log(str1 - 2); // 23

// BOOLEANS:
// prüft ob ein string/variable wahr oder falsch ist
// wahr = inhalt ist vorhanden (zb inhalt=1)
// falsch = inhalt ist nicht vorhanden (zb inhalt="")
// 1 = ist vorhanden / wahr; 0 = nicht vorhanden / false

const booleanOne = true;
const booleanTwo = false;
let undefinedVariable;

console.log(Boolean(booleanOne)); // true
console.log(Boolean(booleanTwo)); // false
// mit inhalt = true; ohne inhalt = false; gilt auch für variablen
console.log(Boolean(myNum)); // true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("a")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false
console.log(Boolean(undefinedVariable)); // false

console.log(Boolean(false)); // false
console.log(Boolean("false")); // true

console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// UNDEFINED;

const myPicture = "My Picture";
let profilePic;

console.log(profilePic); // undefined oder Wert wurde nicht zugewiesen

profilePic = myPicture;
console.log(profilePic); // value von myPicture

// NULL: nothing, empty, unknown value

const age = null;
// wenn null definiert wird, wird null ausgegeben.
// wenn nichts definiert wird (siehe zeile 65) wird undefined ausgegeben.
const emptyString = null;

console.log(age); // null
console.log(emptyString); // null

// ARRAY:

const myArray = [1, 2, 3, "hello", "bye"];
console.log(myArray); // alles aus myArray
console.log(myArray[0]); // 1
console.log(myArray[1]); // 2
console.log(myArray[2]); // 3
console.log(myArray[3]); // hello
console.log(myArray[4]); // bye

// OBJECTS: key:value Paar

const person = {
    name: "Dave",
    age: 32,
    citizen: true,
    pets: ["dog1", "dog2"], // array im object
    adress: {
        // weiteres object im object
        street: "abc-straße",
        houseNo: 44,
        city: "Berlin",
    },
};
console.log(person);

// typeof operator

console.log(typeof booleanOne); // boolean
console.log(typeof true); // boolean
console.log(typeof "true"); // string
console.log(typeof "1"); // string
console.log(typeof 1); // number
console.log(typeof 1.1); // number
console.log(typeof undefined); // undefined
console.log(typeof undefinedVariable); // undefined
console.log(typeof person); // object
console.log(typeof myArray); // object
