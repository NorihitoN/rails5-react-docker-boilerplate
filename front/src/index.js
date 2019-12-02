import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './assets/scss/custom.scss';

import * as serviceWorker from './serviceWorker';
import Home from './views/Home.js';
import About from './views/About.js';
import Signup from './views/Signup.js';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Profile from './views/Profile.js';
import Auth from './views/Auth.js';

const history = createBrowserHistory({})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Auth>
            <Switch>
              <Route exact path="/app" component={Dashboard} />
              <Route exact path="/app/profile" component={Profile} />
            </Switch>
          </Auth>
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// uiinregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
