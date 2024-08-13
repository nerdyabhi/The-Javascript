// // destructing array

// const { lutimes } = require("fs");

// const arr = [1, 2, 3];

// const [first, second, third] = arr;

// console.log(first, second, third);

// // swap two numbers
// let a = 5,
//   b = 10;

// [a, b] = [b, a]; // swap two numbers

// console.log(`a is ${a} and b is ${b}`);

// // destructing Objects

// const users = {
//   Name: 'Abhi Sharma',
//   GPA: 11,
// };

// const { Name: fullName, GPA: marks } = users;

// console.log(fullName , marks);

// console.log("-----------Spread Operator ----------------");

// // Spread operator is used to... copy the content of array

// let nums1 = [1 , 2, 3, 4];
// let nums2 = [4 , 5, 6, 7];

// console.log([...nums1 , ...nums2 ]);

// // also it can be used to push elements to the
// nums1.push([... ["7" , "9"]]);

// // Spread operator also converts string to

// const puraNaam = "Abhi Sharma";
// let spreadedName = [... puraNaam];
// console.log(spreadedName); /* prints [
//     'A', 'b', 'h', 'i',
//     ' ', 'S', 'h', 'a',
//     'r', 'm', 'a'
//   ]*/

// --------------------rest parameters ---------------------
let sum = (...num) => {
  return num.reduce((sum, current) => (sum = sum + current), 0);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7));
