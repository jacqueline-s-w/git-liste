// ---------###--------
// 4.

// Prüfe, ob der Name des Unternehmens Netscape lautet.
// Wenn true, gebe aus 'Netscape created JavaScript'
// Wenn false, gebe aus 'No contributions known'.
// Speichern Sie die Ausgabe in einer Variablen namens 'contribution'

const company = "Netscape";

const language = "JavaScript";

const contribution =
  company == "Netscape"
    ? `${company} created ${language}.`
    : `No contributions known!`;

console.log(contribution); // Netscape created JavaScript.

// ---------###--------
// 5.
const agE = 20;

const message =
  agE < 13
    ? `Hallo kleiner!` // if
    : agE < 18
    ? `Hello!` // else if
    : agE > 18 && agE < 100
    ? `Grüße` // else if
    : `Was für ein ungewöhnliches Alter!`; // else

console.log(message); // Greetings!

// ---------###--------

// 6.
const varOne = 10;
const varTwo = 10;

// Prüfen, ob varOne größer/gleich varTwo ist UND 120 durch 2 teilbar ist
// ODER varOne multipliziert mit 260 ist 2600,
// dann "Heya!" ausgeben.
// und prüfe, ob 12 größer als 2 ist, wenn ja, gebe aus- 'The condition is true.', sonst gebe aus- 'The condition is false.'
// Erstellen Sie eine lokale Variable namens varThree mit dem Wert 1.
// Prüfe, ob varThree existiert. Wenn ja, gebe aus - "varThree exists!".

if ((varOne >= varTwo && 120 % 2 === 0) || varOne * 260 === 2600) {
  // local scope

  console.log("Heya!"); // Heya!

  //  condition               if truthy                                  if falsy
  12 > 2
    ? console.log(`The condition is true.`)
    : console.log(`The condition is false.`);
  // die condition ist true.

  const varThree = 1;

  if (varThree) {
    console.log("varThree exists!"); // varThree exists!
  }
} // no else block required!

// ---------###--------
