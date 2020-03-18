import { HOST } from "../constants";

export const SET_FAMILY = 'SET_FAMILY';

export function setFamily(family) {
  return {
    type: SET_FAMILY,
    family
  }
}

export const verificationHeaders = () => {
  const headers = new Headers();
  headers.append('access-token', localStorage.getItem('access-token').toString());
  headers.append('uid', localStorage.getItem('uid').toString());
  headers.append('client', localStorage.getItem('client').toString());
  headers.append('expiry', localStorage.getItem('expiry').toString());
  return headers;
}

export function getFamily() {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());
        // const verificationHeaders = verificationHeaders();

      return fetch(`${HOST}/api/v1/families`, {
        method: 'GET',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(setFamily(json.family));
        } else {
          alert(json.error);
        }
      })
      .catch(e => alert(e));
    } else {
      alert("You are not authenticated properly.");
    }
  }
}

export function updateFamily(data) {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/families`, {
        method: 'PUT',
        body: JSON.stringify({
          familyname: data.familyName,
        }),
        headers: verificationHeaders,
      })
      .then(response => response.json)
      .then(json => {
        if(json.is_success) {
          dispatch(getFamily());
        } else {
          alert(json.error);
        }
      })
      .catch(e => alert(e));
    } else {
      alert("You are not authenticated properly.");
    }
  }
}

export function saveFamily(data) {
  return (dispatch) => {
    console.log("saveFamily clicked");

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());
      verificationHeaders.append('content-type', 'application/json');
      
      return fetch(`${HOST}/api/v1/families`, {
        method: 'POST',
        body: JSON.stringify({
          familyname: data.familyName,
        }),
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(getFamily());
        } else {
          alert(json.error);
        }
      })
      .catch(e => alert(e));
    } else {
      alert("You are not authenticated properly.");
    }
  }
}

export function deleteFamily(item) {
  return (dispatch) => {
    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/families/${item.id}`, {
        method: 'DELETE',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(getFamily());
        } else {
          alert(json.error);
        }
      })
      .catch(e => alert(e));
    }
  }
}