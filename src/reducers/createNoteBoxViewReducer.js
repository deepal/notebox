import * as noteBoxAction from '../constants/actionTypes/noteBoxes';
import initialState from './initialState';

/**
 * Reducer function for 'create note' view
 * @param {object} state
 * @param {object} action
 */
export default function createNoteBoxViewReducer(state = initialState.createNoteBoxView, action) {
    // TODO: Incomplete
    switch(action.type) {
        case noteBoxAction.UPDATE_DRAFT_NOTEBOX_INFO:
            return Object.assign({}, state, { noteBox: Object.assign({}, state.noteBox, action.noteBoxInfoChanges) });
        case noteBoxAction.CREATE_NOTE_BOX_READY:
        case noteBoxAction.CREATE_NOTE_BOX_REQUEST:
        case noteBoxAction.CREATE_NOTE_BOX_FAILED:
            return Object.assign({}, state, {status: action.type});
        case noteBoxAction.CREATE_NOTE_BOX_SUCCESSFUL:
            return Object.assign({}, state, {
                status: action.type,
                noteBox: { title: '', description: '', tags: [] }
            });
        default:
            return state;
    }
}
