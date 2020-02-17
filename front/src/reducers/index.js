import { combineReducers } from 'redux';

import auth from './auth';
import family from './family';
import members from './member';
import { eventReducer } from './event';

const rootReducer = combineReducers({
    auth,
    family,
    members,
    events: eventReducer
})

export default rootReducer;