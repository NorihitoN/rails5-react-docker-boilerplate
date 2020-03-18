import { HOST } from "../constants";

import { Events, SET_EVENTS, EventActionTypes } from '../store/types'

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: events
  }
}

// getMember, getEventのアクションが実行されたことがわかるため、
// console.log("test is ok")という対応になる。auth.jsを参照

export function getEvents() {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/events`, {
        method: 'GET',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(setEvents(json.events));
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

export function updateEvent(data) {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());
      verificationHeaders.append('content-type', 'application/json');

      return fetch(`${HOST}/api/v1/members/${data.memberId}/events/${data.event.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          event: {
            start_value: Number(data.event.startValue),
            start_year: Number(data.event.startYear),
            end_year: Number(data.event.endYear),
            interval_year: Number(data.event.intervalYear),
            interest_rate: Number(data.event.interestRate),
            event_memo: data.event.eventMemo,
            category_id: Number(data.event.categoryId),
            subcategory_id: Number(data.event.subcategoryId),
          }
        }),
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          console.log("updateEvents success");
          dispatch(getEvents());
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

export function saveEvent(data) {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());
      verificationHeaders.append('content-type', 'application/json');

      return fetch(`${HOST}/api/v1/members/${data.memberId}/events`, {
        method: 'POST',
        body: JSON.stringify({
          event: {
            start_value: Number(data.event.startValue),
            start_year: Number(data.event.startYear),
            end_year: Number(data.event.endYear),
            interval_year: Number(data.event.intervalYear),
            interest_rate: Number(data.event.interestRate),
            event_memo: data.event.eventMemo,
            category_id: Number(data.event.categoryId),
            subcategory_id: Number(data.event.subcategoryId),
          }
        }),
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          console.log("saveEvents success");
          dispatch(getEvents());
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

export function deleteEvent(item) {
  return (dispatch) => {
    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/members/${item.member_id}/events/${item.id}`, {
        method: 'DELETE',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          console.log("deleteEvents success");
          dispatch(getEvents());
        } else {
          alert(json.error);
        }
      })
      .catch(e => alert(e));
    }
  }
}