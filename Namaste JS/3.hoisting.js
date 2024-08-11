console.log(x); // It'll print undefined as in phase1 , memory is already allocated to x as undefined.
func(); // but this function will work.
console.log(func); // even this will work fine.

// func1(); // will throw an error as it's not

// let x = 69; // Reference error
var x = 69;

// console.log(multiply(2, 3)); // TypeError: multiply is not a function
// var multiply = function(x, y) {
//     return x * y;
// };

/*
    Function declarations are hoisted entirely, 
    including the function body. 
    This allows you to call a function before its declaration in the code.
*/

function func() {
  console.log('hello abhi');
}

var func1 = () => {
  console.log('Hello abhi 1');
};

/* SUMMARY 
      - var declarations are hoisted and initialized with undefined.
      - let and const declarations are hoisted but not initialized (leading to TDZ).
      - Function declarations are hoisted with the entire function body.
      - Function expressions and arrow functions follow the hoisting rules of the variable they are assigned to.
*/
