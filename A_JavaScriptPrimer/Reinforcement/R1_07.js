/*
Give a single command that computes the sum from Exercise R-1.6, relying
on JavaScript's comprehension syntax and the built-in sum function.
*/

const sumOfOddSquares = (n) => {
    return [...Array(n).keys()].map(x => x * x).filter(x => x % 2 == 1).reduce((a, b) => a + b, 0);
};

const prompt = require('prompt-sync')({sigint: true});
const n = Number(prompt('Enter a positive integer: '));

console.log(`The sum of the squares of all the odd positive integers smaller than ${n} is ${sumOfOddSquares(n)}`);