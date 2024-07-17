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

console.loh(abhi);
