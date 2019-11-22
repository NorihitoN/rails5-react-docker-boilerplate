import { SET_AUTH_HEADERS, SET_USER_ATTRIBUTES } from '../actions/auth';

const initialState = {
    currentUser: {
        isSignedIn: false,
        isLoading: false,
        hasVerificationBeenAttempted: false,
        attributes: {},
    },
    authHeaders: {},
}

export default function (state = initialState, action) {
    if(action.type === SET_AUTH_HEADERS){
        return {
            ...state,
            authHeaders: action.authHeaders
        }
    }

    if(action.type === SET_USER_ATTRIBUTES){
        return {
            ...state,
            currentUser: { attributes: action.userAttributes }
        }
    }
    return state;
}