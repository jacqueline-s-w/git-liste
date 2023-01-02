const myName = "mariam";
const city = "Berlin";

// \n = new Line
const guestList = "Guests:\n -John\n -Peter\n -Ben";
console.log(guestList);
/**
 * Guests:
 * -John
 * -Peter
 * -Ben
 */
console.log("Meine Gästeliste Lautet:" + " " + guestList);

// ES6 - 2015

const country = `Deutschland`;
const multiLineString = `Guests: 
-John
-Peter
-Ben`;
console.log(multiLineString);

console.log(`Meine Gästeliste Lautet: 
${multiLineString}`);

const user = "Dave";
console.log(`Der Benutzer ist ${user}`);

const price = 20;
const tax = 1.05;
const total = `Der Gesamtpreis inkl. Steuern beträgt ${price * tax}€`;
console.log(total);
