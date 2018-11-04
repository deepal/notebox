import { combineReducers } from 'redux';
import createNoteView from './createNoteViewReducer';
import noteBoxesView from './noteBoxesViewReducer';
import noteBoxView from './noteBoxViewReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  noteBoxView,
  noteBoxesView,
  createNoteView,
  user
});

export default rootReducer;
