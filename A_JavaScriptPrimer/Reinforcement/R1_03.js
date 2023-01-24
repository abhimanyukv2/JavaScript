/*
Write a short JavaScript function, minmax(data), that takes a sequence of
one or more numbers, and returns the smallest and largest numbers, in the form of tupple of length of two. Do not use the built-in function min or max in implementing your solution.
*/

const minmax = function(sequence) {
    let minval = sequence[0]
    let maxval = sequence[0]

    for (const iterator of sequence) {
        if (minval > iterator) {
            minval = iterator
        }
        if (maxval < iterator) {
            maxval = iterator
        }
    }

    return [minval, maxval];
}

const prompt = require('prompt-sync')({sigint:true})

const sequence = prompt().split(' ')
let ans = minmax(sequence)
console.log(ans)
console.log(typeof(ans))