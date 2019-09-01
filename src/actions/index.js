export const ADD_NOTE_DONT_PAYLOAD = 'ADD_NOTE_DONT_PAYLOAD';
export const ADD_NOTE_HAVE_PAYLOAD = 'ADD_NOTE_HAVE_PAYLOAD';
export const addNoteDontPayload = () => {
    return {
        type: ADD_NOTE_DONT_PAYLOAD
    };
};

export const addNoteHavePayload = (title, content) => {
    return {
        type: ADD_NOTE_HAVE_PAYLOAD,
        title,
        content
    };
};
