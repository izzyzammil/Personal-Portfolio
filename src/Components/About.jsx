import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ImageAbout from "../assets/image/Zammil-about3.png";

const About = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col
          lg={5}
          className="d-flex justify-content-center"
          style={{ position: "relative", top: -12 }}
        >
          <Image src={ImageAbout} width={340} />
        </Col>
        <Col lg={7}>
          <div className="about-name">
            <span>WHO I AM</span>
          </div>
          <div className="mt-2">
            <span className="fs-2 fw-bold">About Me</span>
          </div>
          <div className="mt-3">
            <p className="about-description">
              Hi! I’m Muzammil, and I’m a designer & developer who has passion
              for building clean web applications with intuitive functionality.
              I enjoy the process of turning ideas into reality using creative
              solutions. I’m always curious about learning new skills, tools,
              and concepts. In addition to working on various solo full stack
              projects, I have worked with creative teams, which involves daily
              stand-ups and communications, source control, and project
              management.
            </p>
          </div>
          <div className="button about-button mt-4">Hire Me</div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
