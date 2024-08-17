function isAdult(age , resolve , reject) {
  if (age >= 18) {
    console.log('Adult , promise will resolve');
    resolve();
  } else {
    console.log('No adult , promise will reject');
  }
}

function proFunction(resolve, reject) {
  // Do an async task
  // File handling, crypto, API calls, network, etc.

  setTimeout(isAdult(17, resolve , reject), 1000); 

}

const promiseOne = new Promise(proFunction);

promiseOne.then(function () {
  console.log('PromiseOne is resolved');
}).catch(function(){
    console.log("Promise is  rejected");
    
})
