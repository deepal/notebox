import * as noteAction from '../constants/actionTypes/notes';
import initialState from './initialState';

// TODO: Incomplete
export default function createNoteViewReducer(state = initialState.createNoteView, action) {
    switch(action.type) {
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