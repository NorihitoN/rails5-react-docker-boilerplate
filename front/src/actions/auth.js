import { HOST } from '../constants';

export const REGISTER_REQUEST_SENT = 'REGISTER_REQUEST_SENT';
export const REGISTER_REQUEST_SUCCEEDED = 'REGISTER_REQUEST_SUCCEEDED';
export const REGISTER_REQUEST_FAILED = 'REGISTER_REQUEST_FAILED';
export const VERIFY_TOKEN_REQUEST_SENT = 'VERYFY_TOKEN_REQUEST_SENT';
export const VERIFY_TOKEN_REQUEST_SUCCEEDED = 'VERYFY_TOKEN_REQUEST_SUCCEEDED';
export const VERIFY_TOKEN_REQUEST_FAILED= 'VERYFY_TOKEN_REQUEST_FAILED';
export const SIGN_IN_REQUEST_SENT = 'SIGN_IN_REQUEST_SENT';
export const SIGN_IN_REQUEST_SUCCEEDED = 'SIGN_IN_REQUEST_SUCCEEDED';
export const SIGN_IN_REQUEST_FAILED = 'SIGN_IN_REQUEST_FAILED';
export const SIGN_OUT_REQUEST_SENT = 'SIGN_OUT_REQUEST_SENT';
export const SIGN_OUT_REQUEST_SUCCEEDED = 'SIGN_OUT_REQUEST_SUCCEEDED';
export const SIGN_OUT_REQUEST_FAILED= 'SIGN_OUT_REQUEST_FAILED';
export const SET_HAS_VERIFICATION_BEEN_ATTEMPTED = 'SET_HAS_BERIFICATION_BEEN_ATTEMPTED';

export function registerRequestSent() {
    return {
        type: REGISTER_REQUEST_SENT,
    }
}

export function registerRequestSucceeded(userAttributes) {
    return {
        type: REGISTER_REQUEST_SUCCEEDED,
        payload: {
            userAttributes,
        },
    }
}

export function registerRequestFailed() {
    return {
        type: REGISTER_REQUEST_FAILED,
    }
}

export function verifyTokenRequestSent() {
    return {
        type: VERIFY_TOKEN_REQUEST_SENT,
    }
}

export function verifyTokenRequestSucceeded(userAttributes) {
    return {
        type: VERIFY_TOKEN_REQUEST_SUCCEEDED,
        payload: {
            userAttributes,
        },
    }
}

export function verifyTokenRequestFailed() {
    return {
        type: VERIFY_TOKEN_REQUEST_FAILED,
    }
}

export function signInRequestSent() {
    return {
        type: SIGN_IN_REQUEST_SENT,
    }
}

export function signInRequestSucceeded(userAttributes) {
    return {
        type: SIGN_IN_REQUEST_SUCCEEDED,
        payload: {
            userAttributes,
        },
    }
}

export function signInRequestFailed() {
    return {
        type: SIGN_IN_REQUEST_FAILED,
    }
}

export function signOutRequestSent() {
    return {
        type: SIGN_OUT_REQUEST_SENT,
    }
}

export function signOutRequestSucceeded() {
    return {
        type: SIGN_OUT_REQUEST_SUCCEEDED,
    }
}

export function signOutRequestFailed() {
    return {
        type: SIGN_OUT_REQUEST_FAILED,
    }
}

export function setHasVerificationBeenAttempted(hasVerificationBeenAttempted){
    return {
        type: SET_HAS_VERIFICATION_BEEN_ATTEMPTED,
        payload: {
            hasVerificationBeenAttempted,
        }
    }
}

export const persistAuthHeadersLocalStorage = (authHeaders) => {
  Object.keys(authHeaders).forEach((key) => {
    localStorage.setItem(key, authHeaders[key]);
  });
}

export const deleteAuthHeadersLocalStorage = (authHeaderKeys) => {
    authHeaderKeys.forEach((key) => {
        localStorage.removeItem(key);
    })
}

export const registerUser = (data) => (dispatch) => {
    dispatch(registerRequestSent());
    console.log("register a new user");
    return fetch(`${HOST}/api/auth`, {
        method: 'POST',
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
        }),
        headers: { "content-type": "application/json"},
    })
    .then(response => {
        if(response.headers.get('access-token')){
            const authHeaders = {
                'access-token': response.headers.get('access-token'),
                'client': response.headers.get('client'),
                'uid': response.headers.get('uid'),
                'expiry': response.headers.get('expiry'),
                'token-type': response.headers.get('token-type')
            }
            persistAuthHeadersLocalStorage(authHeaders);
        }
        return response.json();
    })
    .then(json => {
        const userAttributes = {
            'username': json.data.username
        }
        dispatch(registerRequestSucceeded(userAttributes));
    })
    .catch(e => {
            alert(e);
            dispatch(registerRequestFailed());
    });
}


export const verifyToken = (verificationParams) => (dispatch) => {
    dispatch(verifyTokenRequestSent());
    console.log("Verifying the current token.")
    let url = new URL(`${HOST}/api/auth/validate_token`);
    Object.keys(verificationParams).forEach(key => url.searchParams.append(key, verificationParams[key]))
    return fetch(url)
    .then(response => {
        if(response.headers.get('access-token')){
            const authHeaders = {
                'access-token': response.headers.get('access-token'),
                'client': response.headers.get('client'),
                'uid': response.headers.get('uid'),
                'expiry': response.headers.get('expiry'),
                'token-type': response.headers.get('token-type')
            }
            persistAuthHeadersLocalStorage(authHeaders);
        }
        return response.json();
    })
    .then(json => {
        const userAttributes = {
            'username': json.data.username
        }
        dispatch(verifyTokenRequestSucceeded(userAttributes));
    })
    .catch(e => {
        dispatch(verifyTokenRequestFailed());
    });
}

export const signInUser = (data) => (dispatch) => {
    dispatch(signInRequestSent());
    console.log("Login with Email");
    return fetch(`${HOST}/api/auth/sign_in`, {
        method: 'POST',
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
        headers: { "content-type": "application/json" },
    })
    .then(response => {
        if(response.headers.get('access-token')){
            const authHeaders = {
                'access-token': response.headers.get('access-token'),
                'client': response.headers.get('client'),
                'uid': response.headers.get('uid'),
                'expiry': response.headers.get('expiry'),
                'token-type': response.headers.get('token-type')
            }
            persistAuthHeadersLocalStorage(authHeaders);
        }
        return response.json();
    })
    .then(json => {
        const userAttributes = {
            'username': json.data.username
        }
        dispatch(signInRequestSucceeded(userAttributes));
    })
    .catch(e => {
        alert(e);
        dispatch(signInRequestFailed());
    });
}

export const signOutUser = () => (dispatch) => {
    dispatch(signOutRequestSent());
    console.log("Sign out");
    if(localStorage.getItem('access-token')) {
        const verificationHeaders = new Headers();
        verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
        verificationHeaders.append('uid', localStorage.getItem('uid').toString());
        verificationHeaders.append('client', localStorage.getItem('client').toString());
        return fetch(`${HOST}/api/auth/sign_out`,{
            method: 'DELETE',
            headers: verificationHeaders, 
        })
        .then(response => {
            const authHeaderKeys = ['access-token', 'client', 'uid', 'expiry', 'token-type'];
            deleteAuthHeadersLocalStorage(authHeaderKeys);
            dispatch(signOutRequestSucceeded());
            return response.json();
        })
        .catch(e => {
            alert(e);
            dispatch(signOutRequestFailed());
        });
    }
}

export const verifyCredentials = (store) => {
    console.log("verifying credentials.");
    if(localStorage.getItem('access-token')) {
        const verificationParams = {
            'access-token': localStorage.getItem('access-token'),
            'uid': localStorage.getItem('uid'),
            'client': localStorage.getItem('client'),
        }
        store.dispatch(verifyToken(verificationParams));
    } else {
        store.dispatch(setHasVerificationBeenAttempted(true));
    }
}