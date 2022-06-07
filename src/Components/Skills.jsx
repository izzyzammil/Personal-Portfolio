import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

import HTML from "@iconscout/react-unicons/icons/uil-html5-alt";
import CSS from "@iconscout/react-unicons/icons/uil-css3-simple";
import JavascriptJS from "@iconscout/react-unicons/icons/uil-java-script";
import Github from "@iconscout/react-unicons/icons/uil-github";
import ReactJS from "@iconscout/react-unicons/icons/uil-react";

const Skills = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col>
          <div className="button-name">
            <span>MY SKILLS</span>
          </div>
          <div className="mt-2">
            <span className="fs-2 fw-bold">
              What My Programming <br /> Skills Included?
            </span>
          </div>
          <div className="mt-3">
            <p className="description">
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
          </div>
          <div className="button c-button mt-4">Hire Me</div>
        </Col>

        <Col>
          <div className="d-flex justify-content-end">
            <div className="skill-icon">
              <HTML size={48} color="white" />
            </div>

            <div className="skill-icon">
              <CSS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <JavascriptJS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <ReactJS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <Github size={48} color="white" />
            </div>
            <div className="skill-icon">
              <JavascriptJS size={48} color="white" />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <div className="skill-icon">
              <HTML size={48} color="white" />
            </div>

            <div className="skill-icon">
              <CSS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <JavascriptJS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <ReactJS size={48} color="white" />
            </div>
            <div className="skill-icon">
              <Github size={48} color="white" />
            </div>
            <div className="skill-icon">
              <JavascriptJS size={48} color="white" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
