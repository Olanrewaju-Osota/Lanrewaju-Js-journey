/* //1st try,verbose code
const red = document.querySelector(".color-swatch.red");
const green = document.querySelector(".color-swatch.green");
const blue = document.querySelector(".color-swatch.blue");
const yellow = document.querySelector(".color-swatch.yellow");
const purple = document.querySelector(".color-swatch.purple");
const black = document.querySelector(".color-swatch.black");
const white = document.querySelector(".color-swatch.white");

red.addEventListener("click", () => {
const chosenColor = "red"; 
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
green.addEventListener("click", () => {
const chosenColor = "green";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
blue.addEventListener("click", () => {
const chosenColor = "blue";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
yellow.addEventListener("click", () => {
const chosenColor = "yellow";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
purple.addEventListener("click", () => {
const chosenColor = "purple";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
black.addEventListener("click", () => {
const chosenColor = "black";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});
white.addEventListener("click", () => {
const chosenColor = "white";
document.body.style.backgroundColor = chosenColor;
localStorage.setItem("bgColor", chosenColor);
});


window.addEventListener('load', () => {
const savedColor = localStorage.getItem("bgColor");
if(savedColor) {
document.body.style.backgroundColor = savedColor;
}
}); */

//cleaner code
const swatches = document.querySelectorAll(".color-swatch");

swatches.forEach(swatch => {
swatch.addEventListener('click', () => {
const chosenColor = window.getComputedStyle(swatch).backgroundColor;
document.body.style.backgroundColor = chosenColor;
localStorage.setItem('bgColor', chosenColor);
});
});

window.addEventListener('load', () => {
const savedColor = localStorage.getItem("bgColor");
if(savedColor) {
document.body.style.backgroundColor = savedColor;
}
});