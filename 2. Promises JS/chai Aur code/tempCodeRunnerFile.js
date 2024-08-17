function pro3(resolve, reject) {
  setTimeout(function () {
    let error = true; // experiment here
    if (!error) {
      resolve('Nerdy Sharma');
    } else {
      reject('Error Hai sir...');
    }
  }, 1000);
}
const promise3 = new Promise(pro3);

async function consumePromise3(params) {
  try {
    const response = await promise3;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise3();
