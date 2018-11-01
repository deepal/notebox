import axios from 'axios';
import getProperty from 'lodash.get';
import * as userAction from '../constants/actionTypes/users';

export function requestLogout() {
    return { type: userAction.LOGOUT_REQUESTED };
}

export function logout() {
    return (dispatch) => {
        axios.get('http://localhost:9999/auth/logout')
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
    }
}

export function updateProfile(profile) {
    return (dispatch) => {
        dispatch({ type: userAction.UPDATE_PROFILE_REQUESTED });
        axios.put('http://localhost:9999/user/profile', profile)
            .then(({ data }) => {
                if (getProperty(data, 'success')) {
                    const updatedProfile = getProperty(data, 'data.profile');
                    dispatch({ type: userAction.UPDATE_PROFILE_SUCCESSFUL, profile: updatedProfile });
                } else {
                    dispatch({ type: userAction.UPDATE_PROFILE_FAILED, error: new Error('update profile request returned an unsuccessful response') });
                }
            })
            .catch((err) => {
                dispatch({ type: userAction.UPDATE_PROFILE_FAILED, error: err });
            })
            .finally(() => {
                dispatch({ type: userAction.UPDATE_PROFILE_END });
            });
    }
}