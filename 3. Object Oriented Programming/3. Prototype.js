let user = {
  fullName: 'Abhi Sharma',
  marks: 0,
};

let abhi = ['Abhi', 'Sharma', 'Hehe'];
let abhi2 = ['I', 'Am ', 'Abhi'];

Object.prototype.heyAbhi = function () {
  console.log(`this is ${this}`);
};

user.heyAbhi(); // Prototypes of objects => passed on to object as well as arrays
abhi.heyAbhi();

Array.prototype.getAbhi = function () {
  console.log(`Aaapne Bulayaa ${this}`);
};

abhi.getAbhi();
abhi2.getAbhi();