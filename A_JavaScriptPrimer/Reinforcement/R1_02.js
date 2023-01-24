/*
Write a short JavaScript function, is even(k), that takes an integer value 
and return true if k is even ans false otherwise. However, your function
cannot use the multiple, modulo, or division operator
*/


const even = function(k) {
    if ((k&1) == 1) {
        return false;
    }
    else {
        return true;
    }
}

const is_even = function(k) {
    if ((-1)**k == 1) {
        return true
    }
    else {
        return false
    }
}

const prompt = require('prompt-sync')({sigint:true})
let k = parseInt(prompt('Enter an integer: '))

console.log(typeof(k))

console.log(`${k} is ${even(k) ? "even" : "odd"}`)
console.log(`${k} is ${is_even(k) ? "even" : "odd"}`)