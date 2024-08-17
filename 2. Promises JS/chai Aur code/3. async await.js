// function pro3(resolve, reject) {
//   setTimeout(function () {
//     let error = true; // experiment here
//     if (!error) {
//       resolve('Nerdy Sharma');
//     } else {
//       reject('Error Hai sir...');
//     }
//   }, 1000);
// }
// const promise3 = new Promise(pro3);

// async function consumePromise3(params) {
//   try {
//     const response = await promise3;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise3();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {  
//     console.log(" ===>>> You put wrong url <<<===");
    
//     console.log(error);
//   }
// }

// getAllUsers();



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return  response.json();
})
.then((data=>{console.log(data)}))
.catch("Error aagaya sir"); 
