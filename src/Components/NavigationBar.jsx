import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/style.css";
import { Link } from "react-scroll";

const NavigationBar = () => {
  return (
    <Navbar expand="md shadow-sm rounded" sticky="top" className="bg-white">
      <Container>
        <Link to="home" offset={-100}>
          <Navbar.Brand className="brand-name" href="#home">
            Izzy Zammil
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-link">
            <Nav.Link className="nav-text">
              <Link to="home" activeClass="active" offset={-100}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link to="about" offset={-30}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link to="skills" offset={-70}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link to="portfolio" offset={-70}>
                Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link to="client" offset={-70}>
                Client
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-text">
              <Link to="contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="button d-none d-md-flex">
          <Link to="contact">Hire Me</Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
