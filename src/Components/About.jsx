import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ImageAbout from "../assets/image/Zammil-about3.png";
import Resume from "./my-resume.pdf";

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
          <div className="button-name">
            <span>WHO I AM</span>
          </div>
          <div className="mt-2">
            <span className="fs-2 fw-bolder">About Me</span>
          </div>
          <div className="mt-3">
            <p className="description">
              Hi! I’m Muzammil from Madura, East Java, Indonesia, and I’m a
              Frontend Developer who has passion for building clean web and
              mobile applications with intuitive functionality. I have more than
              1 year experience in React Native and React JS. I enjoy the
              process of turning ideas into reality using creative solutions.
              I’m enthusiastic about learning new skills, concepts and tools. In
              addition to working on solo projects, I have worked with creative
              teams, which involves communications, and project management.
            </p>
          </div>
          <div className="d-flex mt-4">
            <div className="button c-button me-3">Hire Me</div>
            <div
              className="button c-button dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Resume
            </div>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href={Resume} download>
                  Resume (PDF)
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://youtu.be/4qM7JdELRYg"
                  target={"_blank"}
                >
                  Resume (Animasi)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Resume (Website)
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
