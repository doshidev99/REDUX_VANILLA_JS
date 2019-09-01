import {
    SHOW_ALL,
    REMOVE_NOTE,
    ADD_NOTE_DONT_PAYLOAD,
    ADD_NOTE_HAVE_PAYLOAD
} from '../actions';

const initialState = {
    notes: []
};

// 2 params ( initialState , dispatchAction)
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return {
                notes: [...state.notes, { assume: 'showAll', age: '20' }]
            };
        case REMOVE_NOTE:
            return {
                notes: state.notes.filter((note, index) => index != action.id)
            };
        case ADD_NOTE_DONT_PAYLOAD:
            return {
                notes: [...state.notes, { assume: 'ADD_NOTE_DONT_PAYLOAD' }]
            };

        case ADD_NOTE_HAVE_PAYLOAD: {
            return {
                notes: [
                    ...state.notes,
                    { title: action.title, content: action.content }
                ]
            };
        }

        default:
            // ! important default return state
            return state;
    }
};
