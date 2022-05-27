// Primitive Datentypen

let firstName = "Ralf"; // type: string
let age = 54; // type: number
let hasChildren = true; // type: boolean

let lastName; // type: undefined
let city = null; // type: object, value null
let street = ""; // type: string (aber leer)

console.log(lastName);
console.log(typeof lastName);

console.log(street);
console.log(street.length);
console.log(typeof street);

console.log(city);
console.log(typeof city);

console.log(typeof firstName);
console.log(firstName);
console.log(typeof age);
console.log(age.length);
console.log(typeof hasChildren);

// Variablen können ihren Typ im Lauf des Programms ändern!!
age = "Siewert";
console.log(age);
console.log(typeof age);
