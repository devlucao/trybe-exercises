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

  //Exercícios 3 e 4

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: "sim"
  };

//   for(key in info) {
//   console.log(key);
//   console.log(key, info[key]);
//   }

//Exercício 5

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "sim"
  };

  for(let key in info) {
      if(key === 'recorrente' && info[key] === "sim" && info2[key] === "sim") {
          console.log("Ambos recorrentes");
      } else {
          console.log(info[key] + " e " + info2[key]);
      }
    }