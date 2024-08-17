console.log("Resolved is called and it'll return userName in 3s ");
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Abhi Sharma');
  }, 3000);
});

promise2.then(function (userName) {
  console.log(userName);
});

setTimeout(
  () => console.log('== ============>Time for Nerdy<==================='),
  3000
);

function pro3(resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve('Nerdy Sharma');
    } else {
      reject('Error Hai sir...');
    }
  }, 5000);
}
const promise3 = new Promise(pro3);

promise3
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.log(error);
  });
