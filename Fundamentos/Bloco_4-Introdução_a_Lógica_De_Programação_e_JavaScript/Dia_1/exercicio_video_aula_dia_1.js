// Exercício Parte II - Dia 1

// const myName = "Lucas";
// const birthCity = "Rio de Janeiro";
// let birthYear = 1991;
// console.log(myName, birthCity, birthYear);
// birthYear = 2030;
// console.log(birthYear);

// Exercício Parte III - Dia 1

// let base = 5;
// let altura = 8;

// let area = base * altura;
// let perimetro = (base *2) + (altura *2);
// console.log(area);

//Exercício Parte IV - Dia 1

// let notaCandidato = 65;

// if (notaCandidato >= 80) {
//     console.log("Parabéns, você foi aprovado!");
// } else if (notaCandidato >= 60) {
//     console.log("Você está na nossa lista de espera.");
// } else {
//     console.log("Você foi reprovado.")
// }

// Exercicio Parte V - Dia 1

let situacaoCandidato = "lista";

switch(situacaoCandidato) {
    case "aprovado":
    console.log("Parabéns, você foi aprovado!");
    break;
    case "lista":
    console.log("Você está na nossa lista de espera.");
    break;
    case "reprovado":
    console.log("Você foi reprovado.");
    break;

    default:
    console.log("Não se aplica");
}