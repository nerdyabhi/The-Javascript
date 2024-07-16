console.log(4 + 4);

// assignment operator
let a = 5; // assigning 5 to a
let b = 15; // assigning 5 to b
let myName = 'abhi'; // assigning 'abhi' to myName

// arithmetic operators
console.log(a + b); // 15 // addition
console.log(a - b); // -5 // subtraction
console.log(a * b); // 50 // multiplication
console.log(a / b); // 0.5 // division
console.log(a % b); // 5 // modulus
console.log(a ** b); // 9765625 // exponentiation
console.log(++a); // 6 // preincrement
console.log(--a); // 5 // predecrement
console.log(a++); // 5 // postincrement
console.log(a--); // 6 // postdecrement

// Something different
console.log(myName / 10); // NaN
console.log(0.1 + 0.2); // 0.30000000000000004 // floating point error
console.log(0.1 + 0.2 == 0.3); // false // floating point error

console.log('--------- COMPARISON OPERATORS --------------');

// comparison operators (returns either true or false)
console.log(a == b); // false // equal to
console.log(a != b); // true // not equal to
console.log(a > b); // false // greater than
console.log(a < b); // true // less than
console.log(a >= b); // false // greater than or equal to
console.log(a <= b); // true // less than or equal to

/// strict comparison operators
// === checks both value and datatype whereas == checks only value
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(5 == 5); // true
console.log(5 == '5'); // true

console.log(a >= 'a'); // false // less
