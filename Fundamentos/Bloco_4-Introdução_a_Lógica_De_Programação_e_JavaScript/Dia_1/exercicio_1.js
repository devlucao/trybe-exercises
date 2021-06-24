let a = 10;
let b = 15;

console.log("Soma: " + (a + b));
console.log("Subtração: " + (a - b));
console.log("Multiplicação: " + a * b);
console.log("Divisão: " + a / b);
console.log("Módulo: " + (a % b));

let a = 10;
let b = 15;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

let a = 10;
let b = 15;
let c = 20;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

let a = 0;

if (a > 0) {
  console.log("Positive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let anguloA = 90;
let anguloB = 50;
let anguloC = 40;
let somaDosAngulos = anguloA + anguloB + anguloC;
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos == true) {
  if (somaDosAngulos === 180) {
    console.log("true");
  } else {
    console.log("false");
  }
} else {
  console.log("Erro = Angulo inválido");
}

let pecaDeXadrez = "Bispo";

switch (pecaDeXadrez.toLowerCase()) {
  case "rei":
    console.log(
      "Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo."
    );
    break;
  case "dama":
    console.log(
      "Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres."
    );
    break;
  case "torre":
    console.log(
      "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."
    );
    break;
  case "bispo":
    console.log(
      "Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas."
    );
    break;
  case "cavalo":
    console.log(
      "É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa."
    );
    break;
  case "peão":
    console.log(
      "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua."
    );
    break;
  default:
    console.log("Erro, peça não existe");
}

let nota = 100;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else if (nota >= 50) {
    console.log("E");
} else if (nota < 50 && nota >= 0) {
        console.log("F");
}else{
    console.log('Erro, nota inválida.')
}

