let obj = 
{
    name :"Abhi",
    age : 19,
    greet : function()
    {
        console.log("Hey, Abhi Here Hope you're doing great");
    }
}

// One can use template literals to print variables in console.log like this:

console.log(`name : ${obj.name} age : ${obj.age}`);

// Built in methods in strings

let fullName = "Abhi Sharma had a real good humour before javascript";

console.log(fullName.length); // length of the string
console.log(fullName.toLowerCase()); // converts to lowercase
console.log(fullName.split(' ').join('..')); 
console.log(fullName.toUpperCase()); // converts to uppercase
console.log(fullName.charAt(0)); // returns the character at index 0
console.log(fullName.indexOf('good')); // returns the index of the first occurrence of 'good'
console.log(fullName.slice(4, 10)); // returns a substring from index 4 to 10
console.log(fullName.replace('javascript', 'Python')); // replaces 'javascript' with 'Python'


