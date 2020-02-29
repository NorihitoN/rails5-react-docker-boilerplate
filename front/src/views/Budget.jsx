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
import { getEvents } from "../actions/event";
import Sidebar from "../components/Sidebar";
import { EventCard } from "../components/EventCard";

class Budget extends Component {
  constructor(props) {
    super(props);
    this.handleToIncomeEventForm = this.handleToIncomeEventForm.bind(this);
    if(this.props.members.members.length){
      this.state = {activeKey: this.props.members.members[0].id};
    } else {
      this.state = {activeKey: null};
    }
  }

  componentDidMount() {
    this.props.getEvents();
  }

  handleToIncomeEventForm() {
    this.props.history.push({pathname: "/app/event/new",
                             state: {memberId: this.state.activeKey, categoryType: "income"}});
  }

  render() {
    const { members, events } = this.props;

    return (
      <div className="lifemapAppView">
        <Sidebar />
        <div className="mainPage">
          <div className="topBar">
            <h1 className="pageTitle">収支入力</h1>
          </div>
          { (!members.members.length)? (
            <div>
              メンバーが設定されていません。
            </div>
          ):(
          <Container>
            <Tabs id="event-tab" activeKey={this.state.activeKey || members.members[0].id} onSelect={key => this.setState({activeKey: key})}>
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
                          <Card
                            className="eventCard"
                            style={{ marginBottom: "15px" }}
                          >
                            <div className="eventBox">
                              <Card.Body>
                                <Button onClick={this.handleToIncomeEventForm}>
                                  追加
                                </Button>
                              </Card.Body>
                            </div>
                          </Card>
                        </Col>
                        {events.events.filter(
                          data => data.member_id === member.id
                        ).length
                          ? events.events
                              .filter(data => data.member_id === member.id)
                              .map((event, i) => (
                                <Col md={2} key={i}>
                                  <EventCard event={event}/>
                                </Col>
                              ))
                          : null}
                      </Row>
                    </div>
                    <h2>支出</h2>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </Container>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  members: state.members,
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Budget);
