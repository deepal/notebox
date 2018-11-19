import * as noteAction from '../constants/actionTypes/notes';
import axios from 'axios';
import getProperty from 'lodash.get';

export function getNotes(noteBoxId) {
    return (dispatch) => {
        let url;

        if (noteBoxId) {
            url = `/api/notebox/${noteBoxId}/note`
        } else {
            // load all notes if noteBoxId is not provided
            `/note`
        }

        dispatch({ type: noteAction.FETCH_NOTES_REQUEST });
        axios.get(url)
            .then((response) => {
                const { status, data } = response;
                if (status === 200 && getProperty(data, 'success')) {
                    dispatch({
                        type: noteAction.FETCH_NOTES_SUCCESSFUL,
                        noteBox: getProperty(data, 'data.noteBox'),
                        notes: getProperty(data, 'data.notes')
                    });
                } else {
                    dispatch({ 
                        type: noteAction.FETCH_NOTES_FAILED, 
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteAction.FETCH_NOTES_FAILED, errorCode: errorStatusCode });
                }
                dispatch({ type: noteAction.FETCH_NOTES_FAILED, errorCode: 500 });
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
        axios.post(`/api/note`, note)
            .then(({ status, data }) => {
                if (status === 201 && getProperty(data, 'success')) {
                    dispatch({ type: noteAction.CREATE_NOTE_SUCCESSFUL, note: getProperty(data, 'data.note') });
                } else {
                    dispatch({ 
                        type: noteAction.CREATE_NOTE_FAILED, 
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteAction.CREATE_NOTE_FAILED, errorCode: errorStatusCode });
                }
                dispatch({ type: noteAction.CREATE_NOTE_FAILED, errorCode: 500 });
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
        axios.put(`/api/note/${note.id}`, note)
            .then(({ status, data }) => {
                if (status === 200 && getProperty(data, 'success')) {
                    dispatch({ type: noteAction.UPDATE_NOTE_SUCCESSFUL, note: getProperty(data, 'data.note') });
                } else {
                    dispatch({ 
                        type: noteAction.UPDATE_NOTE_FAILED, 
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteAction.UPDATE_NOTE_FAILED, errorCode: errorStatusCode });
                }
                dispatch({ type: noteAction.UPDATE_NOTE_FAILED, errorCode: 500 });
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
        axios.get(`/api/note/${noteId}`)
            .then(({ status, data }) => {
                if (status === 200 && getProperty(data, 'success')) {
                    dispatch({type: noteAction.DELETE_NOTE_SUCCESSFUL, noteId: getProperty(data, 'data.note.id')});
                } else {
                    dispatch({
                        type: noteAction.DELETE_NOTE_FAILED, 
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteAction.DELETE_NOTE_FAILED, errorCode: errorStatusCode });
                }
                dispatch({type: noteAction.DELETE_NOTE_FAILED, errorCode: 500});
            })
            .finally(() => {
                dispatch({type: noteAction.DELETE_NOTE_END});
            })
    }
}