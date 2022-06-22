import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o74jbsc",
        "template_cdxqeyx",
        form.current,
        "fJcStwEsTw62oe2T5"
      )
      .then(
        (result) => {
          setDone(true);
          setEmail("");
          setName("");
          setMessage("");
          setTimeout(() => {
            setDone(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="py-5" id="contact">
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

        <Col xs={12} md={6}>
          <div className="me-xl-5 ms-xl-5">
            <form className="c-form" ref={form} onSubmit={sendEmail}>
              {done && <span className="c-success">Thank for Contact me</span>}
              <input
                type="text"
                name="user-name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="contact-user"
              />
              <input
                type="email"
                name="user-email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter a valid email address"
                className="contact-user"
              />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Enter your message"
                className="contact-user"
              />
              <input
                type="submit"
                value={"Send Message"}
                className="button c-button mt-2"
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
