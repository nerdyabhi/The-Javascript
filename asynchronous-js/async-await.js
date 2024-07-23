function getData(id ){
    
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
         console.log("got data "  , id);
         resolve("Success");
        }, 2000);
    })
 }

/* Async await is even better than promises chain*/

(async function getDataAwait(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();

// getDataAwait();



// IIFEE (IMMEDIATELY INVOKED ONE USE FUNCTIONS)

// (function)(); sntax for iiffee; 
// Used for async await funcitons