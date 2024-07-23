
# JavaScript Callbacks, Promises, and Asynchronous Patterns

## Callback Functions

- **Definition**: A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

```javascript
function sum(a, b) {
    console.log(a + b);
}

function calc(a, b, sumCallback) {
    sumCallback(a, b);
}

calc(1, 2, sum); // Here, `sum` is the callback function
```

- **Arrow Function as Callback**: Callbacks can also be passed as arrow functions.

## setTimeout

- **Definition**: `setTimeout` is used to execute a function after a specified delay (in milliseconds).

```javascript
console.log("It'll print something after 5 seconds");

setTimeout(() => {
    console.log("it's been 5 seconds, how's u been?");
}, 5000);

console.log("I am outside setTimeout. Am I affected? Of course not");
```

## Callback Hell (Pyramid of Doom)

- **Definition**: Nested callbacks stack below one another, forming a pyramid structure, making the code hard to read and maintain.

```javascript
function getData(id, getNextData) {
    setTimeout(() => {
        console.log("Got data", id);
    }, 2000);
}

getData(1); // Both are executed at the same time
getData(2); // But we want it to have a delay of 2 seconds.
```

### Solution: Callback Hell

```javascript
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});
```

## Promises


- **Definition**: A promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    // resolve("Successful");
    reject("failed");
});

console.log(promise); // Prints the state of the promise
```

### Using Promises

```javascript
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 69) {
                reject("No gandi baatein");
                return;
            }
            console.log("Got data:", id);
            resolve("Success");
        }, 4000);
    });
}

let promise = getData(30);
let promrizz = getData(69);

console.log("Promise before it's resolved");
console.log(promise);

setTimeout(() => {
    console.log("Promise after it's resolved");
    console.log(promise);
}, 5000);

// Handling resolved promises
promise.then(() => {
    console.log("Successfully got data (i.e. promise is resolved)");
});

// Handling rejected promises
promrizz.catch(() => {
    console.log("No 69 is allowed, promise break");
    console.log("Me no good laik ur ex");
});
```

### Promise Chaining (Solution to Callback Hell)

```javascript
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got data:", id);
            resolve("Success");
        }, 2000);
    });
}

let p1 = getData(1);

p1.then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log("We are finished and good");
});
```

### Better Way to Chain Promises

```javascript
getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) => {
        return getData(3);
    });
```

- **Advantages**: Promises make the code cleaner and more readable compared to callback hell.
```
```



# JavaScript Async/Await

## Introduction

- **Definition**: `async` and `await` are used to work with asynchronous code in a more synchronous fashion, making the code easier to read and write compared to using promises alone.

## Using `async` and `await`

- **Async Function**: A function declared with the `async` keyword. Inside an `async` function, you can use the `await` keyword to pause the execution of the function until a promise is resolved.

### Example

```javascript
function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("got data", id);
            resolve("Success");
        }, 2000);
    });
}

/* Async await is even better than promises chain */

async function getDataAwait() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

getDataAwait();
```

- **Explanation**:
  - **getData Function**: Returns a promise that resolves after 2 seconds, simulating data retrieval.
  - **Async Function (getDataAwait)**: The `await` keyword is used before `getData`, pausing the execution of `getDataAwait` until each promise is resolved.
  - **Sequential Execution**: The `await` keyword ensures that `getData(2)` waits for `getData(1)` to complete, `getData(3)` waits for `getData(2)`, and so on.

### Advantages of `async/await`:
1. **Readability**: Code written with `async/await` is more readable and resembles synchronous code.
2. **Error Handling**: Easier error handling using `try/catch` blocks compared to `.then` and `.catch` with promises.
3. **Debugging**: Easier to debug and trace through the code.

### Error Handling with `async/await`:

```javascript
async function getDataAwait() {
    try {
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

getDataAwait();
```

- **Explanation**:
  - **try/catch Block**: Catches any errors that occur during the execution of the async function, making it easier to handle errors gracefully.

