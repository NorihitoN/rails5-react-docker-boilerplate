import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

function AppLoading() {
  return (
    <div className="loading-page">
      <Spinner animation="border" variant="danger" />
    </div>
  );
}

export default WrappedComponent => {
    class WrapperLoading extends Component {
        constructor(props){
            super(props);
            this.state = { loadTimer: true}
        }

        componentDidMount(){
                this.setTimer();
        }

        clearTimer = () => clearTimeout(this.timeout);
        timer = () => this.setState({ loadTimer: false }, () => this.clearTimer());
        setTimer = () => (this.timeout = setTimeout(this.timer, 3000));


        render() {
            return (
                this.state.loadTimer ?
                <AppLoading />
                :
                <WrappedComponent { ...this.prpos} />
            )
        }
    }

    const mapStateToProps = state => ({
      isLoading: state.auth.currentUser.isLoading,
      isSignedIn: state.auth.currentUser.isSignedIn,
    })

    return connect(mapStateToProps)(WrapperLoading);
};