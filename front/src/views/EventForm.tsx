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
    this.state = {
      startValue: "",
      startYear: "35",
      endYear: "",
      intervalYear: "",
      interestRate: "",
      eventMemo: "",
      category_id: "",
      subcategory_id: ""
    };
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

    // For Debug
    console.log(this.state);
  };

  handleSave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    // save event action here.
    console.log(this.state);
    // this.props.saveEvent(this.state);
    this.handleBack();
  };

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
                      <Form.Row>
                        <Form.Group as={Col} controlId="formCategory">
                          <Form.Label>大項目</Form.Label>
                          <Form.Control
                            as="select"
                            name="category_id"
                            value={this.state.category_id}
                            onChange={this.handleInputChange}
                          >
                            <option>給与収入</option>
                            <option>事業収入 </option>
                            <option>不動産収入</option>
                            <option>その他（固定収入）</option>
                            <option>その他（一時収入）</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicSubCategory">
                          <Form.Label>小項目</Form.Label>
                          <Form.Control
                            as="select"
                            name="subcategory_id"
                            value={this.state.subcategory_id}
                            onChange={this.handleInputChange}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formBasicStartValue">
                          <Form.Label>収入</Form.Label>
                          <Form.Control
                            type="text"
                            name="startValue"
                            value={this.state.startValue}
                            onChange={this.handleInputChange}
                            placeholder="500(万円)"
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicInterestRate">
                          <Form.Label>変動率</Form.Label>
                          <Form.Control
                            type="text"
                            name="interestRate"
                            value={this.state.interestRate}
                            onChange={this.handleInputChange}
                            placeholder="1(%)"
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formBasicStartYear">
                          <Form.Label>開始年齢</Form.Label>
                          <Form.Control
                            as="select"
                            name="startYear"
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                          >
                            { [...Array(100)].map((_, i) => <option key={i}>{i}</option>) }
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicEndYear">
                          <Form.Label>終了年齢</Form.Label>
                          <Form.Control
                            as="select"
                            name="endYear"
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                          >
                            { [...Array(100)].map((_, i) => (i > Number(this.state.startYear)) ? <option key={i}>{i}</option> : null ) }
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBasicInterval">
                          <Form.Label>頻度</Form.Label>
                          <Form.Control
                            as="select"
                            name="intervalYear"
                            value={this.state.intervalYear}
                            onChange={this.handleInputChange}
                          >
                            <option>毎年</option>
                            <option>２年毎</option>
                            <option>５年毎</option>
                            <option>１０年毎</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>
                      <Form.Group>
                        <Form.Label>メモ</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="2"
                          name="eventMemo"
                          value={this.state.eventMemo}
                          onChange={this.handleInputChange}
                        />
                      </Form.Group>
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
