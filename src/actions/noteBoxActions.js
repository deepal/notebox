import * as noteBoxAction from '../constants/actionTypes/noteBoxes';
import getProperty from 'lodash.get';
import axios from 'axios';

/**
 * Redux action to fetch all noteboxes
 */
export function fetchNoteBoxes() {
    return (dispatch) => {
        dispatch({ type: noteBoxAction.FETCH_NOTE_BOXES_REQUEST });
        axios.get('/api/notebox')
            .then((response) => {
                const { status, data } = response;
                if (status === 200 && getProperty(data, 'success')) {       // TODO: Use constants to define http status codes. No magic numbers.
                    dispatch({
                        type: noteBoxAction.FETCH_NOTE_BOXES_SUCCESSFUL,
                        noteBoxes: getProperty(data, 'data.noteBoxes')
                    });
                } else {
                    dispatch({
                        type: noteBoxAction.FETCH_NOTE_BOXES_FAILED,
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteBoxAction.FETCH_NOTE_BOXES_FAILED, errorCode: errorStatusCode });
                }
                dispatch({
                    type: noteBoxAction.FETCH_NOTE_BOXES_FAILED,
                    errorCode: 500      // TODO: Use constants to define http status codes. No magic numbers.
                });
            })
    }
}

/**
 * Redux action to reduce the currently creating notebox info
 * @param {object} noteBoxInfoChanges
 */
export function updateDraftNoteBoxInfo(noteBoxInfoChanges) {
    return {
        type: noteBoxAction.UPDATE_DRAFT_NOTEBOX_INFO,
        noteBoxInfoChanges
    };
}

/**
 * Redux action to create a new notebox/update an existing notebox
 * @param {object} noteBox
 */
export function saveNoteBox(noteBox) {
    //  TODO: remove redundant code
    return (dispatch) => {
        if (noteBox.id) {
            dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_REQUEST });
            axios.put(`/api/notebox/${noteBox.id}`, noteBox)
                .then(({ status, data }) => {
                    if (status === 200 && getProperty(data, 'success')) {       // TODO: Use constants to define http status codes. No magic numbers.
                        dispatch({
                            type: noteBoxAction.UPDATE_NOTE_BOX_SUCCESSFUL,
                            id: getProperty(data, 'data.noteBox.id')
                        });
                    } else {
                        dispatch({
                            type: noteBoxAction.UPDATE_NOTE_BOX_FAILED,
                            errorCode: status
                        });
                    }
                })
                .catch((err) => {
                    const errorStatusCode = getProperty(err, 'response.status');
                    if (errorStatusCode) {
                        return dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_FAILED, errorCode: errorStatusCode });
                    }
                    dispatch({
                        type: noteBoxAction.UPDATE_NOTE_BOX_FAILED,
                        errorCode: 500      // TODO: Use constants to define http status codes. No magic numbers.
                    });
                }).finally(() => {
                    /**
                     * After dispatching *_SUCCESSFUL/*_FAILED action, we need to reset the status back to CREATE_NOTE_BOX_READY.
                     * Otherwise, when the create notebox page is re-rendered when user types again in the inputs, it will popup
                     * toast messages.
                     */
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_READY
                    });
                });
        } else {
            dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_REQUEST });
            axios.post('/api/notebox', noteBox)
                .then(({ status, data }) => {
                    if (status === 201 && getProperty(data, 'success')) {       // TODO: Use constants to define http status codes. No magic numbers.
                        dispatch({
                            type: noteBoxAction.CREATE_NOTE_BOX_SUCCESSFUL,
                            id: getProperty(data, 'data.noteBox.id')
                        });
                    } else {
                        dispatch({
                            type: noteBoxAction.CREATE_NOTE_BOX_FAILED,
                            errorCode: status
                        });
                    }
                })
                .catch((err) => {
                    const errorStatusCode = getProperty(err, 'response.status');
                    if (errorStatusCode) {
                        return dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_FAILED, errorCode: errorStatusCode });
                    }
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_FAILED,
                        errorCode: 500      // TODO: Use constants to define http status codes. No magic numbers.
                    });
                }).finally(() => {
                    /**
                     * After dispatching *_SUCCESSFUL/*_FAILED action, we need to reset the status back to CREATE_NOTE_BOX_READY.
                     * Otherwise, when the create notebox page is re-rendered when user types again in the inputs, it will popup
                     * toast messages.
                     */
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_READY
                    });
                });
        }
    }
}

/**
 * Redux action to delete a given notebox
 * @param {number} noteBoxId
 */
export function deleteNoteBox(noteBoxId) {
    /**
     * We assume that 'noteBoxId' parameter is always provided. If this action is called without the
     * 'noteBoxId' parameter, it should be a coding bug
     */
    return (dispatch) => {
        dispatch({ type: noteBoxAction.DELETE_NOTE_BOX_REQUEST });
        axios.delete(`/api/notebox/${noteBoxId}`)
            .then(({ status, data }) => {
                if (status === 200 && getProperty(data, 'success')) {   // TODO: Use constants to define http status codes. No magic numbers.
                    dispatch({
                        type: noteBoxAction.DELETE_NOTE_BOX_SUCCESSFUL
                    });
                } else {
                    dispatch({
                        type: noteBoxAction.DELETE_NOTE_BOX_FAILED,
                        errorCode: status
                    });
                }
            })
            .catch((err) => {
                const errorStatusCode = getProperty(err, 'response.status');
                if (errorStatusCode) {
                    return dispatch({ type: noteBoxAction.DELETE_NOTE_BOX_FAILED, errorCode: errorStatusCode });
                }
                dispatch({
                    type: noteBoxAction.DELETE_NOTE_BOX_FAILED,
                    errorCode: 500      // TODO: Use constants to define http status codes. No magic numbers.
                });
            })
    }
}
