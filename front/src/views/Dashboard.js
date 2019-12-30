import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";
import { MemberCard } from '../components/MemberCard.js';
import { addMemberCard } from '../components/AddMemberCard.js'

function Dashboard() {
  const family = { id: 1, familyName: "中田"}
  // const family = {}
  const members = [
    { id: 1, name: "のり", birthday: "1985-06-26", memberColor: "#4186e0"},
    { id: 2, name: "梨紗", birthday: "1988-09-23", memberColor: "#ea4d9e"},
    { id: 3, name: "蒼空", birthday: "2017-04-06", memberColor: "#4186e0"},
    { id: 4, name: "碧", birthday: "2019-05-01", memberColor: "#ea4d9e"},
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
          { (Object.keys(family).length === 0)? (
            <div className="familyForm">
              <h2 className="sectionTitle">家族・グループ名を登録</h2>
              <Form>
                <Form.Row>
                  <Col md={3}>
                    <Form.Control placeholder="Enter Family or Group" />
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit">
                    保存 
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </div>
          ) : (
            <div className="familySection">
              <h2 className="sectionTitle">{family.familyName}家のメンバー</h2>
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

export default Dashboard;