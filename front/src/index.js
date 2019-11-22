import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './assets/scss/custom.scss';

import * as serviceWorker from './serviceWorker';
import Home from './views/Home.js';
import About from './views/About.js';
import Signup from './views/Signup.js';
import Login from './views/Login.js';

function Profile() {
  return (
      <h2>Profile</h2>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/login" component={Login}>
          </Route> 
          <Route path="/signup" component={Signup}>
          </Route>
          <Route path="/profile" component={Profile}>
          </Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// uiinregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
