import React, { Component } from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import Sidebar from "../components/Sidebar.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class MemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {memberName: '', memberBirthday: '', memberGender: '', memberRelation: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSave() {
    console.log("Save member");
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="lifemapAppView">
        <Sidebar/>
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
                <h2>メンバーの追加</h2>
                <Card>
                  <Card.Body>
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>名前</Form.Label>
                      <Form.Control
                        type="text"
                        name="memberName"
                        value={this.state.memberName}
                        onChange={this.handleInputChange}
                        placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicBirthday">
                      <Form.Label>生年月日</Form.Label>
                      <Form.Control
                        type="date"
                        name="memberBirthday"
                        value={this.state.memberBirthday}
                        onChange={this.handleInputChange}
                      />
                    </Form.Group>
                    <fieldset>
                      <Form.Group>
                        <Form.Label as="legend">
                          性別
                        </Form.Label>
                        <Col>
                          <Form.Check inline
                            type="radio"
                            label="男性"
                            name="formHorizontalRadios1"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check inline
                            type="radio"
                            label="女性"
                            name="formHorizontalRadios1"
                            id="formHorizontalRadios2"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                    <fieldset>
                      <Form.Group>
                        <Form.Label as="legend">
                         属性 
                        </Form.Label>
                        <Col>
                          <Form.Check inline
                            type="radio"
                            label="本人"
                            name="formHorizontalRadios2"
                            id="formHorizontalRadios21"
                          />
                          <Form.Check inline
                            type="radio"
                            label="配偶者"
                            name="formHorizontalRadios2"
                            id="formHorizontalRadios22"
                          />
                          <Form.Check inline
                            type="radio"
                            label="子供"
                            name="formHorizontalRadios2"
                            id="formHorizontalRadios23"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
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
    )
  }
}

export default MemberForm;