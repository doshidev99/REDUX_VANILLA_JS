export const ADD_NOTE_DONT_PAYLOAD = 'ADD_NOTE_DONT_PAYLOAD';
export const ADD_NOTE_HAVE_PAYLOAD = 'ADD_NOTE_HAVE_PAYLOAD';
export const SHOW_ALL = 'SHOW_ALL';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const removeNote = id => {
    return { type: REMOVE_NOTE, id: id };
};

export const showAll = () => {
    return { type: SHOW_ALL };
};

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
