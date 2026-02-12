/*first declare all the functions I'll be needing for the app to work
functions to get stored notes,save notes, create new notes, add new notes, update existing notes, and delete notes*/

//declare variables
const notesContainer = document.getElementById("app"); //main app container
const addNoteButton = notesContainer.querySelector(".add-note"); //its "notesContainer." and not "document." because I'm using buttons from a specific element(i.e the div that I've represented with notesContainer)

//random color array
const colors = ["#FFEB3B", "#FFCDD2", "#C8E6C9", "#BBDEFB", "#FFF9C4", "#D1C4E9"];

addNoteButton.addEventListener("click", () => addNote());

//check local storage for JSON array to parse back into notes, if none exist, then it passes an empty array
function getNotes() {
return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
} 

getNotes().forEach((note) => {
const noteElement = createNoteElement(note.id, note.content, note.color);//uses createNoteElement function to render preexisting notes from local storage

notesContainer.insertBefore(noteElement, addNoteButton); //ensures the notes are rendered before the button for adding new notes
});

//saveNotes populates your local storage with data
function saveNotes(notes) {
localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
}


 //creates a new textarea to represent a new sticky note
function createNoteElement(id, content, color) {
const element = document.createElement("textarea");

element.classList.add("note"); //so that the css rules for notes are engaged and applied
element.value = content;
element.placeholder = "Empty Sticky Note";
element.style.backgroundColor = color;


element.addEventListener("change", () => {
updateNote(id, element.value); //hands-off the process of updating the note to the updateNotes function
});

element.addEventListener("dblclick", () => {
const doDelete = confirm("Do you want to delete this sticky note?");

if (doDelete) {
deleteNote(id, element);//basically, if I want to delete a note, it runs the deleteNote function
}
});

return element;
}

function addNote() {
const notes = getNotes(); //I need to get the existing notes first because the way this works is that I add my new note to the existing notes and then save it back into the JSON array

// pick random color 
const randomColor = colors[Math.floor(Math.random() * colors.length)];

const noteObject = {
id: Math.floor(Math.random() * 100000),
content: "",
color: randomColor
};

const noteElement = createNoteElement(noteObject.id, noteObject.content, noteObject.color);
notesContainer.insertBefore(noteElement, addNoteButton); //ensures the notes are rendered before the button for adding new notes

notes.push(noteObject);
saveNotes(notes);
}

function updateNote(id, newContent) {
const notes = getNotes();
const targetNote = notes.filter(note => note.id ==id)[0];

targetNote.content = newContent;
saveNotes(notes);
}

function deleteNote(id, element) {
const notes = getNotes().filter((note) => note.id != id);

saveNotes(notes);
notesContainer.removeChild(element);
}