/**
 * Math ist ein eingebautes Objekt, das über Eigenschaften und Methoden
 * für mathematische Konstanten und Funktionen verfügt.
 * Es handelt sich nicht um ein Funktionsobjekt.
 *
 * Math arbeitet mit dem Typ Number. (Es funktioniert nicht mit BigInt.)
 */

// -------------------- \\

// Math.ceil()
/**
 * Die Funktion Math.ceil() rundet eine Zahl immer auf die nächstgrößere
 * ganze Zahl auf.
 *
 * Math.ceil(null) gibt die ganze Zahl 0 zurück und führt nicht zu einen
 * NaN fehler
 */
console.log(Math.ceil(0.95)); // 1 // aufrunden
console.log(Math.ceil(4)); // 4 // aufrunden
console.log(Math.ceil(7.004)); // 8 // aufrunden
console.log(Math.ceil(-0.95)); // -0 // wird als -0 angezeigt weil sie aus dem minusbereich gerundet wurde // aufrunden
console.log(Math.ceil(-7.004)); // -7 // aufrunden
console.log(Math.ceil(null)); // 0

// -------------------- \\

// Math.floor()
/**
 * Die Funktion Math.floor() gibt die größte ganze Zahl zurück, die kleiner
 * oder gleich einer bestimmten Zahl ist.
 */
console.log(Math.floor(45.95)); // 45 // abrunden
console.log(Math.floor(45.05)); // 45 // abrunden
console.log(Math.floor(4)); // 4 // abrunden
console.log(Math.floor(-45.95)); // -46 // abrunden
console.log(Math.floor(-45.05)); // -46 // abrunden

// -------------------- \\

// Math.round()
/**
 * Entscheidet selber ob auf- oder abgerundet wird
 */
console.log(Math.round(4.49)); // 4 // abrunden
console.log(Math.round(4.5)); // 5 // aufrunden

// -------------------- \\

// Math.random()
/**
 * Die Funktion Math.random() gibt eine Pseudo-Zufallszahl im Bereich von
 * 0 bis 1 zurück ( einschließlich 0, aber nicht 1) mit annähernd gleichmäßiger
 * Verteilung über diesen Bereich.
 * Sie kann nicht vom Benutzer ausgewähöt oder zurückgesetzt werden.
 */

// console.log("---");
// console.log(Math.floor(Math.random() * 10));

console.log(Math.random());

// -------------------- \\

// Math.max()
/**
 * Die Funktion Math.max() gibt die größte aller übergebenen Zahlen zurück,
 * welche als Eingabeparameter angegeben wurden.
 */
console.log(Math.max(10, 20, 5, 100)); // 100
console.log(Math.min(-10, -20, -5, -100)); // -5
console.log(Math.min(-10, 20, -5, -100)); // 20

// -------------------- \\

// Math.min()
/**
 * Die statische Funktion Math.min() gibt die niedrigste Zahl zurück, die
 * ihr übergeben wurde, oder NaN, wenn ein Paramenter keine Zahl ist und nicht
 * umgewandelt werden konnte
 *
 */
console.log(Math.min(-10, -20, -5, -100)); // -100
console.log(Math.min("10", 20, 5, 100)); // 5
console.log(Math.min(-10, -20, 5, 100)); // -20
