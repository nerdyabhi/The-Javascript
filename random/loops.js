let sum = 0;

// for loop
for (let i = 0; i <= 10; i++) {
  debugger;
  sum += i;
}
console.log(sum); // prints 55 (sum of 0 to 10 numbers)

let i = 0;
sum = 0;
// while loop
while (i <= 10) {
  sum += i++;
}
console.log(sum); // prints 55 (sum of 0 to 10 numbers)

sum = 0;

// do while loop
do {
  sum += i++;
} while (i <= 5);

console.log(sum); // prints 20 (sum of 0 to 5 numbers
