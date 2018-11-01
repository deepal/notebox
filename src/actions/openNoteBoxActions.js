import * as noteAction from '../constants/actionTypes/openNoteBox';
import axios from 'axios';
import getProperty from 'lodash.get';

export function getNotes(noteBoxId) {
    return (dispatch) => {
        dispatch({ type: noteAction.FETCH_NOTES_REQUEST });
        axios.get(`http://localhost:9999/notebox/${noteBoxId}/note`)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({
                        type: noteAction.FETCH_NOTES_SUCCESSFUL,
                        noteBox: getProperty(data, 'data.noteBox'),
                        notes: getProperty(data, 'data.notes')
                    });
                } else {
                    dispatch({ type: noteAction.FETCH_NOTES_FAILED, error: new Error('get notes return an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: noteAction.FETCH_NOTES_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: noteAction.FETCH_NOTES_END });
            });
    }
}

export function createNote(note) {
    // TODO: should validate note content here
    return (dispatch) => {
        dispatch({ type: noteAction.CREATE_NOTE_REQUEST });
        axios.post(`http://localhost:9999/note`, note)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({ type: noteAction.CREATE_NOTE_SUCCESSFUL, note: getProperty(data, 'data.note') });
                } else {
                    dispatch({ type: noteAction.CREATE_NOTE_FAILED, error: new Error('create note request returned an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: noteAction.CREATE_NOTE_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: noteAction.CREATE_NOTE_END })
            })
    }
}

export function updateNote(note) {
    return (dispatch) => {
        if (!note.id) {
            return dispatch({ type: noteAction.UPDATE_NOTE_FAILED, error: new Error('updated note object does not contain id field') });
        }

        dispatch({ type: noteAction.UPDATE_NOTE_REQUEST });
        axios.put(`http://localhost:9999/note/${note.id}`, note)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({ type: noteAction.UPDATE_NOTE_SUCCESSFUL, note: getProperty(data, 'data.note') });
                } else {
                    dispatch({ type: noteAction.UPDATE_NOTE_FAILED, error: new Error('update note request returned an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: noteAction.UPDATE_NOTE_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: noteAction.UPDATE_NOTE_END })
            })
    }
}

export function deleteNote(noteId) {
    return (dispatch) => {
        if (!noteId) {
            dispatch({type: noteAction.DELETE_NOTE_FAILED, error: new Error('note id must be provided to delete')});
        }
        axios.get(`http://localhost:9999/note/${noteId}`)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({type: noteAction.DELETE_NOTE_SUCCESSFUL, noteId: getProperty(data, 'data.note.id')});
                } else {
                    dispatch({type: noteAction.DELETE_NOTE_FAILED, error: new Error('delete note request returned an unsuccessful response')});
                }
            })
            .catch((err) => {
                dispatch({type: noteAction.DELETE_NOTE_FAILED, error: err});
            })
            .finally(() => {
                dispatch({type: noteAction.DELETE_NOTE_END});
            })
    }
}