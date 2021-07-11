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
