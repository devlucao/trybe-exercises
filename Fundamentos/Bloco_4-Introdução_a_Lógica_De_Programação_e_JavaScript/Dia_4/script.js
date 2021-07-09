//Exercícios Objetos

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  medals: {
    golden: 2,
    silver: 3,
  },
};

console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " " +
    "tem " +
    player.age +
    " " +
    "anos de idade."
);

console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " foi eleita a melhor do mundo por " +
    player.bestInTheWorld.length +
    " vezes."
);

console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro" +
    " " +
    "e " +
    player.medals.silver +
    " medalhas de prata."
);

// Exercícios ForIn

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let index in names) {
  console.log("Olá " + names[index]);
}

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let key in car) {
  console.log(key, car[key]);
}

//Exercícios Funções

//Função Ligar e desligar
var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoVolante = 0;
var statusFarol = "desligado";

function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
}

//Função acelerar
function acelerar(incremento) {
  aceleracao = aceleracao + incremento;

  return "Acelerando a " + aceleracao + " m/s².";
}

//Função frear
function frear(decremento) {
  aceleracao = aceleracao - decremento;

  return "Desacelerando para " + aceleracao + " m/s².";
}

//Função girar volante
function girarVolante(anguloRotacao) {
  rotacaoVolante = anguloRotacao;
  return rotacaoVolante + "graus";
}

//Função ligar e desligar faróis
function ligarFarois() {
    if(statusFarol === "desligado") {
        statusFarol = "ligado";
    } else {
        statusFarol = "desligado"
    }
    return statusFarol;
}

