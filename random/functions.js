// alert("Hey, Abhi Here Hope you're doing great")

let a = 5;
let b = 4;

console.log(add(a, b));

function add(a, b) {
  console.log('By adding ' + a + ' and ' + b );
  return a + b;
}

console.table([a, b, add(a, b)]);
