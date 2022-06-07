import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ImageAbout from "../assets/image/Zammil-about2.jpg";

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={5} className="d-flex justify-content-center">
          <Image src={ImageAbout} width={320} roundedCircle />
        </Col>
        <Col lg={7}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          consectetur dolore dolores? Dolores impedit, quaerat nesciunt modi nam
          fugit saepe fugiat assumenda minima mollitia nobis consequatur
          perspiciatis voluptate non veritatis quas nostrum error illo labore
          temporibus harum eos. Quisquam, obcaecati voluptate! Delectus quaerat
          doloremque dolorum nobis aspernatur tempore exercitationem quis.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
