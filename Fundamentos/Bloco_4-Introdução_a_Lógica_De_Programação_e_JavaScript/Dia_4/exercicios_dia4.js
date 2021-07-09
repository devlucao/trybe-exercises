//   //Exercício 1

//   let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log("Seja bem vinda " + info.personagem);

//  //Exercício 2

//  let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "sim"
//   };

//   console.table(info);

//   //Exercícios 3 e 4

//   let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: "sim"
//   };

// //   for(key in info) {
// //   console.log(key);
// //   console.log(key, info[key]);
// //   }

// //Exercício 5

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: "sim"
//   };

//   for(let key in info) {
//       if(key === 'recorrente' && info[key] === "sim" && info2[key] === "sim") {
//           console.log("Ambos recorrentes");
//       } else {
//           console.log(info[key] + " e " + info2[key]);
//       }
//     }

//--------Parte 2 - Funções
//Exercício 1
// function verificaPalindromo(string) {
//   let palindromo = string.split("").reverse().join("");
//   if (palindromo === string){
//       return true;
//   } else {
//       return false;
//   }
// }

// console.log(verificaPalindromo("arara"));

// Exercício 2

function maiorValor(array) {
    let maxIndex = 0;
    for(let index in array) {
     if (maxIndex < array[index]) {
         maxIndex = index;
     }
    }
    return maxIndex;
}

console.log(maiorValor([2, 3, 6, 7, 10, 1]));

// Exercício 3

// function menorValor(array) {
//     let minIndex = 0;
//     for(let index in array) {
//      if (array[minIndex] > array[index]) {
//          minIndex = index;
//      }
//     }
//     return minIndex;
// }

// console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));

//Exercício 4
function maiorNome(letras) {
    let maiorNome = [0];
    for(let index in letras){
        if(maiorNome.length < letras[index].length) {
            maiorNome = letras[index];
        }
    }
    return maiorNome;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

