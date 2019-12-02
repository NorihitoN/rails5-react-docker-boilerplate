import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Auth = (props) => {
    return (
        props.isSignedIn ? (props.children) : (<Redirect to='/login'/>)
    );
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.currentUser.isSignedIn,
  }
}

export default connect(mapStateToProps)(Auth);