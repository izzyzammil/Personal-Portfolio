import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiFigma,
  SiWordpress,
  SiGithub,
  SiAdobephotoshop,
  SiBlender,
} from "react-icons/si";

const Skills = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col>
          <div className="button-name">
            <span>MY SKILLS</span>
          </div>
          <div className="mt-2">
            <span className="fs-2 fw-bolder">
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
              <SiHtml5 size={48} color="white" />
            </div>

            <div className="skill-icon">
              <SiCss3 size={48} color="white" />
            </div>

            <div className="skill-icon">
              <SiJavascript size={48} color="white" />
            </div>

            <div className="skill-icon">
              <SiBootstrap size={48} color="white" />
            </div>

            <div className="skill-icon">
              <SiReact size={48} color="white" />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <div className="skill-icon2">
              <SiFigma size={48} color="white" />
            </div>

            <div className="skill-icon2">
              <SiWordpress size={48} color="white" />
            </div>

            <div className="skill-icon2">
              <SiGithub size={48} color="white" />
            </div>

            <div className="skill-icon2">
              <SiAdobephotoshop size={49} color="white" />
            </div>

            <div className="skill-icon2">
              <SiBlender size={48} color="white" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
