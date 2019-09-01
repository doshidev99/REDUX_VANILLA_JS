import store from './store';
import {
    addNoteDontPayload,
    addNoteHavePayload,
    showAll,
    removeNote
} from './actions';
// We use store.getState() to get our app state from the store

///test
store.dispatch(showAll());
console.log(store.getState());

// console.log('Before showAll 😘: ', store.getState().notes);
// store.dispatch(showAll());
// console.log('After showAll 😘 : ', store.getState().notes);

// console.log('Before addNoteDontPayload: ', store.getState().notes);
// store.dispatch(addNoteDontPayload());
// console.log('After addNoteDontPayload: ', store.getState().notes);

// console.log('Before addNoteHavePayload <>: ', store.getState().notes);
// store.dispatch(addNoteHavePayload('truongPayload, truongContentPayload'));
// console.log('After addNoteHavePayload <> : ', store.getState().notes);

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
function deleteNote(index) {
    store.dispatch(removeNote(index));
}

function renderNotes() {
    let notes = store.getState().notes;

    notesUList.innerHTML = '';
    notes.map((note, index) => {
        let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id="${index}">x</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;
        notesUList.innerHTML += noteItem;
    });
    setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', e => {
    e.preventDefault();
    let title = addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNoteHavePayload(title, content));
});

function setDeleteNoteButtonsEventListeners() {
    let buttons = document.querySelectorAll('ul#notes li button');

    for (let button of buttons) {
        button.addEventListener('click', () => {
            deleteNote(button.dataset.id);
        });
    }
}

// ------ Render the initial Notes ------
store.subscribe(() => {
    //subscribe to the store
    renderNotes();
});

// const unsubscribe = store.subscribe(() => {
//     renderNotes();
// });

// unsubscribe();
