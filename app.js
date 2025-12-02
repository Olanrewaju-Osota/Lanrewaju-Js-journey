let count = 0;

const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
count++; 
counter.innerText = count; 
});

decrementBtn.addEventListener("click", () => {
count--; 
counter.innerText = count; 
});

resetBtn.addEventListener("click", () => {
count = 0; 
counter.innerText = count; 
});

/*
const buttons = document.getElementsByClassName("btn");

for (let btn of buttons) {
btn.addEventListener("mouseover", () => {
btn.style.transform = "scale(1.2)";
btn.style.transition = "transform 0.3s ease";
});

btn.addEventListener("mouseout", () => {
btn.style.transform = "scale(1)";
});
}*/

//modern syntax
const buttons = document.querySelectorAll(".btn")//querySelectorAll takes all kinds of html selectors

//loop through each of the buttons
buttons.forEach (btn => {
btn.addEventListener("mouseover", () => {
btn.style.transform = "scale(1.2)";
btn.style.transition = "transform 0.3s ease";
});

btn.addEventListener("mouseout", () => {
btn.style.transform = "scale(1)";
});
});
