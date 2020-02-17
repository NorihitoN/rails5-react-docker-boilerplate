import { 
    SET_MEMBERS,
} from '../actions/member';

// import { SET_EVENTS } from '../action/event';


const initialState = {
    members: [],
}

export default function (state = initialState, action) {
    switch(action.type){
        case SET_MEMBERS:
            return {
                ...state,
                members: action.members
            }
        default:
            return state;
    }
}