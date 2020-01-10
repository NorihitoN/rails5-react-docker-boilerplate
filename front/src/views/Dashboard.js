import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { saveFamily, getFamily } from '../actions/family.js';
import { getMembers } from '../actions/member.js';
import Sidebar from "../components/Sidebar.js";
import { MemberCard } from '../components/MemberCard.js';
import { addMemberCard } from '../components/AddMemberCard.js'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = { familyName: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.getFamily();
    this.props.getMembers();
  };

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
      <MemberCard key={member.id.toString()} member={member} />
    )

    return (
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
                      {addMemberCard}
                    </Row>
                  </Container>
                </div>
              </Fragment>
            ) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  family: state.family,
  members: state.members,
})

const mapDispatchToProps = dispatch => ({
  saveFamily: (data) => dispatch(saveFamily(data)),
  getFamily: () => dispatch(getFamily()),
  getMembers: () => dispatch(getMembers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);