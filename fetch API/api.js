/* Application Programming Interface (API) */

// fetch(url);

/*
let promise = fetch(url, [options]); returns a promise


1. It uses Request and Response Objects
2. The fetch() method is used to fetch a resource (data).
3. 

*/

const paragraph = document.querySelector("#factsP")

let url = 'https://cat-fact.herokuapp.com/facts';

const getFacts = async () => {
  console.log('getting data');
  let response = await fetch(url);

  let data = await response.json();
  paragraph.innerText = data[0].text;
};

getFacts();

/* AJAX -> Asynchronous Javascript and XML ( now XML is replaced by JSON ) */

/* Javascript Object Notation (JSON is 💖) */

/* .json() method returns a second promise that resolves the result of parsing the response body text as JSON  */
