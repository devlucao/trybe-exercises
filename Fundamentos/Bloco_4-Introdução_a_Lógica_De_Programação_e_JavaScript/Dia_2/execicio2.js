//EXERCICIO 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//EXERCICIO 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}
console.log(soma);

//EXERCICIO 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / numbers.length;

console.log(media);

//EXERCICIO 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
}

let media = soma / numbers.length;

if (media >= 20) {
    console.log('valor maior que 20');
}else{
    console.log('valor menor que 20')
}

//EXERCICIO 5
