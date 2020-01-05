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
import Member from './views/Member.js';
import MemberForm from './views/MemberForm.js'
import Budget from './views/Budget.js';
import Cashflow from './views/Cashflow.js';
// import WrapperLoading from './components/WrapperLoading.js';

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
                            <Route exact path="/app" component={Dashboard} />
                            <Route exact path="/app/members" component={Member} />
                            <Route exact path="/app/members/new" component={MemberForm} />
                            <Route exact path="/app/budget" component={Budget} />
                            <Route exact path="/app/cashflow" component={Cashflow} />
                            <Route exact path="/app/profile" component={Profile} />
                        </Switch>
                    </Auth>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;