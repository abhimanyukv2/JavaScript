/*
JavaScrit allows negative integers to be used as indices into a sequence,
such as a string. If string s has length n, and expression s[k] is used
for index −n ≤k < 0, what is the equivalent index j ≥0 such that s[j] 
references the same element?

example: s = 'abcde' n = 5
s[-1] = s[4] = 'e'
positive index j = 4
negative index k = -1
*/


const positiveIndex = (s, k) => {
    if (0 > k > -s.length) {
        return s.length + k;
    } else {
        return 'Invalid index';
    }
};

const negativeIndex = (s, j) => {
    if (0 < j < s.length - 1) {
        return j - s.length;
    } else {
        return 'Invalid index';
    }
};

const prompt = require('prompt-sync')({sigint: true});
let s = prompt('Enter a string: ');
let k = Number(prompt('Enter a negative integer: '));
let j = Number(prompt('Enter a positive integer: '));

console.log(`The positive index equivalent to ${k} is ${positiveIndex(s, k)}`);
console.log(`The negative index equivalent to ${j} is ${negativeIndex(s, j)}`);