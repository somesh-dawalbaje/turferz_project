import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BASE_ROUTE, REGISTRATION_USER_ROUTE, ABOUT_US_ROUTE, LOGIN_USER_ROUTE, LOGIN_ADMIN_ROUTE, REGISTRATION_ADMIN_ROUTE, CHECK_BOOKING_ROUTE, MAP_ROUTE } from "../Constants/AppRoutes";

export function NavigationBar() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <LinkContainer to={BASE_ROUTE}>
                    <Navbar.Brand>
                        <img
                            src="../icons8-artificial-turf-50.png"
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{ marginRight: '10px' }}
                        />
                        Turferz
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={BASE_ROUTE}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={ABOUT_US_ROUTE}>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={CHECK_BOOKING_ROUTE}>
                            <Nav.Link>Check Bookings</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Login" id="basic-nav-dropdown">
                            <LinkContainer to={LOGIN_USER_ROUTE}>
                                <NavDropdown.Item>User</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to={LOGIN_ADMIN_ROUTE}>
                                <NavDropdown.Item>Admin</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <LinkContainer to={REGISTRATION_USER_ROUTE}>
                            <Nav.Link>Register Now</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={MAP_ROUTE}>
                            <Nav.Link>Location</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
