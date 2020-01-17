import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";
import { MemberCard } from '../components/MemberCard.js';

class Member extends Component {

  render() {
    const { family, members } = this.props;
    const familyMembers = members.members.map((member) => 
      <Row key={member.id.toString()}>
        <MemberCard member={member} />
        <Col md={4}>
          <Card className="memberProfile">
            <Card.Body>
              <Card.Title>{member.member_name}</Card.Title>
              <Card.Subtitle>{member.member_relation}</Card.Subtitle>
              <Card.Text>{member.member_birthday} {member.fiscal_age}歳</Card.Text>
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
          { (family.family === null)? (
            <div>
              家族名が設定されていません。
            </div>
          ):(
            <Fragment>
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
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  family: state.family,
  members: state.members,
})

export default connect(mapStateToProps)(Member);