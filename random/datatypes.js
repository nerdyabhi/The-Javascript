// primitive Datatypes

// 1. Number
let a = 5;
// 2. String
let string = 'sharma';
//3. Boolean
let bool = false;
//4. Null
let nullValue = null;
//5. Undefined
let undefinedValue = undefined;
//6. Symbol
let symbol = Symbol('symbol');
//7. BigInt
let bigInt = 1234567890123456789012345678901234567890n;

// Non-primitive Datatypes
//1. Object
let object = {
  key: 'value',
  abhi: 'sharma',
};

//2. Array
let array = [1, 2, 3, 4, 5];

// 3. Date
let date = new Date();

console.log(typeof array, array);
console.log(typeof object, object);
console.log(typeof date, date);
console.log(typeof bigInt, bigInt);
console.log(typeof string, string);
console.log(typeof bool, bool);
console.log(typeof nullValue, nullValue);

if (bool) {
  console.log('Boolean is true');
} else {
  console.log('Boolean is false');
}

console.log('-------------------- BUG BUG BUG -------------------');
console.log(nullValue, typeof nullValue); // it should be Null but it is object

let string1 = 69; //this is a number
console.log(typeof string1, string1);
console.log(typeof String(string1), string1); // now it's typecasted into a string

let float = 400.402;

console.log(typeof float, float); // it should be float but it is number

console.log(float + String(string1)); 
console.log(float + (string1)); 


let num = 49.69;
console.log(parseFloat(num)); // it will give 49.69
console.log(parseInt(num)); // it will give 49



/* Not a number (NaN) */
let nan = 'abhi';
console.log(parseInt(nan)); // it will give NaN // which means Not a Number in javascript


let abhi = 303.39;