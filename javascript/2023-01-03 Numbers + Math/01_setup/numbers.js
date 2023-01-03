// Numbers
/**
 * In JavaScript kürzt man eine Zahl ab, in dem man den Buchstaben "e" an die Zahl
 * anhängt und die Anzahl der Nullen angibt:
 * Mit anderen Worten: "e" multipliziert die Zal mit 1 under der angegebenen
 * Anzahl von Nullen.
 *
 * e - exponent / 1e6 = 1 * 10^6
 *
 */

const billion = 1e9; // entspricht 1 milliarde/billion, wörtlich: 1 und 9 Nullen
console.log(billion);

console.log(1.23e6); // 1.23 * 100000 = 1230000 // 'e6' = 1 000 000

/**
 * Wenn wir die Nullen von 0.000001 zählen, gibt es 6 davon.
 * Deswegen 1e-6
 */

const microSecond = 1e-6; // 0.000001 // sechs Nullen nach links von 1
console.log(microSecond);

// -------------------- \\

// toFixed()
const sum = 0.1 + 0.2;
console.log(sum); // 0.3

const fixSum = sum.toFixed(1); // die Zahl in der klammer steht für nachkommastellen
console.log(fixSum);

// toFixed gibt immer einen String zurück
console.log(typeof fixSum); // string

// -------------------- \\

/**
 * NaN stellt einen Fehler dar.
 * NaN gehört zu dem Typ Number, es ist aber keine "normale" Zahl, weshalb es
 * spezielle Funktionen gibt, um sie zu überprüfen:
 *
 * 1. isNaN(value) wandelt sein Argument in eine Zahl um und prüft dann ob sie
 * NaN ist
 */

console.log(isNaN(NaN)); // true
console.log(isNaN(1)); // false
console.log(isNaN("1")); // false
console.log(isNaN("str")); // true

/**
 * Der Wert NaN ist insofern einzigartig, als er keinen Wert entspricht,
 * auch nicht sich selbst:
 */
console.log(NaN === NaN); // false

/**
 * aber ...
 */
console.log(typeof NaN); // number

/**
 * 2. isFinite(value) wandelt sein Argument in eine Zahl um und gibt true zurück,
 * webb es eube reguläre Zahl oder nicht NaN/Infinity/-Infinity ist:
 */

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false, weil ein besonderer Wert: NaN

console.log(isFinite(Infinity)); // false, weil ein besonderer Wert: Infinity (Unendlich ist nicht Endlich)

// -------------------- \\

// parseInt() und parseFloat()
/**
 * extrahiert nummern aus strings.
 * funktioniert nur wenn zahlen zuerst stehen ansonsten ist der
 * output = NaN
 */
console.log(typeof "100px"); // string or NaN

/**
 * Im Wirklichen Leben haben wir of Werte in Einheiten, wie z. B. "100ox"
 * oder "12pt" in CSS.
 * Oft ist es auch bei Währungen sehr praktisch, weil oft in verschiedenen Ländern
 * die Zahl direkt mit dem Währungssymbol angegeben wird z. B. "19€".
 * Wir können so dann einen numerischen Wert aus dem String extrahieren.
 *
 * parseInt() und parseFloat() "lesen" eine Zahl aus einem String (Zeichenkette),
 * bis sie es nicht mehr können.
 *
 * Die Funktion parseInt gibt eine Ganzzahl zurück, während parseFloat eine
 * Fließkommazahl zurückgibt:
 */
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5em")); // 12.5
/**
 * Es gibt Situationen, in denen parseInt/parseFloat NaN zurückgibt.
 * Dies geschieht, wenn keine Ziffer gelesen werden konnte:
 */
console.log(parseInt("a123")); // NaN, das erste Zeichen hält den Prozess an.
