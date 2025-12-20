const time = document.getElementById("time");

function getCurrentTime() {
const now = new Date(); //get current date and time

//Extract hours, minutes and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

/*
//determine AM or PM
const ampm = hours >= 12 ? "PM" : "AM"; //if hours >=12, its pm, else it's am

//convert to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; //0 becomes 12
*/

//add leading zeros
hours = String(hours).padStart(2, '0'); //convert the time to a string then use a string method to add a 0
minutes = String(minutes).padStart(2, '0'); //string.padstart(targetLength, padString)
seconds = String(seconds).padStart(2, '0');

return `${hours}:${minutes}:${seconds}`;  //add ${ampm} when switching to 12-hr format
}

function showClock() {
time.textContent = getCurrentTime(); //updates only the #time div
}

setInterval(showClock, 1000); //updates clock every second
