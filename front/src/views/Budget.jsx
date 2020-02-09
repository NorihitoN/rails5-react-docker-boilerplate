import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Tabs,
  Tab,
  Button,
  DropdownButton,
  ButtonGroup,
  Table,
  Dropdown,
  CardDeck,
  Card,
  Row,
  Col
} from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { EventCard } from "../components/EventCard";

class Budget extends Component {
  constructor(props) {
    super(props);
    this.handleToEventForm= this.handleToEventForm.bind(this);
  }

  handleToEventForm() {
    this.props.history.push('/app/event/new');
  }

  render() {
    const { members } = this.props;
    return (
      <div className="lifemapAppView">
        <Sidebar />
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">収支入力</h1>
          </div>
          <Container>
            <Tabs id="tab-example">
              {members.members.map(member => (
                <Tab
                  key={member.id.toString()}
                  eventKey={member.id}
                  title={member.member_name}
                >
                  <div className="income-section">
                    <h2>収入</h2>
                    <div className="income-input-area">
                      <Row>
                        <Col md={2}>
                          <EventCard />
                        </Col>
                        <Col md={2}>
                          <EventCard />
                        </Col>
                        <Col md={2}>
                          <EventCard />
                        </Col>
                        <Col md={2}>
                          <EventCard />
                        </Col>
                        <Col md={2}>
                          <EventCard />
                        </Col>
                      </Row>
                    </div>
                    <h2>支出</h2>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members
});

export default connect(mapStateToProps)(Budget);
