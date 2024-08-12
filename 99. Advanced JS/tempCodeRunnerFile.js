/*
    I/O heavy operations in JavaScript refer to tasks that involve significant input/output activities,
    such as reading from or writing to a disk, making network requests, interacting with databases, or handling large amounts of data streams. These operations can be slow because they often rely on external resources (like a file system or a network) that take time to respond, making them different from CPU-bound operations,
    which primarily use the processor.
*/

const fs = require('fs'); // file system library in JS

// const contents = fs.readFileSync('./abhi.txt', 'utf-8'); // reads content from files in js
// console.log(contents);

// const contents2 = fs.readFileSync('./abhi2.txt', 'utf-8'); // reads content from files in js
// console.log(contents2);

// now the  readFileSync , reads the contents from the file synchronously i.e it'll first wait and finish the task1
// then it'll move to task2 , which is not a good thing,

// whereas in asynchronous function it starts executing the task one but doesn't wait for it to finish
// and moves on to solve task2.

function print(err, data) {
  console.log(data);
}

fs.readFile('./abhi2.txt', 'utf-8', print); // reads content from files in js

console.log('I should be before The ReadFile txt ');
