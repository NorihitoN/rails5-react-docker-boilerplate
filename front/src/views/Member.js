import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";
import { connect } from 'react-redux';
import { MemberCard } from '../components/MemberCard.js';

class Member extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { family, members } = this.props;
    const familyMembers = members.members.map((member) => 
      <Row>
        <MemberCard key={member.id.toString()} member={member} />
        <Col md={4}>
          <Card className="memberProfile">
            <Card.Body>
              <Card.Title>{member.member_name}</Card.Title>
              <Card.Subtitle>{member.member_relation}</Card.Subtitle>
              <Card.Text>{member.member_birthday} & Age</Card.Text>
            </Card.Body>  
          </Card>
        </Col>
      </Row>
    )
    return (
      <div className="lifemapAppView">
        <Sidebar/>
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">家族のメンバー</h1>
          </div>
          <Container>
            <div className="memberSection">
              <h2 className="sectionTitle">{family.family.familyname}家のプロフィール</h2>
              <hr/>
            </div>
          </Container>
          <div>
            <Container> 
              {familyMembers}
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  family: state.family,
  members: state.members,
})

export default connect(mapStateToProps,null)(Member);