import { HOST } from '../constants';

export const registerUser = (data) => (dispatch) => {
    console.log("register a new user");
    console.log(data);
    return fetch(`${HOST}/api/auth`, {
        method: 'POST',
        body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password,
        }),
        headers: { "content-type": "application/json"},
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    })
    .catch(e => alert(e));

}