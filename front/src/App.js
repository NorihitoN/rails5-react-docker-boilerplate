import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import store from './store/configureStore';

import Home from './views/Home.js';
import About from './views/About.js';
import Signup from './views/Signup.js';
import Login from './views/Login.js';
import Dashboard from './views/Dashboard.js';
import Profile from './views/Profile.js';
import Auth from './views/Auth.js';
import WrapperLoading from './components/WrapperLoading.js';

const history = createBrowserHistory({});

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Auth>
                        <Switch>
                            <Route exact path="/app" component={WrapperLoading(Dashboard)} />
                            <Route exact path="/app/profile" component={WrapperLoading(Profile)} />
                        </Switch>
                    </Auth>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;