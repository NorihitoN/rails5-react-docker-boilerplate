import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../components/Sidebar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { saveEvent } from '../actions/event.js';

// import * as H from 'history'

// interface EventProps extends RouteComponentProps<{}> {
//   history: H.History;
//   location: H.Location;
// }

// interface EventState {
//   startValue: string;
//   startYear: string;
//   endYear: string;
//   intervalYear: string;
//   interestRate: string;
//   eventMemo: string;
//   categoryId: string;
//   subcategoryId: string;
// }

// class EventForm extends Component<EventProps, EventState> {
//   constructor(props: EventProps) {
//     super(props);
//     this.state = {
//       startValue: "",
//       startYear: "35",
//       endYear: "",
//       intervalYear: "",
//       interestRate: "",
//       eventMemo: "",
//       categoryId: "",
//       subcategoryId: ""
//     };
//     console.log(this.props.location.state.memberId);
//   }
class EventForm extends Component {
  constructor(props) {
    super(props);

    const { categories } = this.props;
    const cat = categories.categories[0];
    const subcat = (categories.categories.length)? cat.subcategories[0] : "";

    this.state = {
      event: {
        startValue: "100",
        startYear: "35",
        endYear: "45",
        intervalYear: "1",
        interestRate: "0.5",
        eventMemo: "",
        categoryId: (cat) ? String(cat.id) : "",
        subcategoryId: (subcat)? String(subcat.id) : "",
      },
      memberId: String(this.props.location.state.memberId),
    };

  }

  // handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   // key of Lookup types
  //   // https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/release%20notes/TypeScript%202.1.md
  //   // http://js.studio-kingdom.com/typescript/release_note/typescript_2_1#keyof_and_lookup_types
  //   const key = e.currentTarget.name;
  //   this.setState({ [key]: e.currentTarget.value } as Pick<
  //     EventState,
  //     keyof EventState
  //   >);

  handleInputChange = e => {
    const key = e.target.name;
    if (key === "categoryId") {
      const { categories } = this.props;
      const cat = categories.categories.filter(category => category.id === Number(e.target.value))[0];
      const subcat = cat.subcategories[0];
      const newSubState = Object.assign({}, this.state.event);
      newSubState.categoryId= String(cat.id); 
      newSubState.subcategoryId = String(subcat.id); 
      this.setState({ event: newSubState}); 
    } else {
      const newEventState = Object.assign({}, this.state.event);
      newEventState[key] = e.target.value;
      this.setState({ event: newEventState });
    }
    console.log(this.state);
  };

  //   // For Debug
  //   console.log(this.state);
  //   // console.log(this.props.location.state.memberId);
  // };

  // handleSave = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //   e.preventDefault();
  //   // save event action here.
  //   console.log(this.state);
  //   // this.props.saveEvent(this.state);
  //   this.handleBack();
  // };
  handleSave = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.saveEvent(this.state);
    this.handleBack();
  };
  // handleBack = (): void => {
  //   this.props.history.goBack();
  // };

  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const { categories } = this.props;
    const filteredCategories = categories.categories.filter(
      category =>
        category.category_type === this.props.location.state.categoryType
    );
    const hasCategory = (filteredCategories.length)? true : false;
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
                            name="categoryId"
                            value={this.state.event.categoryId}
                            onChange={this.handleInputChange}
                          >
                            {filteredCategories.map(category => (
                              <option value={category.id} key={category.id}>
                                {category.category_name}
                              </option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formSubCategory">
                          <Form.Label>小項目</Form.Label>
                          <Form.Control
                            as="select"
                            name="subcategoryId"
                            value={this.state.event.subcategoryId}
                            onChange={this.handleInputChange}
                          >
                            {(hasCategory)? filteredCategories
                              .filter(
                                category =>
                                  category.id === Number(this.state.event.categoryId)
                              )[0]
                              .subcategories.map(subcategory => (
                                <option value={subcategory.id} key={subcategory.id}>
                                  {subcategory.subcategory_name}
                                </option>
                              ))
                            :
                            <option></option>}
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formStartValue">
                          <Form.Label>収入</Form.Label>
                          <Form.Control
                            type="text"
                            name="startValue"
                            value={this.state.event.startValue}
                            onChange={this.handleInputChange}
                            placeholder="500(万円)"
                          />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formInterestRate">
                          <Form.Label>変動率</Form.Label>
                          <Form.Control
                            type="text"
                            name="interestRate"
                            value={this.state.event.interestRate}
                            onChange={this.handleInputChange}
                            placeholder="1(%)"
                          />
                        </Form.Group>
                      </Form.Row>
                      <Form.Row>
                        <Form.Group as={Col} controlId="formStartYear">
                          <Form.Label>開始年齢</Form.Label>
                          <Form.Control
                            as="select"
                            name="startYear"
                            value={this.state.event.startYear}
                            onChange={this.handleInputChange}
                          >
                            {[...Array(100)].map((_, i) => (
                              <option key={i}>{i}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEndYear">
                          <Form.Label>終了年齢</Form.Label>
                          <Form.Control
                            as="select"
                            name="endYear"
                            value={this.state.event.endYear}
                            onChange={this.handleInputChange}
                          >
                            {[...Array(100)].map((_, i) =>
                              i >= Number(this.state.event.startYear) ? (
                                <option key={i}>{i}</option>
                              ) : null
                            )}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formInterval">
                          <Form.Label>頻度</Form.Label>
                          <Form.Control
                            as="select"
                            name="intervalYear"
                            value={this.state.event.intervalYear}
                            onChange={this.handleInputChange}
                          >
                            <option value="1">毎年</option>
                            <option value="2">２年毎</option>
                            <option value="5">５年毎</option>
                            <option value="10">１０年毎</option>
                          </Form.Control>
                        </Form.Group>
                      </Form.Row>
                      <Form.Group>
                        <Form.Label>メモ</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="2"
                          name="eventMemo"
                          value={this.state.event.eventMemo}
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

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  saveEvent: (data) => dispatch(saveEvent(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);