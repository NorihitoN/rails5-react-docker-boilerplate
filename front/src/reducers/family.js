import { 
    SET_FAMILY,
} from '../actions/family';


const initialState = {
    family: null,
}

export default function (state = initialState, action) {
    switch(action.type){
        case SET_FAMILY:
            return {
                ...state,
                family: action.family
            }
        default:
            return state;
    }
}