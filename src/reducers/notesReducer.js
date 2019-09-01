import { ADD_NOTE_HAVE_PAYLOAD, REMOVE_NOTE } from '../actions';

const notesReducer = (notes = [], action) => {
    switch (action.type) {
        case ADD_NOTE_HAVE_PAYLOAD:
            return [
                ...notes,
                {
                    title: action.title,
                    content: action.content
                }
            ];

        case REMOVE_NOTE:
            return notes.filter((note, index) => index != action.id);

        default:
            return notes;
    }
};

export default notesReducer;
