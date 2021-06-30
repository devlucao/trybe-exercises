//Exercicio 1

let a = 10;
let b = 4;

console.log("adição " + (a + b));
console.log("subtração " + (a - b));
console.log("multiplicação " + (a * b));
console.log("divisão " + (a / b));
console.log("módulo " + (a % b));

// Exercicio 2

let a = 10;
let b = 40;

if (a > b) {
    console.log("O maior número é o " + a);
} else {
    console.log("O maior número é o " + b);
}

// Exercicio 3

let a = 2;
let b = 3;
let c = 4;

if (a > b && a > c) {
    console.log("O maior número é o " + a);
} else if (b > a && b > c) {
    console.log("O maior número é o " + b);
}else{
    console.log("O maior número é o " + c);
}
