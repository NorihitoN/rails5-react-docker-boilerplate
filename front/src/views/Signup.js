import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { registerUser } from '../actions/auth';
import Header from "../components/Header.js";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignup() {
    this.props.registerUser(this.state);
  }

  render() {
    return (
      <div className="signup-page">
        <Header />
        <Container className="signup-page-topmargin">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>Sign up</h2>
              <Card>
                <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      placeholder="your name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      placeholder="example@mail.com"/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      placeholder="password" />
                  </Form.Group>
                  <Button variant="primary" onClick={this.handleSignup}>
                    Signup
                  </Button>
                </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authHeaders: state.authHeaders
})

const mapDispatchToProps = dispatch => ({
  registerUser: (data) => dispatch(registerUser(data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Signup);