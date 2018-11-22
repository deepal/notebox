import { combineReducers } from 'redux';
import createNoteBoxView from './createNoteBoxViewReducer';
import createNoteView from './createNoteViewReducer';
import noteBoxesView from './noteBoxesViewReducer';
import noteBoxView from './noteBoxViewReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  noteBoxView,
  noteBoxesView,
  createNoteView,
  createNoteBoxView,
  user
});

export default rootReducer;
