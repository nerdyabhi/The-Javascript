

/* 
    Useful when you want to send data to server or store in a text file
    as JSON is common data interchange format.
*/


// Things one can do on localstorage

// localStorage.setItem("Hey" , "abhi");
// localStorage.getItem("hey");
// localStorage.removeItem("hey");






const data = {
    name:"abhi" ,
    hobby:"Touch Typing",
    skills:"nothing fr" ,
    crush:"Soda",
    };

const body = document.querySelector("body");


const getData = document.querySelector("#getData");


// const removeData = document.getElementById("deleteData");

// let jsonData = JSON.stringify(data);

// localStorage.setItem("object" , jsonData); // data in string format 

getData.addEventListener("click" , ()=>{
    
        let parsedData = JSON.parse(localStorage.getItem("object"));
        console.log(parsedData);
        
        body.innerText = parsedData + "hello";
})




// let jsonString = JSON.stringify(data); // Converts js object or value to a JSON string

// console.log(jsonString);
// console.log(data);



