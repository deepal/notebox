import initialState from './initialState';
import * as noteActions from '../constants/actionTypes/notes';

/**
 * Reduce Notes
 * TODO: Currently, can only update/delete notes in the open notebox only. revise.
 * @param {*} state 
 * @param {*} action 
 */
export default function openNoteBoxReducer(state = initialState.noteBoxView, action) {
    switch (action.type) {
        case noteActions.FETCH_NOTES_REQUEST:
            return Object.assign({}, state, {
                openNoteBox: null,
                status: action.type
            })
        case noteActions.FETCH_NOTES_SUCCESSFUL:
            if (!action.noteBox) {
                return state;
            }
            return Object.assign({}, state, {
                openNoteBox: {
                    noteBox: action.noteBox,
                    notes: action.notes
                },
                status: action.type
            });
        case noteActions.FETCH_NOTES_FAILED:
            return Object.assign({}, state, {
                status: action.type,
                errorCode: action.errorCode
            })
        case noteActions.DELETE_NOTE_SUCCESSFUL:
            return Object.assign({}, state, {
                openNoteBox: Object.assign({}, state.openNoteBox, { notes: state.notes.filter(note => note.id !== action.noteId) })
            });
        case noteActions.UPDATE_NOTE_SUCCESSFUL: {
            const currentNotes = state.openNoteBox.notes;
            const updatedNotesList = currentNotes.map(note => {
                if (note.id === action.note.id) {
                    return action.note;
                }
                return note;
            });
            return Object.assign({}, state, {
                openNoteBox: Object.assign({}, state.openNoteBox, { notes: updatedNotesList })
            });
        }
        default:
            return state;
    }
}