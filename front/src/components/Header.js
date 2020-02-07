import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { signOutUser } from "../actions/auth";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.signOutUser();
  }

  render() {
    const { isSignedIn } = this.props;

    return (
      <Navbar className="navbar-white navbar-border" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Lifemap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              {isSignedIn === false && (
                <IndexLinkContainer to="/" className="mr-2">
                  <Nav.Link>Home</Nav.Link>
                </IndexLinkContainer>
              )}
              {isSignedIn === false && (
                <LinkContainer to="/about" className="mr-2">
                  <Nav.Link>About</Nav.Link>
                </LinkContainer>
              )}
              {isSignedIn === false && (
                <LinkContainer to="/login" className="mr-2">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
              {isSignedIn === false && (
                <LinkContainer to="/signup" className="mr-2">
                  <Nav.Link>Sign up</Nav.Link>
                </LinkContainer>
              )}
              {/* {isSignedIn === true &&
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <LinkContainer to="/app">
                                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/app/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/logout">
                                        <NavDropdown.Item onClick={this.handleLogout}>Logout</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.currentUser.isSignedIn
  };
};

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
