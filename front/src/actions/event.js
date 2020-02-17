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

export function getEvents(member_id) {
  return (dispatch) => {

    if(localStorage.getItem('access-token')) {

      const verificationHeaders = new Headers();
      verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
      verificationHeaders.append('uid', localStorage.getItem('uid').toString());
      verificationHeaders.append('client', localStorage.getItem('client').toString());
      verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

      return fetch(`${HOST}/api/v1/members/${member_id}/events`, {
        method: 'GET',
        headers: verificationHeaders,
      })
      .then(response => response.json())
      .then(json => {
        if(json.is_success) {
          dispatch(setEvents(json.member_events));
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

// export function updateEvent(data) {
//   return (dispatch) => {

//     if(localStorage.getItem('access-token')) {

//       const verificationHeaders = new Headers();
//       verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
//       verificationHeaders.append('uid', localStorage.getItem('uid').toString());
//       verificationHeaders.append('client', localStorage.getItem('client').toString());
//       verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

//       return fetch(`${HOST}/api/v1/events`, {
//         method: 'PUT',
//         body: JSON.stringify({
//           event_name: data.eventName,
//           event_relation: data.eventRelation,
//           event_birthday: data.eventBirthday,
//           event_gender: data.eventGender,
//         }),
//         headers: verificationHeaders,
//       })
//       .then(response => response.json())
//       .then(json => {
//         if(json.is_success) {
//           dispatch(getEvents());
//         } else {
//           alert(json.error);
//         }
//       })
//       .catch(e => alert(e));
//     } else {
//       alert("You are not authenticated properly.");
//     }
//   }
// }

// export function saveEvent(data) {
//   return (dispatch) => {
//     console.log("saveEvents clicked");

//     if(localStorage.getItem('access-token')) {

//       const verificationHeaders = new Headers();
//       verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
//       verificationHeaders.append('uid', localStorage.getItem('uid').toString());
//       verificationHeaders.append('client', localStorage.getItem('client').toString());
//       verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());
//       verificationHeaders.append('content-type', 'application/json');
      
//       return fetch(`${HOST}/api/v1/events`, {
//         method: 'POST',
//         body: JSON.stringify({
//           event_name: data.eventName,
//           event_relation: data.eventRelation,
//           event_birthday: data.eventBirthday,
//           event_gender: data.eventGender,
//         }),
//         headers: verificationHeaders,
//       })
//       .then(response => response.json())
//       .then(json => {
//         if(json.is_success) {
//           dispatch(getEvents());
//         } else {
//           alert(json.error);
//         }
//       })
//       .catch(e => alert(e));
//     } else {
//       alert("You are not authenticated properly.");
//     }
//   }
// }

// export function deleteEvent(item) {
//   return (dispatch) => {
//     if(localStorage.getItem('access-token')) {

//       const verificationHeaders = new Headers();
//       verificationHeaders.append('access-token', localStorage.getItem('access-token').toString());
//       verificationHeaders.append('uid', localStorage.getItem('uid').toString());
//       verificationHeaders.append('client', localStorage.getItem('client').toString());
//       verificationHeaders.append('expiry', localStorage.getItem('expiry').toString());

//       return fetch(`${HOST}/api/v1/events/${item.id}`, {
//         method: 'DELETE',
//         headers: verificationHeaders,
//       })
//       .then(response => response.json())
//       .then(json => {
//         if(json.is_success) {
//           dispatch(getEvents());
//         } else {
//           alert(json.error);
//         }
//       })
//       .catch(e => alert(e));
//     }
//   }
// }