let arr = [1 , 2, 3, 5, 6, 3]

console.log("Length of array is : " , arr.length);
console.log("Array is : " , arr);

console.log(arr.fill(-1,2 )); // fill the array with -1 from index 2

console.log(arr.fill(0, 1, 3)); // fill the array with 0 from index 1 to 3

let arr1 = [1 , 2, 3];
let arr2 = [4, 5, 6];

console.log("new stuff begins : ")
console.log("-------------------")

console.log(arr1.concat(arr2) , "concated two arrays"); // two arrays are concated

let joined = arr1.join('#'); // sepearated by #
console.log(joined , typeof joined); // converted array to string