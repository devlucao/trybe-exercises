//Exercícios Objetos

let player = { 
    name: "Marta",
    lastName: "Silva",
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    medals: {
        golden: 2,
        silver: 3
    }
};

console.log("A jogadora " + player.name + " " + player.lastName + " " + "tem " + player.age + " " + "anos de idade.");

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro" + " " + "e " + player.medals.silver + " medalhas de prata.");

// Exercícios ForIn

let pizzas = {
    sabor:"Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

for(let key in pizzas) {
    console.log(pizzas[key]);
}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for(let index in names) {
      console.log("Olá " + names[index]);
  }