import { HOST } from '../constants';

export const SET_AUTH_HEADERS = 'SET_AUTH_HEDEARS';
export const SET_USER_ATTRIBUTES = 'SET_USER_ATTRIBUTES'

export function setAuthHeaders(authHeaders) {
  return {
    type: SET_AUTH_HEADERS,
    authHeaders,
  };
}

export function setUserAttributes(userAttributes) {
  return {
    type: SET_USER_ATTRIBUTES,
    userAttributes,
  };
}

export const persistAuthHeadersLocalStorage = (authHeaders) => {
  Object.keys(authHeaders).forEach((key) => {
    localStorage.setItem(key, authHeaders[key]);
  });
}

export const registerUser = (data) => (dispatch) => {
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
        dispatch(setUserAttributes(userAttributes));
    })
    .catch(e => alert(e));
}


export const signInUser = (data) => (dispatch) => {
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
        dispatch(setUserAttributes(userAttributes));
    })
    .catch(e => alert(e));
}
