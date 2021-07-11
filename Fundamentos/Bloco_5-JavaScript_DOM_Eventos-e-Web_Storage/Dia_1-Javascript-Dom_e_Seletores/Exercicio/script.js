 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício);

 Crie uma função que mude a cor do quadrado amarelo paraEscripitoção que corrija o texto da tag <h1>.

 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function alterarParagrafo() {
    let paragrafo = document.getElementsByTagName("p")[1];
    paragrafo.innerHTML = "Ser analista pleno";
}
alterarParagrafo();

function alterarCorQuadradoLateral () {
    let quadradoLateral = document.getElementsByClassName("main-content")[0];
    quadradoLateral.style.backgroundColor = "rgb(76,164,109)";
}

alterarCorQuadradoLateral();

function alterarCorQuadradoCentral () {
    let quadradoCentral = document.getElementsByClassName("center-content")[0];
    quadradoCentral.style.backgroundColor = "white";
}

alterarCorQuadradoCentral();

function alterarCabecalho() {
    let cabecalho = document.getElementsByTagName("h1")[0];
    cabecalho.innerHTML = "Exercício 5.1 - JavaScript";
}
alterarCabecalho();

function tornarMaiusculas() {
    let paragrafoT = document.getElementsByTagName("p")[0];
    paragrafoT.innerHTML = paragrafoT.innerHTML.toUpperCase();
}
tornarMaiusculas();

function showParagraphs() {
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();