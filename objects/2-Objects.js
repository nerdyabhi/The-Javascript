function data(first, last, age, salary) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.salary = salary;
}

console.log(data);

let abhi = new data('Abhi', 'sharma ', 19, -10000);

let aitrika = new data('Aitrika', 'chakaraborty ', 21, -100000);

console.log(abhi);
console.log(aitrika);

console.log(Object.getPrototypeOf(data));