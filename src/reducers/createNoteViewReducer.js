import * as noteAction from '../constants/actionTypes/notes';
import initialState from './initialState';

/**
 * Reducer function for 'create note' view
 * @param {object} state
 * @param {object} action
 */
export default function createNoteViewReducer(state = initialState.createNoteView, action) {
    // TODO: Incomplete
    switch(action.type) {
        case noteAction.UPDATE_DRAFT_NOTE:
            return Object.assign({}, state, { note: Object.assign({}, state.note, action.noteDiff) });
        case noteAction.CREATE_NOTE_REQUEST:
        case noteAction.CREATE_NOTE_FAILED:
            return Object.assign({}, state, {status: action.type});
        case noteAction.CREATE_NOTE_SUCCESSFUL:
            return Object.assign({}, state, {
                status: action.type,
                note: { title: '', noteContent: '', tags: [] }
            });
        default:
            return state;
    }
}
