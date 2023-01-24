/*
Python’s random module includes a function choice(data) that returns a random element from a non-empty sequence. The random module includes a more basic function randrange, with parameterization similar to the built-in range function, that return a random choice from the given range. Using only the randrange function, implement your own version of the choice function.
*/

function choice(data) {
    min = 0;
    max = data.length;
    return data[Math.floor(Math.random() * (max - min) - min)]
}


const prompt = require('prompt-sync')({sigint: true});

let data = prompt('Enter a list of numbers: '); // 1 2 3 4 5 6 7 8 9 10
data = data.split(' '); 
console.log(choice(data));
