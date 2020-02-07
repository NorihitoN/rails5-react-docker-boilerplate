import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
// import { saveMember } from '../actions/member.js';

interface EventProps extends RouteComponentProps<any> {}

interface EventState {
  startValue: string;
  startYear: string;
  endYear: string;
  intervalYear: string;
  interestRate: string;
  eventMemo: string;
  category_id: string;
  subcategory_id: string;
}

class EventForm extends Component<EventProps, EventState> {
  constructor(props: EventProps) {
    super(props);
    this.state = {startValue: '', startYear: '', endYear: '', intervalYear: '',
                  interestRate: '', eventMemo: '', category_id: '', subcategory_id: ''};
  }

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // key of Lookup types
    // https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/release%20notes/TypeScript%202.1.md
    // http://js.studio-kingdom.com/typescript/release_note/typescript_2_1#keyof_and_lookup_types
    const key = e.currentTarget.name;
    this.setState({ [key]: e.currentTarget.value } as Pick<
      EventState,
      keyof EventState
    >);
  };

  handleSave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // save event action here.
    console.log(this.state);
    // this.props.saveEvent(this.state);
    this.handleBack();
  }

  handleBack = (): void => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="lifemapAppView">
        <Sidebar />
        <div className="mainPage">
          <div className="topBar">
            <Button
              variant="light"
              onClick={this.handleBack}
              className="btn-circle"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </div>
          <Container className="memberForm">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h2>イベントの追加</h2>
                <Card>
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="formBasicStartValue">
                        <Form.Label>収入</Form.Label>
                        <Form.Control
                          type="text"
                          name="startValue"
                          value={this.state.startValue}
                          onChange={this.handleInputChange}
                          placeholder="500(万円)"
                        />
                      </Form.Group>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formBasicStartYear">
                          <Form.Label>開始</Form.Label>
                          <Form.Control
                            type="text"
                            name="startYear"
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEndYear">
                          <Form.Label>終了</Form.Label>
                          <Form.Control
                            type="text"
                            name="endYear"
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                          />
                        </Form.Group>
                      </Form.Row>
                    <Button variant="primary" onClick={this.handleSave}>
                      保存
                    </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   saveMember: (data) => dispatch(saveMember(data)),
// })

// export default connect(null, mapDispatchToProps)(MemberForm);
export default EventForm;
