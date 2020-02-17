import { Events, SET_EVENTS, EventActionTypes } from '../store/types'


const initialState: Events = {
    events: [],
}

export function eventReducer(
    state = initialState,
    action: EventActionTypes) {
    switch(action.type){
        case SET_EVENTS:
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        default:
            return state;
    }
}