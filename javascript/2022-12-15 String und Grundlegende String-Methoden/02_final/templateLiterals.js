// TEMPLATE LITERALS

const myName = "mariam";

const city = "Berlin";

const guestList = "Guests:\n - John\n - Peter\n - Den";
console.log(guestList);

console.log("My guest list is" + " " + guestList);

const quote = "Heute ist es sonnig!";
console.log(quote); // Heute ist es sonnig!

// ES6 - 2015
const country = `Deutschland`; // back-ticks

const multiLineString = `Gäste:
- John
- Peter 
- Den`;

console.log(multiLineString);

// Expressions

console.log(`Meine Gästeliste lautet: ${multiLineString}`);

// Meine Gästeliste lautet Gäste:
// - John
// - Peter
// - Den

const user = "Dave";
console.log(`Der Benutzer ist ${user}`); // Der Benutzer ist Dave
// console.log(`Der Benutzer ists Ryan`);    // Der Benutzer ist Ryan

const price = 20;
const tax = 1.05;

const total = `Der Gesamtpreis beträgt ${price * tax}`;
console.log(total); // Der Gesamtpreis beträgt 21.
