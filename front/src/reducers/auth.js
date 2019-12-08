import { 
    REGISTER_REQUEST_SENT,
    REGISTER_REQUEST_SUCCEEDED,
    REGISTER_REQUEST_FAILED,
    VERIFY_TOKEN_REQUEST_SENT,
    VERIFY_TOKEN_REQUEST_SUCCEEDED,
    VERIFY_TOKEN_REQUEST_FAILED,
    SIGN_IN_REQUEST_FAILED,
    SIGN_IN_REQUEST_SENT,
    SIGN_IN_REQUEST_SUCCEEDED,
    SIGN_OUT_REQUEST_FAILED,
    SIGN_OUT_REQUEST_SENT,
    SIGN_OUT_REQUEST_SUCCEEDED,
    SET_HAS_VERIFICATION_BEEN_ATTEMPTED,
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
        case REGISTER_REQUEST_SENT:
        case VERIFY_TOKEN_REQUEST_SENT:
        case SIGN_IN_REQUEST_SENT:
        case SIGN_OUT_REQUEST_SENT:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               isLoading: true
                },
            }
        case VERIFY_TOKEN_REQUEST_SUCCEEDED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               attributes: action.payload.userAttributes,
                               isLoading: false,
                               isSignedIn: true,
                               hasVerificationBeenAttempted: true,
                },
            }
        case REGISTER_REQUEST_SUCCEEDED:
        case SIGN_IN_REQUEST_SUCCEEDED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               attributes: action.payload.userAttributes,
                               isLoading: false,
                               isSignedIn: true,
                },
            }
        case SIGN_OUT_REQUEST_SUCCEEDED:
            const userAttributesKeys = Object.keys(state.currentUser.attributes);
            const allNullUserAttributes = userAttributesKeys.reduce(
                (accumulatedNullUserAttributes, currentUserAttributeKey) => {
                    return {
                        ...accumulatedNullUserAttributes,
                        [currentUserAttributeKey]: null,
                    }
                },
                {},
            )
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               attributes: allNullUserAttributes,
                               isLoading: false,
                               isSignedIn: false,
                },

            }
        case SET_HAS_VERIFICATION_BEEN_ATTEMPTED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               hasVerificationBeenAttempted: action.payload.hasVerificationBeenAttempted,
                }
            }
        case REGISTER_REQUEST_FAILED:
        case SIGN_OUT_REQUEST_FAILED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               isLoading: false,
                               isSignedIn: false,
                },
            }
        case SIGN_IN_REQUEST_FAILED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               isLoading: false, 
                },
            }
        case VERIFY_TOKEN_REQUEST_FAILED:
            return {
                ...state,
                currentUser: { ...state.currentUser,
                               isLoading: false,
                               isSignedIn: false,
                               hasVerificationBeenAttempted: true,
                },
            }
        default:
            return state;
    }
}