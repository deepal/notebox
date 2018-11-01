import initialState from './initialState';
import * as userAction from '../constants/actionTypes/users';

export default function userReducer(state = initialState.user, action){
    switch (action.type) {
        case userAction.UPDATE_PROFILE_SUCCESSFUL:
            return Object.assign({}, state, { profile: action.profile });
        case userAction.LOGOUT_SUCCESSFUL:
            return {};
        default:
            return state;
    }
}