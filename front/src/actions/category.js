import { HOST } from "../constants";

export const SET_CATEGORIES = 'SET_CATEGORIES';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories
  }
}

export function getCategories() {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/categories`, {
        method: 'GET',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(setCategories(json.categories));
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