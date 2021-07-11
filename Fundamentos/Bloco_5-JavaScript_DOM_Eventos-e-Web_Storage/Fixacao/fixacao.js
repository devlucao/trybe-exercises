// Exercícios Vídeo 1

const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = "red";

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;

primeiroFilhoDoFilho.innerText = "Texto teste";

const primeiroFilho = pai.firstElementChild;

const primeiroFilho2 = elementoOndeVoceEsta.previousSibling;

const text = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// Exercícios Vídeo 2

const pai = document.getElementById('pai');
const elementoOndeVoceEstaIrmao = document.createElement("section");

elementoOndeVoceEstaIrmao.id = "elementoOndeVoceEstaIrmao";

pai.appendChild(ElementoOndeVoceEstaIrmao);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement.parentElement.nextElementSibling; 
console.log(terceiroFilho);


    const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling; 
    console.log(terceiroFilho);

// Exercícios Vídeo 3
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();