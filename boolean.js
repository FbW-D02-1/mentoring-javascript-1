let a = 7;
let b = 5;

let sum = a + b;
let isAGreaterThanB = a > b;

// Boolsche Operatoren:

console.log("a+b:", a + b);
console.log("a>b: ", a > b);
console.log("a<b: ", a < b);
console.log("a==b: ", a == b);
console.log("a>=b: ", a >= b);
console.log("(!a > b):", !(a > b)); // ! NOT Operator -> Gegenteil des Werts dahinter
console.log("a > b && a > 10:", a > b && a > 10); // && AND Operator -> Beide Bedingungen müssen wahr sein
console.log("a > b || a > 10:", a > b || a > 10); // || OR Operator -> Eine der beiden Bedingungen muss wahr sein

console.log(sum);
console.log(isAGreaterThanB);
