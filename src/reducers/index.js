import notesReducer from './notesReducer';
import noteFilter from './noteFilter';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    notes: notesReducer,
    visibility: noteFilter
});
