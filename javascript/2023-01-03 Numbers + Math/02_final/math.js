// Math ist ein eingebautes Objekt, das über Eigenschaften und Methoden für mathematische Konstanten und Funktionen verfügt. Es handelt sich nicht um ein Funktionsobjekt.
// Math arbeitet mit dem Typ Number. Es funktioniert nicht mit BigInt.

// Math.ceil()
// Die Funktion Math.ceil() rundet eine Zahl immer auf die nächstgrößere ganze Zahl auf.
// Math.ceil(null) gibt die ganze Zahl 0 zurück und führt nicht zu einem NaN-Fehler.

console.log(Math.ceil(0.95)); // 1
console.log(Math.ceil(4)); // 4
console.log(Math.ceil(7.004)); // 8
console.log(Math.ceil(-0.95)); // -0
console.log(Math.ceil(-4)); // -4
console.log(Math.ceil(-7.004)); // -7

// ------------------ //

// Math.floor()
// Die Funktion Math.floor() gibt die größte ganze Zahl zurück, die kleiner oder gleich einer bestimmten Zahl ist.

console.log(Math.floor(45.95)); //  45
console.log(Math.floor(45.05)); //  45
console.log(Math.floor(4)); //   4
console.log(Math.floor(-45.05)); // -46
console.log(Math.floor(-45.95)); // -46

// ------------------ //

// Math.random()

// Die Funktion Math.random() gibt eine Pseudo-Zufallszahl im Bereich von 0 bis kleiner als 1 (einschließlich 0, aber nicht 1) mit annähernd gleichmäßiger Verteilung über diesen Bereich zurück, die Sie dann auf den gewünschten Bereich skalieren können.
// Sie kann nicht vom Benutzer ausgewählt oder zurückgesetzt werden.

console.log(Math.random());

// ------------------ //

// Math.max()

// Die Funktion Math.max() gibt die größte der null oder mehr Zahlen zurück, die als Eingabeparameter angegeben wurden.

console.log(Math.max(10, 20)); //  20
console.log(Math.max(-10, -20)); // -10
console.log(Math.max(-10, 20)); //  20

// ------------------ //

// Math.min()

// Die statische Funktion Math.min() gibt die niedrigste Zahl zurück, die ihr übergeben wurde, oder NaN, wenn ein Parameter keine Zahl ist und nicht in eine umgewandelt werden kann.

console.log(Math.min(2, 3, 1)); // 1

console.log(Math.min(-2, -3, -1)); // -3
