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

//Exercício 8
let array =[];

for (i = 0; i <= 25; i +=1) {
    array.push(i);
}
console.log(array);

//Exercicio 9
let array =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for (i = 0; i < array.length; i +=1) {
    console.log(array[i] / 2);
}

// Exercício Bônus
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for(let i = 0; i < array.length; i +=1) {
    if(i + 1 < array.length) {
        newArray.push(array[i] * array[i + 1]);
        } else {
            newArray.push(array.[i] * 2);
        }
}