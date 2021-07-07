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

// Exercício 6
let pecaXadrez = "REI";

switch(pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break;
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;
    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;
    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;
    default:
        console.log("Peça não existe.")
}

// Exercicio 7

let nota = 35;
if(nota >= 90){
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else {
    console.log("F")
}

//Exercício 8
let num1 = 11;
let num2 = 21;
let num3 = 31;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log("true");
} else {
    console.log("false");
}

// Exercicio 9
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log("true");
} else {
    console.log("false");
}

// Exercicio 10

let custoProduto = 5;
let valorProduto = 10;
let valorValido = custoProduto > 0 && valorProduto > 0;
let valorCustoTotal = custoProduto + (custoProduto * 20 / 100);
let lucro = valorProduto - valorCustoTotal;

if (valorValido === true) {
    console.log("A empresa terá " + (lucro * 1000) + " reais de lucro.");
} else {
    console.log("Valor inválido.");
}

//Exercício 11

let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
    console.log(aliquotaINSS = salarioBruto * 0.08);
} else if (salarioBruto <= 2594.92) {
    console.log(aliquotaINSS = salarioBruto * 0.09);
} else if (salarioBruto <= 5189.82) {
    console.log(aliquotaINSS = salarioBruto * 0.11);
} else {
    console.log(aliquotaINSS = 570.88);
}

let salarioBase = salarioBruto - aliquotaINSS;
console.log(salarioBase)

if (salarioBase <= 1903.98) {
    console.log(aliquotaIR = 0);
} else if (salarioBase <= 2826.65) {
    console.log(aliquotaIR = salarioBase * 0.075 - 142.80);
} else if (salarioBase <= 3751.05) {
    console.log(aliquotaIR = salarioBase * 0.15 - 354.80);
} else if (salarioBase <= 4664.68) {
    console.log(aliquotaIR = salarioBase * 0.225 - 636.13);
} else {
    console.log(aliquotaIR = salarioBase * 0.275 - 864.36);
}

let salarioLiquido = salarioBase - aliquotaIR;
console.log("O salário líquido é de " + salarioLiquido + " reais.")