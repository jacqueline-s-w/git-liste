// General introduction
// PROGRAM SUBMODULE
// Was ist der normale Programmablauf?

// Von oben nach unten! Normalerweise!
// Von links nach rechts "LTR"
let number = 5;
console.log(++number);

// Logisches Denken
// Wie wird ein Programm auch genannt?
// Algorithmus
// Spezifischer Ablauf von Anweisungen
// Wie die Eingabe in eine Ausgabe umgewandelt wird
// EINGABE => ALGORITHMUS => AUSGABE

// Analysiere Probleme: Was ist die Eingabe? Was ist die Ausgabe?
// Überlege, bevor Du anfängst zu programmieren
// Was Du machen musst, wenn Du eine Lasagne machen willst?
// Was sind die Schritte?

// 0. Lebensmitteleinkauf
// 1. INPUT: Zutaten? Nudeln, Gemüse, Bechamelsoße, Ragout
// 2. Den Ofen einschalten und vorheizen
// 3. Ragout kochen
// 4. Bechamelsoße kochen
// 5. Die Nudeln, Béchamel und Ragout schichten
// 6. Die Nudeln in den Ofen schieben
// 7. 30 Minuten warten
// 8. ERGEBNIS: LASAGNA
// 9. Essen!

// Die Reihenfolge ist wichtig, wir müssen dem Computer jeden einzelnen Schritt mitteilen.
// Er weiß nichts !!! Wir können googeln :D aber der Computer nicht.
// Wenn man nicht genau weiß, wie man eine Lasagne macht, muss man nach einem Rezept suchen! => den Algorithmus bekommen!

// OPTIONAL: (Lasst uns DUMPLINGS machen :D
// EINGABE: Mehl, Hefe, Gemüse, Frühlingszwiebeln, Karotten, Hackfleisch, Gewürze (Salz, Pfeffer, Zucker, Sojasoße...)
// 1. den Teig herstellen (500g + 340g Wasser + 3g Hefe + 5g Salz + 15g Zucker)
// 2. eine halbe Stunde ruhen lassen...
// 3. in der Zwischenzeit das Gemüse schneiden
// 4. die Gewürze mit dem Gemüse mischen und alles zusammengeben
// 5. kleine Teigkugel nehmen, flach machen, Zutaten hineinlegen, einpacken!
// 6. wieder eine halbe Stunde ruhen lassen...
// 7. Kochen: Alle DUMPLINGS in eine flache Pfanne mit 0,5cm Wasser geben, Deckel schließen => Dampfgaren
// 8. Heiß machen!!! 7-6
// 9. 15-20 Minuten kochen
// 10. bis das Wasser weg ist => Gabeltest => Fertig?
// AUSGABE: DUMPLINGS)

// ------------###-------------
// Lösungen finden: Wir werden mit einer Menge Probleme konfrontiert.
// Wie können wir etwas erreichen? => Algorithmen schreiben
// EIN REZEPT IST WIE EIN ALGORITHMUS
// SEI SO PRÄZISE WIE MÖGLICH!
//-------------###-------------
// BEST PRACTICES
// Don't repeat yourself => DRY Principle

// Input  => Algorithm => Output
// 2, 5	  => Blackbox  =>  5
// 0, 100 => Blackbox  => 100
// 52, 35 => Blackbox  => 52

// Sei a die erste Eingabe.
// Sei b die zweite Eingabe.
// Wenn a größer als b ist, drucke a.
// Wenn b größer ist als a, drucke b.

// Allgemeine Regel ?
// Die größte Zahl finden
// Wie können wir die größte Zahl herausfinden?

// Lösungspseudocode für Blackbox Number 1:
// Wenn die erste Zahl größer ist als die zweite Zahl,
//      gib mir die erste Zahl.
// Andernfalls
//      gib mir die zweite Zahl.
