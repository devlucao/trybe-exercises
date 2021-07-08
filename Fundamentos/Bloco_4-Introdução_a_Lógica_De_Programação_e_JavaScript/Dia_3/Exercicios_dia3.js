// //Exercício 1
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for(let i = 0; i < n; i += 1) {
//     inputLine = inputLine + symbol;
// } 

// for(let i = 0; i < n; i += 1){
//     console.log(inputLine);
// }

// //Exercício 2
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for(let i = 0; i <= n; i += 1) {
//     console.log(inputLine);
//     inputLine = inputLine + symbol;
// }

//Exercício 3

let n = 5;
let space = " ";
let ast = "";
for(let i = 0; i < n; i += 1){
    ast = ast + "*";
    console.log(space.repeat(n - i) + ast);
 }

// Exercício 4
