import { combineReducers } from 'redux';

import auth from './auth';
import family from './family';

const rootReducer = combineReducers({
    auth,
    family,
})

export default rootReducer;