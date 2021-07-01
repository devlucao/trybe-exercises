//Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for(i=0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
console.log(sum);

//Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for(i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
let media = sum / numbers.length;
console.log(media);

// Exercício 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
sum = 0;
for(i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}
let media = sum / numbers.length;
if (media > 20) {
    console.log('Valor maior que 20.');
} else {
    console.log("Valor menor ou igual a 20.");
}

// Exercício 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = numbers[0];
console.log(maiorValor);
for(i = 1; i < numbers.length; i += 1){
    if(numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}
console.log(maiorValor);

// Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for(i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 !== 0){
        impar += 1;
    }
} 

if (impar === 0) {
    console.log('Nenhum número ímpar encontrado')
} else {
    console.log(impar);
}

//Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 999;
for(i = 1; i < numbers.length; i += 1){
    if(numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}
console.log(menorValor);

