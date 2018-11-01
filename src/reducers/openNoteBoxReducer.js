import initialState from './initialState';
import * as openNoteBoxAction from '../constants/actionTypes/openNoteBox';

/**
 * Reduce Notes
 * TODO: Currently, can only update/delete notes in the open notebox only. revise.
 * @param {*} state 
 * @param {*} action 
 */
export default function openNoteBoxReducer(state = initialState.openNoteBox, action) {
    switch(action.type) {
        case openNoteBoxAction.FETCH_NOTES_SUCCESSFUL:
            return Object.assign({}, state, {
                noteBox: action.noteBox,
                notes: action.notes
            });
        case openNoteBoxAction.DELETE_NOTE_SUCCESSFUL:
            return Object.assign({}, state, {notes: state.notes.filter(note => note.id !== action.noteId)})
        case openNoteBoxAction.UPDATE_NOTE_SUCCESSFUL: {
                const updatedNotesList = state.map(note => {
                    if (note.id === action.note.id) {
                        return action.note;
                    }
                    return note;
                });
                return Object.assign({}, state, { notes: updatedNotesList});
        }
        default: 
            return state;
    }
}