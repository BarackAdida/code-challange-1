// Prompts user to enter marks
const marks = prompt("Enter marks:");
let grade;
// if fetchs users input and assigns it an appropriate grade
    if(marks >= 79) {
        grade = "A";
    } else if (marks > 59 && marks < 79 ) {
        grade = "B";
    } else if (marks >= 49 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks < 49) {
        grade = "D";
    } else {
        grade = "E";
    }
    // returns grade
    console.log(grade)

