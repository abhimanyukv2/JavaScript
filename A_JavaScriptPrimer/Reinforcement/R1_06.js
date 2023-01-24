/*
Write a JavaScript fuction ta=hat takes a positive integer n and returns
the sum of the square of all the odd positive integers smaller than n.
*/


const sumOfOddSquares = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i += 2) {
        sum += i * i;
    } 
    return sum;
}


const prompt = require('prompt-sync')({sigint: true});
let n = Number(prompt('Enter a positive integer: '));

console.log(`The sum of the squares of all the odd positive integers smaller than ${n} is ${sumOfOddSquares(n)}`);