// Reference : https://www.w3schools.com/js/js_arrays.asp 

let arr = [1 , 2,3 , 5, 3,3 , 1]; // hamara pyara array 


// Built in methods for arrays


arr.push("lateElement");
arr.sort();

// can access using indices (ofc index starts at 0)

console.log(arr[0]); // prints first element (i.e abhi)

// Iterate the array using (for of loop)

for (i of arr) {
  console.log(i);
}

console.log('\n--------- Access using indices-----------------------\n');

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // accessing through indices (haan mein C ke zamane ka programmer hoon)
}


