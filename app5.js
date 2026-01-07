/*let score = 0;
let totalQuestions = 5;

function checkAnswers () {
score = 0;

const selected1 =document.querySelector('input[name="question1"]:checked');
const selected2 =document.querySelector('input[name="question2"]:checked');
const selected3 =document.querySelector('input[name="question3"]:checked');
const selected4 =document.querySelector('input[name="question4"]:checked');
const selected5 =document.querySelector('input[name="question5"]:checked');

const correctAnswers = {
question1: "C", //Homer
question2: "B", //Deoxyribonucleic Acid
question3: "A", //<70dB
question4: "D", //Iambic Pentameter
question5: "D", //Standard and Poor's
};

if (selected1 && selected1.value === correctAnswers.question1) score++;
if (selected2 && selected2.value === correctAnswers.question2) score++;
if (selected3 && selected3.value === correctAnswers.question3) score++;
if (selected4 && selected4.value === correctAnswers.question4) score++;
if (selected5 && selected5.value === correctAnswers.question5) score++;

alert(`Your score is ${score}/${totalQuestions}`);
}


const button = document.querySelector("button");
button.addEventListener("click", checkAnswers); */



/*
created variables for total questions and the intial score count,
created a function to compare selected answers to the actual answers, score accordingly and display the result,
made it so clicking the button displayed the results*/


let score = 0;
let totalQuestions = 5;

function checkAnswers(event) {
event.preventDefault(); //prevent form submission refresh
score = 0;

const selected1 =document.querySelector('input[name="question1"]:checked');
const selected2 =document.querySelector('input[name="question2"]:checked');
const selected3 =document.querySelector('input[name="question3"]:checked');
const selected4 =document.querySelector('input[name="question4"]:checked');
const selected5 =document.querySelector('input[name="question5"]:checked');

const correctAnswers = {
question1: "C", //Homer
question2: "B", //Deoxyribonucleic Acid
question3: "A", //<70dB
question4: "D", //Iambic Pentameter
question5: "D", //Standard and Poor's
};

if (selected1 && selected1.value === correctAnswers.question1) score++;
if (selected2 && selected2.value === correctAnswers.question2) score++;
if (selected3 && selected3.value === correctAnswers.question3) score++;
if (selected4 && selected4.value === correctAnswers.question4) score++;
if (selected5 && selected5.value === correctAnswers.question5) score++;

//display result in the div
const resultsDiv = document.getElementById("results");
//conditional logic to display different messages depending on score
if (score === totalQuestions) {
resultsDiv.textContent = `Flawless! You scored ${score}/${totalQuestions}`;
} else if (score >= 3) {
resultsDiv.textContent = `Good Job! You scored ${score}/${totalQuestions}`;
} else {
resultsDiv.textContent = `Keep practicing! You scored ${score}/${totalQuestions}`;
}}

//signature button flourish
const button = document.querySelector("button");
button.addEventListener("mouseover", () => {
button.style.transform = "scale(1.2)";
button.style.transition = "transform 0.25s ease";
});

button.addEventListener("mouseout", () => {
button.style.transform = "scale(1)";
});

const quizForm = document.getElementById("quiz-form")
quizForm.addEventListener("submit", checkAnswers); //this works because the button is wrapped in the form so naturally it submits the selections