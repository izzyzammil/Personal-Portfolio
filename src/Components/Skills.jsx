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
    <Container className="py-5" id="skills">
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
              I develop responsive web and mobile interface that helps users get
              things done with less effort and time with those technologies.
            </p>
          </div>
        </Col>

        <Col xl={5} lg={6}>
          <div className="d-flex justify-content-lg-end justify-content-sm-center flex-wrap justify-content-center mt-3 mt-lg-0">
            <div className="skill-icon">
              <SiHtml5 size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiCss3 size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiJavascript size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiBootstrap size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiReact size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiFigma size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiWordpress size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiGithub size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiAdobephotoshop size={40} color="white" />
            </div>

            <div className="skill-icon">
              <SiBlender size={40} color="white" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
