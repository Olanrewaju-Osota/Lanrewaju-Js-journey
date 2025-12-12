const button = document.getElementById("mode");
const body = document.body;

button.addEventListener("click", () => {
body.classList.toggle("darkmode");
});

button.addEventListener("mouseover", () => {
button.style.transform = "scale(1.2)";
button.style.transition = "transform 0.25s ease";
});

button.addEventListener("mouseout", () => {
button.style.transform = "scale(1)";
});