import store from './store';
import { addNoteDontPayload, addNoteHavePayload } from './actions';
// We use store.getState() to get our app state from the store

console.log('Before addNoteDontPayload: ', store.getState());
store.dispatch(addNoteDontPayload());
console.log('After addNoteDontPayload: ', store.getState());

console.log('Before addNoteHavePayload <>: ', store.getState());
store.dispatch(addNoteHavePayload('truongPayload, truongContentPayload'));
console.log('After addNoteHavePayload <> : ', store.getState());
