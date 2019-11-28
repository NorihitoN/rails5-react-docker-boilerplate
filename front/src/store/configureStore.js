import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { verifyCredentials } from '../actions/auth';

const middleware = applyMiddleware(thunk);
const store = createStore( 
    rootReducer,
    middleware,
);

store.subscribe(() =>
    console.log(store.getState())
);

console.log("initializing state.");
verifyCredentials(store);

export default store;
