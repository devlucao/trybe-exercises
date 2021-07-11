//Exercicio 1

const tagH1 = document.createElement("h1");
tagH1.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(tagH1);

//Exercicio 2

const elementMain = document.createElement("main");
elementMain.className = "main-content";
document.body.appendChild(elementMain);

//Exercicio 3

const elementSection = document.createElement("section");
elementSection.className = "center-content";
elementMain.appendChild(elementSection);

//Exercicio 4

const paragraphSection1 = document.createElement("p");
paragraphSection1.innerHTML = "Vamo que vamo!"
elementSection.appendChild(paragraphSection1);

// Exercicio 5
const elementSection2 = document.createElement("section");
elementSection2.className = "left-content";
elementMain.appendChild(elementSection2);