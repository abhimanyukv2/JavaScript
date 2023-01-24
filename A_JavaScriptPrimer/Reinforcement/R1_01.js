/*
Write a short Javascript function, is multiple(n, m), that takes two
integer values and returns True if is a multiple of m, that is, n = m*i
for sum integer i, and false otherwise. 
*/
const prompt = require("prompt-sync")({sigint:true})

const multiple = function(n, m) {
    if (n%m == 0) {
        return true;
    }
    else {
        return false;
    }
}

let n  = parseInt(prompt('Enter first number: '))
let m  = parseInt(prompt('Enter second number: '))

ans = multiple(n, m)

if (ans) {
    console.log(`${n} is multiple of ${m}`)
}
else {
    console.log(`${n} is not multiple of ${m}`)
}