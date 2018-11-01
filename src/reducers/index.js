import { combineReducers } from 'redux';
import noteBoxes from './noteBoxesReducer';
import openNoteBox from './openNoteBoxReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  openNoteBox,
  noteBoxes,
  user
});

export default rootReducer;
