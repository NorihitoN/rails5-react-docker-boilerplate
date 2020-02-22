import { combineReducers } from 'redux';

import auth from './auth';
import family from './family';
import members from './member';
import { eventReducer } from './event';
import categories from './category'

const rootReducer = combineReducers({
    auth,
    family,
    members,
    events: eventReducer,
    categories,
})

export default rootReducer;