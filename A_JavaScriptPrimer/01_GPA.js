const prompt = require("prompt-sync")({sigint:true});

console.log('Welcome to the GPA calculator.');
console.log('Please Enter all your letter grade, one per line.');
console.log('Enter a blank line to designate the end.');

// Map from letter to point value

const points = {'A+':4.0, 'A':4.0, 'A-':3.67, 'B+':3.33, 'B':3.0, 'B-':2.67, 'C+':2.33, 'C':2.0, 'C-':1.67, 'D+':1.33, 'D':1.0, 'F':0.0};

let num_course = 0;
let total_points = 0;
let done = false;

while (!done) {
    let grade = prompt('Enter your grade: ');
    
    if (grade == '') {
        done = true;
    }
    else if (!grade in points) {
        console.log(`Unknown grade ${0} being ignored`, grade);
    }
    else {
        num_course += 1
        total_points += points[grade]
    }
}


if (num_course > 0) {
    console.log(`Your GPA is ${total_points/num_course}`)
}