
function func(resolve , reject){
    let num = Math.round(Math.random());
    if(num ==0) resolve("Pass");
    else reject("Fail");
}
const randomPromise = new Promise(func);

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });


   