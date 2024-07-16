let obj = {
  name: 'Abhi',
  age: 22,
  greet: function () {
    console.log("Hey, Abhi Here Hope you're doing great");
  },
};

// console.log("name : " + obj.name);
// console.log("age : " + obj.age);
// console.log(obj.greet());

// obj.name = "Abhi Sharma";   // changing the name
// console.log("name : " + obj.name);

// Another way to create object in javascript

let obj1 = new Object();

obj1.name = 'Abhi';
obj1.age = 22;
obj1.greet = function () {
  console.log("Hey, Abhi Here Hope you're doing great"); // function inside object also called as method
};

obj1.getname = function () {
  return this.name;
};

console.log(obj1);
console.log(obj1.getname());


