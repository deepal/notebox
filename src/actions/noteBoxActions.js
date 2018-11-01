import * as noteBoxAction from '../constants/actionTypes/noteBoxes';
import getProperty from 'lodash.get';
import axios from 'axios';

export function fetchNoteBoxes() {
    return (dispatch) => {
        dispatch({ type: noteBoxAction.FETCH_NOTE_BOX_REQUEST });
        axios.get('http://localhost:9999/notebox')
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({
                        type: noteBoxAction.FETCH_NOTE_BOXES_SUCCESSFUL,
                        noteBoxes: getProperty(data, 'data.noteBoxes')
                    });
                } else {
                    dispatch({
                        type: noteBoxAction.FETCH_NOTE_BOXES_FAILED,
                        error: new Error('get noteboxes request returned an unsuccessful response')
                    });
                }
            })
            .catch((err) => {
                dispatch({
                    type: noteBoxAction.FETCH_NOTE_BOXES_FAILED,
                    error: err
                });
            }).finally(() => {
                dispatch({ type: noteBoxAction.FETCH_NOTE_BOXES_END });
            })
    }
}

export function saveNoteBox(noteBox) {
    //  TODO: remove redundant code
    return (dispatch) => {
        if (noteBox.id) {
            dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_REQUEST });
            axios.post('/notebox', noteBox)
                .then(({ data }) => {
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_SUCCESSFUL,
                        id: data.data.noteBox.id
                    });

                    dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_END });
                })
                .catch((err) => {
                    dispatch({
                        type: noteBoxAction.CREATE_NOTE_BOX_FAILED,
                        error: err
                    });

                    dispatch({ type: noteBoxAction.CREATE_NOTE_BOX_END });
                })
        } else {
            dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_REQUEST });
            axios.put(`/notebox/${noteBox.id}`, noteBox)
                .then(({ data }) => {
                    dispatch({
                        type: noteBoxAction.UPDATE_NOTE_BOX_SUCCESSFUL,
                        id: data.data.noteBox.id
                    });

                    dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_END });
                })
                .catch((err) => {
                    dispatch({
                        type: noteBoxAction.UPDATE_NOTE_BOX_FAILED,
                        error: err
                    });

                    dispatch({ type: noteBoxAction.UPDATE_NOTE_BOX_END });
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
