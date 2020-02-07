import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import Home from "./views/Home";
import About from "./views/About";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Auth from "./views/Auth";
import Member from "./views/Member";
import MemberForm from "./views/MemberForm";
import Budget from "./views/Budget";
import EventForm from "./views/EventForm";
import Cashflow from "./views/Cashflow";
// import WrapperLoading from './components/WrapperLoading.js';

const history = createBrowserHistory({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Auth>
              <Switch>
                <Route exact path="/app" component={Dashboard} />
                <Route exact path="/app/members" component={Member} />
                <Route exact path="/app/members/new" component={MemberForm} />
                <Route exact path="/app/budget" component={Budget} />
                <Route exact path="/app/event/new" component={EventForm} />
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
