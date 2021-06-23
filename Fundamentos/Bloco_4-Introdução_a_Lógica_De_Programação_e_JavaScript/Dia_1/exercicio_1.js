let a = 10;
let b = 15;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

let a = 10;
let b = 15;

if (a > b) {
    console.log(a);
}else{
    console.log(b);
}

let a = 10;
let b = 15;
let c = 20;

if(a > b && a > c){
    console.log(a)
}else if(b > a && b > c) {
    console.log(b)
}else{
    console.log(c)
}

let a = 0;

if(a > 0) {
    console.log('Positive')
}else if(a < 0){
    console.log('Negative')
}else{
    console.log('Zero')
}

let anguloA = 90;
let anguloB = 50;
let anguloC = -45;
let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosPositivos == true){
    if(somaDosAngulos === 180){
        console.log('true');
    }else{
        console.log('false')
    }
}else{
    console.log('Erro = Angulo inválido')
}


