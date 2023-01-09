/**
 * Algemeine Einführung
 *
 * Was ist der normale Programmablauf?
 * Von oben nach unten! Normalerweise!
 * Von links nach Rechts "LTR"
 */

console.log("Hallo");
console.log("Welt");

let number = 5;
console.log(++number);

/**
 * Logisches denken
 * Wie wird ein Programm auch genannt?
 * Algorithmus
 * Spezifischer Ablauf von Anweisungen
 *
 * Wie wird eine Eingabe in eine Ausgabe umgewandelt?
 * EINGABE => ALGORITHMUS => AUSGABE
 */

/**
 * Analysiere Probleme: Was ist die Eingabe? Was ist die Ausgabe?
 * Überlege, bevor du anfängst zu programmieren was du machen musst, wenn du
 * (beispielsweise) eine Lasagne machen willst?
 * Was sind die Schritte?
 *
 * 0. Lebensmitteleinkauf
 * 1. INPUT: Zutaten? Nudeln, Gemüse, Bechamelsoße, Ragout
 * 2. Den ofen einschalten und vorheizen
 * 3. Ragout kochen
 * 4. Bechamelsoße kochen
 * 5. Die Nudeln, und Bechamel und Ragout schichten
 * 6. Die Nudeln in den Ofen schieben
 * 7. 30 Minuten warten
 * 8. Ergebnis Lasagne!
 * 9. ESSEN
 */

/**
 * Die Reihenfolkge ist wichtig, wir müssen dem Computer jeden einzelnen Schritt
 * mitteilen.
 *
 * Er weiß nichts!!! Wir können googlen :D aber der Computer nicht.
 *
 * Wenn man nicht genau weiß, wie man eine Lasagne macht, muss man nach einem
 * Rezept suchen! => den Algorithmus bekommen!
 */

/**
 * Nudeln mit Bolognese Soße:
 * 0. Lebensmitteleinkauf
 * 1. Input: Zutaten: Nudeln, Passierte Tomaten, Hackfleisch, Zwiebeln, Knoblauch,
 *                    Kräuter, ggf Möhren + Poree, Tomatenmark
 * 2. Herdplatte auf höchste Stufe anschalten
 * 3. Topf auf angeschalteter Herdplatte stellen und etwas Rama(flüssig) in den Topf geben.
 * 4. Hackfleich in den Topf packen und anbraten.
 * 5. Knoblauch vorbereiten
 * 6. Passierte Tomaten würzen
 * 7. Angebratenes Hackfleisch in sieb kippen zum ablauf nicht verdampfter flüssigkeiten
 *    des Hackfleisches, topf mit wassere ausspühlen
 * 8. Zwiebeln gold-gelb anbraten in Pfanne anbraten
 * 9. Knoblauch dazu geben und mit anbraten
 * 10. Möhren und Poree dazu geben und mit anbraten
 * 11. Hackfleisch und Inhalt aus der Pfanne wieder in Topf geben, Würzen, vermischen
 * 12. Tomatenmark in Topf geben und vermischen.
 * 13. Topf ca 1 minute auf Herdplatte stellen
 * 14. Topf von Herdplatte nehmen und Passierte Tomaten aus schritt 6 hinzugeben
 *     und vermischen.
 * 15. Soße aufkochen auf höchster Stufe.
 * 16. Herdplatte über ca 10 minuten immer niedriger stellen bis warmhalte stufe erreicht
 * 17. Abschmecken und ggf nachwürzen
 * 18. Soße mindestens 1-2 Stunden auf warmhaltestufe köcheln lassen, mehrfach umrühren.
 * 19. 30 minuten bevor Soße fertig ist Nudelwasser in Topf geben, 2 TL Salz in Nudelwasser
 *     geben, weitere Herdplatte auf höchste Stufe und Topf drauf stellen.
 * 20. Sobald Nudelwasser kocht gewünschte menge nudeln ins wasser geben und bis
 *     gewünschter konsistenz die nudeln kochen lassen.
 * 21. Wenn Nudeln fertig sind, nudeln abgießen und gewünschte mengen nudeln + soße
 *     auf tellern servieren.
 * 22. ???
 * 23. Profit!
 * 24. AUSGABE: Nudeln mit Bolognese Soße
 */

// -------------------------------------------------------------------------------- \\

/**
 * Lösungen finden. Wir werden mit einer Menge Probleme konfrontiert.
 * Wie können wir etwas erreichen? => Algorithmen schreiben
 * EIN REZEP IST WIE EIN ALGORITHMUS
 * SEI SO PRÄZISE WIE MÖGLICH!
 * BEST PRACTICES
 * Don't repeat yourself => DRY Principle
 */

/**
 * Input    => Algorithmus  => Output
 * 2, 5     => Blackbox     => 5
 * 0, 100   => Blackbox     => 100
 * 52, 35   => Blackbox     => 52
 *
 * Inputs:
 * Sei a die erste Eingabe.
 * Sei b die Zweite Eingabe.
 *
 * Algorithmus (Blackbox):
 * Wenn a größer als b ist, drucke a.
 * Wenn b größer als a ist, drucke b.
 *
 * Allgemeine Regel?
 * die größte Zahl finden
 * Wie kännen wir die größte Zahl finden?
 *
 * Lösungspseudocode für die Blackbox:
 * Wenn die ersten Zahl größer ist als die zweite Zahl,
 *              gib mir die ersten Zahl.
 * Andernfalls
 *              gib mir die zweite Zahl.
 */
