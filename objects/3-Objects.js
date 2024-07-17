// Object creation
let obj = {
  name: '',
  studentClass: '',
  marks: '',
};

// Factory Construction method

function createStudent(name, studentClass, marks) {
  return (data = {
    name: name,
    studentClass: studentClass,
    marks: marks,
  });
}

let abhi = createStudent('abhi Sharma', '3rd year', '2 backlogs');

console.log(abhi);

// Constructor method

function Student(name, studentClass, marks) {
  this.name = name;
  this.studentClass = studentClass;
  this.marks = marks;
}

let abhi2 = new Student('Nerdy Abhi, ', 'Infinite, ', '2 backlogs');

abhi2.hobby = 'touch typing'; // can add properties dynamically

console.log(abhi2);


// functions are objects in javascript
