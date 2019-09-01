import { ADD_NOTE_DONT_PAYLOAD, ADD_NOTE_HAVE_PAYLOAD } from '../actions';

const initialState = {
    notes: []
};

// 2 params ( initialState , dispatchAction)
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE_DONT_PAYLOAD:
            return {
                notes: [...state.notes, { assume: 'truong' }]
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
