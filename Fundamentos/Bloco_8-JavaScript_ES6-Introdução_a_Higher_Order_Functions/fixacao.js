// Ao chamar a função doingThings:

const wakeUp = () => `Acordando`;
const breakfest = () => `Bora tomar café!!`;
const sleep = () => `Partiu dormir!!`;

const doingThings = (func) => {
    const result = func();
    console.log(result);
};

doingThings(breakfest);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!