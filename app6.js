const button = document.querySelector("button");//button to fetch weather
//signature button flourish
button.addEventListener("mouseover", () => {
button.style.transform = "scale(1.2)";
button.style.transition = "transform 0.25s ease";
});

button.addEventListener("mouseout", () => {
button.style.transform = "scale(1)";
});

function getWeather(event) {
event.preventDefault();

const results = document.getElementById("results");//div for results
const cityInput = document.getElementById("cityname");//city input field
const accessKey = "261d2bd8eb804f9d86d63223260801";//API key

fetch(`https://api.weatherapi.com/v1/current.json?key=${accessKey}&q=${cityInput.value}`)
.then(response => response.json())
.then(data => {
results.innerHTML = `<p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
<p><strong>Temperature (°C):</strong> ${data.current.temp_c}</p>
<p><strong>Condition:</strong> ${data.current.condition.text}</p>`;
})//innerHTML is better suited here than textContent cos it allows more granular finetuning of the output text
.catch(error => {
results.textContent = `Error fetching location: ${error}`;
})};


const cityForm = document.getElementById("cityform");
cityForm.addEventListener("submit", getWeather);


/*main thing here was to create a function that called the api to retrieve the live weather data. The function takes the city input from the front end
and together with my accesskey calls the weatherapi.com api and retrieves the data. Then I had to parse the data into strings that were written into my results div on the html side with innerHTML*/

