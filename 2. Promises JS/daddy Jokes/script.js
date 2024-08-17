const text = document.querySelector("#Jokes");
const btn = document.querySelector("#btn");
// const getJokes = 

async function getJokes() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/' , {headers: {Accept :"application/json"}});
        const data = await response.json();
        text.innerText = data.joke;
    } catch (error) {
        text.innerText = error;
    }
}


btn.addEventListener("click" , ()=> getJokes());
