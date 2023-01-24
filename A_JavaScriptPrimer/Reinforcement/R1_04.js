/*
Write a short JavaScript function that takes a positive integer n and
returns the sum of the squares of all the positive integers smaller than n.
*/

const sumOfSquares = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i * i;
    }
    return sum;
};

const sumOfSquares2 = (n) => {
    return (n * (n - 1) * (2 * n - 1)) / 6;
};

const prompt = require('prompt-sync')({sigint: true});

const n = Number(prompt('Enter a positive integer: '));
console.log(`The sum of the squares of all the positive integers smaller than ${n} is ${sumOfSquares(n)}`);
console.log(`The sum of the squares of all the positive integers smaller than ${n} is ${sumOfSquares2(n)}`);