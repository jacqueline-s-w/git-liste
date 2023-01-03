// NUMBERS
// Weitere Möglichkeiten, eine Zahl zu schreiben:
// In JavaScript kürzt man eine Zahl, indem man den Buchstaben "e" an die Zahl anhängt und die Anzahl der Nullen angibt:
// Mit anderen Worten: "e" multipliziert die Zahl mit 1 und der angegebenen Anzahl von Nullen.

const billion = 1e9; // 1 billion, wörtlich: 1 und 9 Nullen
console.log(billion); // 1000000000

console.log(1.23e6); // 1.23 * 1000000 = 1230000

// Jetzt schreiben wir etwas sehr Kleines. Sagen wir, 1 Mikrosekunde (ein Millionstel einer Sekunde): 0.000001

const microSecond = 1e-6; // 0.000001: sechs Nullen nach links von 1
// Wenn wir die Nullen in 0,000001 zählen, gibt es 6 davon. Also ist es natürlich 1e-6.

//----------------####---------------
// toFixed()
const sum = 0.1 + 0.2;
console.log(sum); // 0.30000000000000004

const fixSum = sum.toFixed(2);
console.log(fixSum); // 0.30

// toFixed always returns a string
console.log(typeof fixSum); // string

//----------------####---------------
// Infinity (und -Infinity) ist ein spezieller numerischer Wert, der größer (kleiner) als alles andere ist.
// NaN stellt einen Fehler dar.
// Sie gehören zum Typ Nummer, sind aber keine "normalen" Zahlen, weshalb es spezielle Funktionen gibt, um sie zu überprüfen:
// 1. isNaN(value) wandelt sein Argument in eine Zahl um und prüft dann, ob sie NaN ist:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

// Der Wert NaN ist insofern einzigartig, als er keinem Wert entspricht, auch nicht sich selbst:
console.log(NaN === NaN); // false
// aber...
console.log(typeof NaN); // number

// 2. isFinite(value) wandelt sein Argument in eine Zahl um und gibt true zurück, wenn es eine reguläre Zahl oder nicht NaN/Infinity/-Infinity ist:

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, weil ein besonderer Wert: NaN
console.log(isFinite(Infinity)); // false, weil ein besonderer Wert: Infinity

//----------------####---------------
// parseInt und parseFloat

console.log(typeof "100px"); // string or NaN

// Aber im wirklichen Leben haben wir oft Werte in Einheiten, wie "100px" oder "12pt" in CSS. Auch in vielen Ländern das Währungssymbol geht nach dem Betrag, so haben wir "19€" und würde gerne einen numerischen Wert aus, dass zu extrahieren.
// parseInt() und parseFloat() "lesen" eine Zahl aus einer Zeichenkette, bis sie es nicht mehr können.
// Die Funktion parseInt gibt eine Ganzzahl zurück, während parseFloat eine Fließkommazahl zurückgibt:

console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5

// Es gibt Situationen, in denen parseInt/parseFloat NaN zurückgibt. Dies geschieht, wenn keine Ziffern gelesen werden konnten:
console.log(parseInt("a123")); // NaN, das erste Zeichen hält den Prozess an
