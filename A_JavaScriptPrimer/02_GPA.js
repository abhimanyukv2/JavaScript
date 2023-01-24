const prompt = require("prompt-sync")({sigint:true})

function compute_gpa(grade, points={'A+':4.0, 'A':4.0, 'A-':3.67, 'B+':3.33, 'B':3.0, 'B-':2.67, 'C+':2.33, 'C':2.0, 'C-':1.67, 'D+':1.33, 'D':1.0, 'F':0.0}) {
    num_course = 0;
    total_points = 0;

    for (const i of grades) {
        if (i in points) {
            num_course += 1;
            total_points += points[i];
        }
    }
    return total_points/num_course;
}

let grades = []
let grade = prompt('What is your grade: ')

while (grade != "") {
    grades.push(grade)
    grade = prompt('What is your grade: ')
}

console.log(`Your average GPA is: ${compute_gpa(grades)}`)