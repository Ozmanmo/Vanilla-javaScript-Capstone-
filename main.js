// refrence to all the data in the HTML 
const form = document.querySelector(".form-group");
const input = document.querySelector(".form-control");
const submitButton = document.querySelector(".submit-btn");
const result = document.querySelector("#result");


// event listener to the search button

submitButton.addEventListener("click", (e)=>{
    let countryName= input.value; 
    let countryApi = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(countryApi);
    e.preventDefault()
    fetch(countryApi)
        .then((response)=>response.json())
        .then((data=>{
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies));
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
            console.log(Object.values(data[0].languages).toString().split(", ").join(", "));

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>

            </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
            </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
            </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
                    - ${Object.keys(data[0].currencies)[0]} </span>
            </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(" , ").join(" , ")}</span>
            </div>
            </div>

                
            `
        })).catch((err)=>{
            if(countryName.length==0){
                result.innerHTML=`<h3>The Input Field Cannot Be Empty! </h3>`;
            }
            else{
                result.innerHTML=`<h3>Please enter a valid Country name!</h3>`
            }
        })
});