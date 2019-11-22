import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import { signInUser } from '../actions/auth';
import Header from "../components/Header.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.props.signInUser(this.state);
  }

  render() {
    return (
      <div className="login-page">
        <Header />
        <Container className="login-page-topmargin">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>Log in</h2>
              <Card>
                <Card.Body>
                <Form>
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
                  <Button variant="primary" onClick={this.handleLogin}>
                    Login
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
  signInUser: (data) => dispatch(signInUser(data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Login);