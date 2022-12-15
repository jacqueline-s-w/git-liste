// Boolean Expressions: Comparison Operators
// <, <=, >, >=, ==, ===, !=, !==

console.log(1 < 2);  // true
console.log(2 <= 2); // true

console.log(1 > 2);     // false
console.log(3 >= 3);    // true

console.log("1" > 2);   // false. JS compiler removed the quotes and treated "1" as a number.

console.log(1 == "1");    // true. schwacher Vergleich(==) / Loose comparison(==)
console.log(1 === "1");   // false. strenger Vergleich(===) / Strict Comparison(===)

console.log(1 != "1");    // false. schwacher Vergleich(!=) / Loose comparison(!=)
console.log(1 !== "1");   // true. strenger Vergleich(!==) / Strict Comparison(!==)

// String Comparison
// unicode: interne Kodierungstabelle, die JavaScript verwendet
console.log("Z" > "A"); // true
console.log("A" > "Z"); // false
console.log("Blue" > "Blur");   // false
console.log("a" > "A"); // true


// characters: abcj@%^
// unicode
// binary: 10101