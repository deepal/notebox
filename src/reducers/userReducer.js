import initialState from './initialState';
import * as userAction from '../constants/actionTypes/users';

/**
 * Reducer function for user state
 * @param {object} state
 * @param {object} action
 */
export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case userAction.FETCH_USER_SUCCESSFUL:
            return Object.assign({}, state, action.user);
        case userAction.LOGOUT_SUCCESSFUL:
            return {};
        default:
            return state;
    }
}
