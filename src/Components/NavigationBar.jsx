import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../style/style.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg shadow-sm rounded">
      <Container>
        <Navbar.Brand className="nav-text fw-bold fs-3" href="#home">
          Zammil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-link">
            <Nav.Link className="nav-text" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-text" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-text" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-text" href="#portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-text" href="#client">
              Client
            </Nav.Link>
            <Nav.Link className="nav-text" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="button">Hire Me</div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
