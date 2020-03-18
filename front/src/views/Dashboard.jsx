import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { saveFamily, getFamily } from '../actions/family.js';
import { getMembers } from '../actions/member.js';
import { getCategories } from '../actions/category.js';
import { getEvents } from '../actions/event';
import Sidebar from "../components/Sidebar.js";
import { MemberCard } from '../components/MemberCard.js';
import { addMemberCard } from '../components/AddMemberCard.js'

function AppLoading() {
  return (
    <div className="loading-page">
      <Spinner animation="border" variant="danger" />
    </div>
  );
}

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = { familyName: '', isFetching: false};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  // getDerivedStateFromPropsの可能性は？
  // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({isFetching: true});
    if(!this.props.isLoading){
      await this.props.getFamily();
      await this.props.getMembers();
      await this.props.getCategories();
      await this.props.getEvents();
    }
    this.setState({isFetching: false});
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSave(e) {
    e.preventDefault();
    this.props.saveFamily(this.state);
  }

  render() {
    const { family, members } = this.props;
    const familyMembers = members.members.map((member) => 
      <Col xl={2} lg={3} md={4} sm={6} key={member.id.toString()}>
        <MemberCard member={member} />
      </Col>
    )

    return (
      (this.state.isFetching) ? (
          <AppLoading />
        ) : (
      <div className="lifemapAppView">
        <Sidebar/>
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">ホーム</h1>
          </div>
            { (family.family === null)? (
            <Container>
              <div className="familyForm">
                <h2 className="sectionTitle">家族・グループ名を登録</h2>
                <Form>
                  <Form.Row>
                    <Col md={3}>
                      <Form.Control
                        type="text"
                        name="familyName"
                        value={this.state.familyName}
                        onChange={this.handleInputChange}
                        placeholder="Enter Family or Group" />
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit" onClick={e => this.handleSave(e)}>
                      保存 
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </Container>
            ) : (
              <Fragment>
                <Container>
                  <div className="familySection">
                    <h2 className="sectionTitle">{family.family.familyname}家のメンバー</h2>
                    <hr/>
                  </div>
                </Container>
                <div>
                  <Container>
                    <Row>
                      {familyMembers}
                      <Col xl={2} lg={3} md={4} sm={6}>
                        {addMemberCard}
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Fragment>
            ) }
        </div>
      </div>
        )
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.auth.currentUser.isLoading,
  family: state.family,
  members: state.members,
})

const mapDispatchToProps = dispatch => ({
  saveFamily: (data) => dispatch(saveFamily(data)),
  getFamily: () => dispatch(getFamily()),
  getMembers: () => dispatch(getMembers()),
  getCategories: () => dispatch(getCategories()),
  getEvents: () => dispatch(getEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);