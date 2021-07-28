const assert = require('assert');

const addOne = (array) => {
    const output = [];
    for (let index = 0; index < array.length; index += 1) {
      output.push(array[index] + 1);
    }
    return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//Exercicio 2

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (arr) => {
    const output = [];
    for(i = 0; i < arr.length; i += 1) {
        output.push(arr[i].length);
    }
    return output;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);