import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({isSignedIn, component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => 
            isSignedIn ? (<Component {...props} />) : (<Redirect to='/login' />)
        }
        />
    );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.currentUser.isSignedIn,
  }
}

export default connect(mapStateToProps)(Auth);