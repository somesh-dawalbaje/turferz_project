import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
//import { BASE_ROUTE, REGISTRATION_ROUTE, ABOUT_US_ROUTE,LOGIN_ROUTE } from "../constants/AppRoute.js";


export function Footer() {
    return (
     
        <Container>
        <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/home"><CiInstagram /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#"><CiLinkedin /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#"><FaGithub /></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#"><AiOutlineMail /></Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Contact Us</p>
      <Nav className="justify-content-end" activeKey="#">
     
      </Nav>
      </Container>
    )
}