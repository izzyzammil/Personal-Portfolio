import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col>
          <div className="button-name">
            <span>MY CONTACT</span>
          </div>
          <div className="mt-2">
            <span className="fs-2 fw-bolder">Get In Touch</span>
          </div>
          <div className="mt-3">
            <p className="description">
              We’re very approachable and would love to speak to you. Feel free
              to call, send us an email, Tweet us or simply complete the enquiry
              form.
            </p>
          </div>
        </Col>

        <Col>
          <div className="me-lg-5 ms-lg-5">
            <form className="c-form">
              {/* <label htmlFor="name" className="form-label">
                Name
              </label> */}
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="contact-user"
              />
              {/* <label htmlFor="email" className="form-label">
                Email
              </label> */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter a valid email address"
                className="contact-user"
              />
              {/* <label htmlFor="message" className="form-label">
                Message
              </label> */}
              <textarea
                name="message"
                id="message"
                rows={3}
                placeholder="Enter your message"
                className="contact-user"
              />
              <input
                type="submit"
                value={"Send Message"}
                className="button c-button mt-2"
              />
            </form>
            {/* <input
                type="submit"
                value="Send Message"
                className="button button c-button mt-4"
              /> */}
            {/* <span>{done && "Thanks fot Contact Me"}</span> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
