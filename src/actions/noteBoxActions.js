import * as noteBoxAction from '../constants/actionTypes/noteBoxes';
import getProperty from 'lodash.get';
import axios from 'axios';

export function fetchNoteBoxes() {
    return (dispatch) => {
        dispatch({ type: noteBoxAction.FETCH_NOTE_BOXES_REQUEST });
        axios.get('/notebox')
            .then((response) => {
                const { status, data } = response;
                if ( status === 200 && getProperty(data, 'success')) {
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
            .catch(() => {
                dispatch({
                    type: noteBoxAction.FETCH_NOTE_BOXES_FAILED,
                    errorCode: 500
                });
            })
    }
}

export function saveNoteBox(noteBox) {
    //  TODO: remove redundant code
    return (dispatch) => {
        if (noteBox.id) {
            dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_REQUEST });
            axios.post('/notebox', noteBox)
                .then(({ status, data }) => {
                    if (status === 201 && getProperty(data, 'success')) {
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
                .catch(() => {
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_FAILED,
                        errorCode: 500
                    });
                })
        } else {
            dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_REQUEST });
            axios.put(`/notebox/${noteBox.id}`, noteBox)
                .then(({ status, data }) => {
                    if (status === 200 && getProperty(data, 'success')) {
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
                .catch(() => {
                    dispatch({
                        type: noteBoxAction.UPDATE_NOTE_BOX_FAILED,
                        errorCode: 500
                    });
                })
        }

    }
}


// export function calculateFuelSavings(settings, fieldName, value) {
//   return {
//     type: types.CALCULATE_FUEL_SAVINGS,
//     dateModified: getFormattedDateTime(),
//     settings,
//     fieldName,
//     value
//   };
// }
