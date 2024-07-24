 const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const fromSelect = document.querySelector("#from");
const toSelect = document.querySelector("#to");

const selects = document.querySelectorAll("select");
const btn = document.querySelector(".exBtn");
const msg = document.querySelector("#msg");
const amount = document.querySelector("#amount")


// Populate the select
for(code in countryList){
    
   let option =  document.createElement("option");
   let option2 =  document.createElement("option");
   option.innerText = code;
   option2.innerText = code;
   option.value = code;
   option2.value = code;

   if(code === 'USD') option.selected = "selected";
  else if(code == 'INR') option2.selected = "selected";
    
    fromSelect.append(option);
    toSelect.append(option2);


    // select.addEventListener("change" , ()=>{
    //     updateFlag(evt.target);
    // })
}


for(sel of selects){
    
    sel.addEventListener("change" , (evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag = (element) =>{
    let img = element.parentElement.querySelector("img");
    let code = element.value;
    let countryCode = countryList[code];
    let newSRC = `https://flagsapi.com/${countryCode}/flat/64.png`
    img.src = newSRC;

}

btn.addEventListener("click" , async ()=>{
    const from = fromSelect.value.toLowerCase();
    const to = toSelect.value.toLowerCase();

    const URL = `${baseURL}/${from}.json`;
    console.log()
     let promise = await fetch(URL);
     let response = await promise.json();

     let data = response[from][to];
     let value = Math.round(amount.value * data);
    
    msg.innerText = `${amount.value} ${from.toUpperCase()} = ${amount.value * data} ${to}`
     
})
