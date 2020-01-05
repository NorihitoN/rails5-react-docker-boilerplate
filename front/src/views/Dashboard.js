import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { saveFamily, getFamily } from '../actions/family.js';
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
    // const family = { id: 1, familyName: "中田"}
    const { family } = this.props;
    const members = [
      // { id: 1, name: "のり", birthday: "1985-06-26", memberColor: "#4186e0"},
      // { id: 2, name: "梨紗", birthday: "1988-09-23", memberColor: "#ea4d9e"},
      // { id: 3, name: "蒼空", birthday: "2017-04-06", memberColor: "#4186e0"},
      // { id: 4, name: "碧", birthday: "2019-05-01", memberColor: "#ea4d9e"},
    ]

    const familyMembers = members.map((member) => 
      <MemberCard member={member} />
    )

    return (
      <div className="lifemapAppView">
        <Sidebar/>
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">ホーム</h1>
          </div>
          <Container>
            { (family.family === null)? (
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
            ) : (
              <div className="familySection">
                <h2 className="sectionTitle">{family.family.familyname}家のメンバー</h2>
                <hr/>
                <Row>
                  {familyMembers}
                  {addMemberCard}
                </Row>
              </div>
            ) }
          </Container>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  family: state.family,
})

const mapDispatchToProps = dispatch => ({
  saveFamily: (data) => dispatch(saveFamily(data)),
  getFamily: () => dispatch(getFamily()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);