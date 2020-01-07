import { 
    SET_MEMBERS,
} from '../actions/member';


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