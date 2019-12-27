import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

  const members = [
    { id: 1, name: "のり", birthday: "1985-06-26", memberColor: "blue"},
    { id: 2, name: "梨紗", birthday: "1988-09-23", memberColor: "red"},
    { id: 3, name: "蒼空", birthday: "2017-04-06", memberColor: "blue"},
    { id: 4, name: "碧", birthday: "2019-05-01", memberColor: "red"},
  ]

  const familyMembers = members.map((member) => 
    <Col md={2}>
      <Card className="memberCard">
        <div className="memberTile">
          <div className="memberBox">
            <Card.Link className="stretched-link" href="#">
              <FontAwesomeIcon icon={faUser} className="fa-lg"/>
            </Card.Link>
          </div>
        </div>
        <p>{member.name}</p>
      </Card>
    </Col>
  )

  const addMemberCard = 
    <Col md={2}>
      <Card className="memberCard">
        <div className="memberTile">
          <div className="addMemberBox">
            <Card.Link className="stretched-link" href="#">
              <FontAwesomeIcon icon={faPlus} className="fa-lg"/>
            </Card.Link>
          </div>
        </div>
        <p>メンバーを追加</p>
      </Card>
    </Col>

  return (
    <div className="lifemapAppView">
      <Sidebar/>
      <div className="mainPage">
        <div className="topBar">
          <h1 className="pageTitle">ホーム</h1>
        </div>
        <Container>
          <div className="familySection">
            <h2 className="sectionTitle">メンバー</h2>
            <hr/>
            <Row>
              {familyMembers}
              {addMemberCard}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Dashboard;