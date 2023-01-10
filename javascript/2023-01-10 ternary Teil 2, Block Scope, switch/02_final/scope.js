"use strict";
// SCOPE (Geltungsbereich) ?
// Ort, an dem unsere Variablen " live " sind, wo wir auf sie zugreifen können, verfügbar sind

// BLOCK SCOPE = zwischen {} haben wir ein neues Blockscope für unsere definierten Variablen darin!
// wir erben immer alle umgebenden Variablen
// sollten nach Möglichkeit bevorzugt werden

// GLOBAL SCOPE = wird IMMER überall verfügbar sein
// Versuche also, sie zu vermeiden, aber wenn Du sie brauchst, benutze sie!

// Was ist das noch mal?
const globalScope = "hello global scope"; // global var
// hier ist der globale scope (Geltungsbereich)

if (true) {
    // true case
    const blockScopeTrue = "hello block scope true"; // nur lokal in diesem Block!
    // nur innerhalb der if vorhanden
    console.log(blockScopeTrue);
    console.log(globalScope);
    // immer und überall zugänglich

    if (true) {
        console.log(blockScopeTrue);
        console.log(globalScope);
    }
} else {
    // false case
}
console.log(globalScope);
//console.log(blockScopeTrue);// ReferenceError: blockScopeTrue ist nicht definiert

// Ein Wort zur Einrückung und Lesbarkeit
// Mein Tipp => immer 4 Leerzeichen einrücken => 1 TAB
// hilft bei der Fehlersuche und so weiter...

// Unterschied zwischen var und const
// Die var-Anweisung deklariert eine Variable mit Funktions- oder Global-Scoping und initialisiert sie optional mit einem Wert.
{
    var hello = "world";
    // wenn möglich mit allen Mitteln zu vermeiden
    // ES GIBT KEINE PRÜFUNG AUF VORHANDENE VARS!
    var hello = "bla";
}
console.log(hello); // Der Geltungsbereich ist IMMER global // Sickereffekt

const globally = "i need this everywhere"; // globally available; checks for existence
{
    //Die const-Anweisung deklariert eine lokale Variable mit Block-Scoping und initialisiert sie optional mit einem Wert.
    const hello2 = "world";
    //const hello2 = "bla"; // SyntaxFehler: Der Bezeichner 'hello2' wurde bereits deklariert
}
//console.log(hello2); // außerhalb nicht verfügbar

const GLOBALLY = "need this to be everywhere";
{
    // Konstanten sind ähnlich wie Variablen, die mit dem Schlüsselwort const definiert werden, block-scoped. Der Wert einer Konstante kann nicht durch Neuzuweisung geändert werden, und sie kann nicht neu deklariert werden.
    const MY_NAME = "Martina";
    //MY_NAME = "Freundorfer"; TypeError: Assignment to constant variable.
    console.log(GLOBALLY);
}
console.log(GLOBALLY);
// console.log(MY_NAME); // außerhalb nicht verfügbar

// Wann sollte ich den if-Operator und wann den ternären Operator verwenden?
const date = "Wednesday";
if (date === "Wednesday") {
    console.log("its the mid week");
} else {
    console.log("it's not the mid week");
}
console.log(
    date === "Wednesday" || date === "Sunday"
        ? "its the mid week"
        : "its not the midweek"
);
// nur einer ...

// Math problems
const number = 42;
// Ist es möglich, durch 2 zu dividieren?
// => dann bitte durch 2 dividieren, nochmals durch 2 dividieren, beides auf die Konsole posten.

if (42 % 2 !== 0) {
    console.log("not possible to divide by two");
} else {
    console.log(42 / 2); // statement number one
    console.log(42 / 2 / 2); // statement number two
}
// 42 % 2 === 0 ? console.log(42/2); console.log(42/2/2); : nicht möglich, in eine ternäre Form umzuwandeln
// wenn wir mehr als eine Anweisung haben
// zähle die Semikolons
// in jedem der wahren oder falschen Fälle!
