// Implicit & Explicit Coersion (Konvertierung)

// Implicit Coersion
console.log("1" > 2); // false. Der JS-Compiler (JS-Übersetzer) entfernt die Anführungszeichen und behandelt "1" als Zahl.

// Explicit Coersion

// to String
const myNum = 20;
const coersedNum = String(myNum); // coersion von number zu string
console.log(coersedNum === myNum); // false
console.log(typeof coersedNum); // string
console.log(coersedNum);

// to Number
const myString = "20";
console.log(typeof myString); // string
const coersedString = Number(myString);
console.log(typeof coersedString); // number

// to Boolean
const myNum2 = 30;
const coersedNum2 = Boolean(myNum2);
console.log(coersedNum2); // true
