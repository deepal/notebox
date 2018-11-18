import axios from 'axios';
import getProperty from 'lodash.get';
import * as userAction from '../constants/actionTypes/users';

export function requestLogout() {
    return { type: userAction.LOGOUT_REQUESTED };
}

export function logout() {
    return (dispatch) => {
        axios.get('/auth/logout')
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    dispatch({ type: userAction.LOGOUT_SUCCESSFUL });
                } else {
                    dispatch({ type: userAction.LOGOUT_FAILED, error: new Error('logout request returned an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: userAction.LOGOUT_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: userAction.LOGOUT_END });
            });
    };
}

export function getUserProfile() {
    return (dispatch) => {
        dispatch({ type: userAction.FETCH_USER_REQUESTED });
        axios.get('/auth/user')
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    const user = getProperty(data, 'data.user');
                    dispatch({ type: userAction.FETCH_USER_SUCCESSFUL, user });
                } else {
                    dispatch({ type: userAction.FETCH_USER_FAILED, error: new Error('fetch user request returned an unsuccessful response') });
                }
            }).catch((err) => {
                dispatch({ type: userAction.FETCH_USER_FAILED, error: err });
            }).finally(() => {
                dispatch({ type: userAction.UPDATE_USER_END });
            });
    };
}

export function updateProfile(user) {
    return (dispatch) => {
        dispatch({ type: userAction.UPDATE_USER_REQUESTED });
        axios.put('/auth/user', user)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    const updatedUser = getProperty(data, 'data.user');
                    dispatch({ type: userAction.UPDATE_USER_SUCCESSFUL, user: updatedUser });
                } else {
                    dispatch({ type: userAction.UPDATE_USER_FAILED, error: new Error('update user request returned an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: userAction.UPDATE_USER_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: userAction.UPDATE_USER_END });
            });
    };
}
