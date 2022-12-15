// Boolean Expressions: Comparison Operators
// <, <=, >, >=, ==, ===, !=, !==

console.log(1 < 2); // true
console.log(2 < 2); // false
console.log(2 <= 2); // true // checkt in dem fall ob es kleiner ODER gleich ist

console.log(1 > 2); // false
console.log(3 >= 3); // true // checkt in dem fall ob es größer ODER gleich ist

console.log("1" > 2); // false // JS compiler entfernd die Anführungszeichen und "1" wird als number behandelt.

console.log(1 == "1"); // true // schwacher verleich / loose comparison (==)

console.log(1 === "1"); // false // strenge vergleich / strict compariso (=== vergleicht nicht nur die numbers sondern auch den typ)

console.log(1 != "1"); // false // prüft ob es das selbe ist // schwacher verleich / loose comparison
console.log(1 !== "1"); // true // prüft ob es NICHT das selbe ist // strenge vergleich / strict compariso

console.log("Z" > "A"); // true // berechnet die unicode zahlen. höhere unicode zahl = mehr wert
console.log("A" > "Z"); // false
console.log("Blue" > "Blur"); // false // alle unicode zahlen werden zusammengerechnet
console.log("a" > "A"); // true // kleinbuchstaben haben eine höhere unicode zahl da sie später in der reihenfolge kommen
