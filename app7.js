//signature button flourish
const button = document.querySelector("button");
button.addEventListener("mouseover", () => {
button.style.transform = "scale(1.2)";
button.style.transition = "transform 0.25s ease";
});

button.addEventListener("mouseout", () => {
button.style.transform = "scale(1)";
});

function movieSearch(event) {
event.preventDefault();

const results = document.getElementById("results");
const movieInput = document.getElementById("moviename");
const accessKey = "af8ea027";

fetch(`https://www.omdbapi.com/?apikey=${accessKey}&t=${movieInput.value}`)
.then(response => response.json())
.then(data => {
if (data.Response === "False") {
results.textContent = `Error: ${data.Error}`;
return;
}
//must consider using createElement and appendChild to build elements going forward
results.innerHTML = `<img src = "${data.Poster}"> 
<p><strong>Title:</strong> ${data.Title}</p>
<p><strong>Year:</strong> ${data.Year}</p>
<p><strong>Rated:</strong> ${data.Rated}</p>
<p><strong>Released:</strong> ${data.Released}</p>
<p><strong>Runtime:</strong> ${data.Runtime}</p>
<p><strong>Genre:</strong> ${data.Genre}</p>
<p><strong>Director:</strong> ${data.Director}</p>
<p><strong>Actors:</strong> ${data.Actors}</p>
<p><strong>Plot:</strong> ${data.Plot}</p>
<p><strong>Box Office:</strong> ${data.BoxOffice}</p>`;
})
.catch(error => {
results.textContent = `Error fetching movie details: ${error}`;
})};

const movieForm = document.getElementById("movieform");
movieForm.addEventListener("submit", movieSearch);

/*similar to the weather app; write a function that collects your input from the front end (essentially your movie name). then with your apikey baked in, it calls the omdb api and you format the output to the data you want to show and it returns it*/