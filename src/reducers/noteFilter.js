import { SHOW_ALL } from '../actions';

const noteFilter = (visibility = SHOW_ALL, action) => {
    switch (action.type) {
        case SHOW_ALL:
            return SHOW_ALL;
        default:
            return visibility;
    }
};

export default noteFilter;
