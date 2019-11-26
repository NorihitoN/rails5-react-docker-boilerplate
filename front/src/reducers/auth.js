import { 
    RESISTER_REQUEST_SENT,
    RESISTER_REQUEST_SUCCEEDED,
    RESISTER_REQUEST_FAILED,
    VERIFY_TOKEN_REQUEST_SENT,
    VERIFY_TOKEN_REQUEST_SUCCEEDED,
    VERIFY_TOKEN_REQUEST_FAILED,
    SIGN_IN_REQUEST_FAILED,
    SIGN_IN_REQUEST_SENT,
    SIGN_IN_REQUEST_SUCCEEDED,
    SIGN_OUT_REQUEST_FAILED,
    SIGN_OUT_REQUEST_SENT,
    SIGN_OUT_REQUEST_SUCCEEDED,
} from '../actions/auth';


const initialState = {
    currentUser: {
        isSignedIn: false,
        isLoading: false,
        hasVerificationBeenAttempted: false,
        attributes: {},
    },
}

export default function (state = initialState, action) {
    switch(action.type){
        case RESISTER_REQUEST_SENT:
        case VERIFY_TOKEN_REQUEST_SENT:
        case SIGN_IN_REQUEST_SENT:
        case SIGN_OUT_REQUEST_SENT:
            return {
                ...state,
                currentUser: { isLoading: true },
            }
        case VERIFY_TOKEN_REQUEST_SUCCEEDED:
            return {
                ...state,
                currentUser: { attributes: action.payload.userAttributes,
                               isLoading: false,
                               isSignedIn: true,
                               hasVerificationBeenAttempted: true,
                            },
            }
        case RESISTER_REQUEST_SUCCEEDED:
        case SIGN_IN_REQUEST_SUCCEEDED:
            return {
                ...state,
                currentUser: { attributes: action.payload.userAttributes,
                               isLoading: false,
                               isSignedIn: true,
                             },
            }
    }
    return state;
}