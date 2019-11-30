import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
    render() {
        let isLoggedIn = false;

        return (
            <Navbar className="navbar-white navbar-border" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Lifeplan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <IndexLinkContainer to="/" className="mr-2">
                            <Nav.Link>Home</Nav.Link>
                        </IndexLinkContainer>
                        <LinkContainer to="/about" className="mr-2">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        {isLoggedIn === false && 
                            <LinkContainer to="/login" className="mr-2">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        }
                        {isLoggedIn === false && 
                            <LinkContainer to="/signup" className="mr-2">
                                <Nav.Link>Sign up</Nav.Link>
                            </LinkContainer>
                        }
                        {isLoggedIn === false &&
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <NavDropdown.Item>About</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/logout">
                                    <NavDropdown.Item>Logout</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;