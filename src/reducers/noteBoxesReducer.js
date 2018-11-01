import * as noteBoxesAction from '../constants/actionTypes/noteBoxes';
import initialState from './initialState';

export default function noteBoxesReducer(state = initialState.noteBoxes, action) {
  switch (action.type) {
    case noteBoxesAction.FETCH_NOTE_BOXES_SUCCESSFUL:
      return action.noteBoxes;

    default:
      return state;
  }
}
