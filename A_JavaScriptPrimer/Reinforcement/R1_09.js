/*
What parameters should be sent to the range constructor, to produce a
range with values 50, 60, 70, 80?
*/


function range(start, end, step) {
    if (step == null) step = 1;
    var array = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step)
            array.push(i);
    } else {
        for (var i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

console.log(range(50, 80, 10));


const rangeConstructor = (array) => {
    start = array[0];
    step = array[1] - array[0];
    end = array[array.length - 1];
    return [start, end, step];
};

const prompt = require('prompt-sync')({sigint: true});
const array = prompt('Enter an array of numbers: ').split(' ').map(Number);
console.log(rangeConstructor(array));