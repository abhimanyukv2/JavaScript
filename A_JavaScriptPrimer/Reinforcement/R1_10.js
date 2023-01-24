/*
What parameter should be sent to the range constructor, to produce a
range with values 8, 6, 4, 2, 0, -4, -6, -8
*/

const rangeConstructor = (_array) => {
    let start = _array[0];
    let steps = _array[1] - _array[0];
    let end = _array[_array.length - 1]
    return [start, end, steps]
};


// const prompt = require('prompt-sync')[{sigint:true}];
let array = [8, 6, 4, 2, 0, -2, -4, -6, -8];
let range = rangeConstructor(array)
// console.log(typeof(range))
console.log(`start: ${range[0]}, end: ${range[1]}, steps: ${range[2]}`)

for (let index = range[0]; index >= range[1]; index += range[2]) {
    console.log(index);
};