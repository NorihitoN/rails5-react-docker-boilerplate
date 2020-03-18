import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Tabs, Tab, Button } from 'react-bootstrap';
import { signOutUser } from '../actions/auth';
import Sidebar from "../components/Sidebar.js";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    this.props.signOutUser();
  }

  render() {
    return(
      <div className="lifemapAppView">
        <Sidebar/>
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">プロフィール設定</h1>
          </div>
          <Container>
            <Tabs defaultActiveKey="account" id="tab-example">
              <Tab eventKey="account" title="Account">
                <Button variant="primary" onClick={this.handleSignout}>
                  Log Out
                </Button>
              </Tab>
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser()),
})

export default connect(null, mapDispatchToProps)(Profile);