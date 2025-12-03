const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//stop the form from refreshing the page
form.addEventListener("submit", (a) => {
a.preventDefault();

const taskText = input.value.trim();
if(taskText === "")return;//stops the function in case of empty value

//create a new list item
const li = document.createElement("li");
li.textContent = taskText;

//toggle complete on click
li.addEventListener("click", () => {
li.classList.toggle("completed"); //toggle adds the className "completed" to my html if it isnt there and removes it if it is
});

//delete on right-click
li.addEventListener("contextmenu", (a) => { //contextmenu being the event for right clicking
a.preventDefault(); //this line prevents rightclicking from bring up a menu as it normally does
li.remove(); //and instead it removes the list item which is your task
});

taskList.appendChild(li);//this line then actually adds your task to the ul as opposed to just keeping it in the memory

input.value = ""; //clears input
});

//button flourish
const button = document.querySelector("button");
button.addEventListener("mouseover", () => {
button.style.transform = "scale(1.2)";
button.style.transition = "transform 0.25s ease";
});

button.addEventListener("mouseout", () => {
button.style.transform = "scale(1)";
});

/* Intermediate Enhancements
Save tasks in localStorage so they persist after refresh.

Add a filter (e.g., show only completed or active tasks).

Edit tasks inline.

Advanced Features
Drag & drop tasks to reorder them.

Group tasks into categories (like “Work” vs “Personal”).

Add due dates and highlight overdue tasks.

Sync with an API or database for multi-device use */