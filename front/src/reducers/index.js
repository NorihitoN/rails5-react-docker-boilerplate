import { combineReducers } from 'redux';

import auth from './auth';
import family from './family';
import members from './member';

const rootReducer = combineReducers({
    auth,
    family,
    members,
})

export default rootReducer;