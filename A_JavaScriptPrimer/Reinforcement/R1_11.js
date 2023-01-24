/*
Demonstrate how to use Array's list comprehension syntex to produce the
list [1, 2, 4, 8, 16, 32, 64, 128, 256]
*/


const listComprehension = (n) => {
    return [...Array(n).keys()].map(x => 2**x);
}

const prompt = require('prompt-sync')({sigint:true})
n = Number(prompt('Length of the array would be: '))
console.log(`Array comprehenion: ${listComprehension(n)}`)