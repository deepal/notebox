import * as noteBoxesAction from '../constants/actionTypes/noteBoxes';
import initialState from './initialState';

export default function noteBoxesReducer(state = initialState.noteBoxesView, action) {
  switch (action.type) {
    case noteBoxesAction.FETCH_NOTE_BOXES_REQUEST:
      return Object.assign({}, state, { status: action.type, noteBoxes: [] });
    case noteBoxesAction.FETCH_NOTE_BOXES_FAILED:
      return Object.assign({}, state, { status: action.type, errorCode: action.errorCode, noteBoxes: [] });
    case noteBoxesAction.FETCH_NOTE_BOXES_END:
      return Object.assign({}, state, { status: action.type});
    case noteBoxesAction.FETCH_NOTE_BOXES_SUCCESSFUL:
      return Object.assign({}, state, { status: action.type, noteBoxes: action.noteBoxes });
    default:
      return state;
  }
}
