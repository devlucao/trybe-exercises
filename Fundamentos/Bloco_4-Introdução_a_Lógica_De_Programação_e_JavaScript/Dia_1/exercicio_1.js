let a = 10;
let b = 15;
let c = 20;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

if (a > b) {
    console.log(a);
}else{
    console.log(b);
}

if(a > b && a > c){
    console.log(a)
}else if(b > a && b > c) {
    console.log(b)
}else{
    console.log(c)
}