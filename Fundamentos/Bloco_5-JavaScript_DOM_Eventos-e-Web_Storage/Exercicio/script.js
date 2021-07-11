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
const elementSectionLeft = document.createElement("section");
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft);

// Exercicio 6
const elementSectionRight = document.createElement("section");
elementSectionRight.className = "right-content";
elementMain.appendChild(elementSectionRight);

//Exercicio 7
const elementImg = document.createElement("img");
elementImg.className = "small-image";
elementImg.src = "https://picsum.photos/200";
elementSectionLeft.appendChild(elementImg);

//Exercicio 8
const elementUl = document.createElement("ul");
elementSectionRight.appendChild(elementUl);
const numbers = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
for(let number in numbers){
    const elementLi = document.createElement("li");
    elementLi.innerHTML = numbers[number];
    elementUl.appendChild(elementLi);
}