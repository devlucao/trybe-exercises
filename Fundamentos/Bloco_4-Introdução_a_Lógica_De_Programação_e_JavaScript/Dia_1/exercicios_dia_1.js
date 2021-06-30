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

// Exercicio 4

let numero = 0;

if (numero > 0) {
    console.log("O número " + numero + " é positivo.");
} else if (numero < 0) {
    console.log("O número " + numero + " é negativo.");
} else {
    console.log("O número é zero.")
}

// Exercicio 5

let angulo1 = 45;
let angulo2 = 45;
let angulo3 = -100;
let angulosSoma = angulo1 + angulo2 + angulo3;
let angulosReais = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if(angulosReais === true) {
    if (angulosSoma === 180) {
        console.log("true");
    } else {
    console.log(false);
    } 
} else {
    console.log("Angulo inválido.")
}
