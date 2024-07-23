/* Callback : function passed as arguement in another funtion */



// function sum(a, b) {
//     console.log(a+b);
// }

// function calc(a , b , sumCallback)
// {
//     sumCallback(a,b);
// }

// calc(1 , 2, sum); (here sum is the callback function) * (can be also passed as arrow func)



/* Set TimeOut */

// console.log("It'll print something after 5 seconds");
// setTimeout(() =>{
//     console.log("it's been 5 seconds , how's u been ?");
// },5000 );


// console.log("I am outside setTimeOut am i affected ? , ofcourse not");


/* Callback HELLL (pyramid of DOOM) */
// nested callbacks stacked below one another forming a pyramid structure.

// function getData(id , getNextData){
    
//     setTimeout(() => {
//         console.log("Got data " , id);
//     }, 2000);
// }

// getData(1); // both of them are executed at same time 
// getData(2); // but we want it to have a delay of 2s.



/* a solution to this is callback hell*/


// getData(1 , ()=>{
//     getData(2 , ()=>{
//         getData(3 , ()=>{
//             getData(4);
//         });
//     });
// } )
 

/*
    But using callbacks in your code is Bad Manners, 
    So , we have promises to deal with that.

    - Promise is eventual completion of task.
    - it's an object in JS
    - it's a solution to callback hell
*/


/* Promise in JS*/

// let promise = new Promise((resolve , reject) => {
//     console.log("I am a promise");
//     // resolve("Successful");
//     reject("failed");
// })

// console.log(promise); // print's the state of promise



/* Promise in JavaScript*/


// function getData(id , getNextData) {
//     return new Promise((resolve, reject) => {

//             setTimeout(() => {

//                 if(id === 69){
//                     reject("No gandi baatein");
//                     return;
//                 }
//                 console.log("Got data : " , id);
//                 resolve("success");
//                 if(getNextData){
//                     getNextData();
//                 }
//             }, 4000);
           
//     })
// }


// let promise = getData(30);
// let promrizz = getData(69);

// console.log("Promise before it's resolved");
// console.log(promise);




// setTimeout(() => {
//     console.log("promise After it's resolved");
//     console.log(promise)
// }, 5000);



// /* .then(function) function executes when promise is successful*/
// promise.then(()=>{
//     console.log("succesfully got data (i.e promise is resolved)");
// })


// promrizz.catch(()=>{
//     console.log("No 69 is allowed , promise break ");
//     console.log("Me no good laik ur ex");
// })


/* Promise chaining in JS  (solution to call back hell)*/ 


function getData(id ){
    
   return new Promise((resolve , reject) =>{
       setTimeout(() => {
        console.log("got data "  , id);
        resolve("Success");
       }, 2000);
   })
}

// let p1 = getData(1);

// p1.then((res)=>{
//     getData(2).then((rest) =>{
//         console.log("we are finished and good ");
//     })
// })


/* Better way to do so */

getData(1)
.then((res) =>{
    return getData(2);
}).then((res) =>{
    getData(3);
});







