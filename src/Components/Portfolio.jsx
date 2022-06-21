import React, { useState } from "react";
import { Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { dataCard } from "./DataCard";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (img, title, desc, id) => {
    let tempData = [img, title, desc, id];

    setTempdata(() => [...tempData]);

    return setShow(true);
  };

  const ModalImage = ({ title, desc, id }) => {
    const data = dataCard.filter((item) => item.id == id);
    return (
      <Modal show={show} onHide={handleClose} scrollable size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {data.map((item) =>
              item.imageModal.map((item, index) => (
                <Col sm={6} lg={4} key={index}>
                  <Image src={item} className="w-100 port-image" />
                </Col>
              ))
            )}
          </Row>
          <p>{desc}</p>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <Container className="py-5">
      <div className="d-flex align-items-center flex-column">
        <div className="button-name">
          <span>MY PORTFOLIO</span>
        </div>
        <div className="mt-2">
          <span className="fs-2 fw-bolder">Featured Projects</span>
        </div>
      </div>

      <div className="d-flex align-items-center flex-column mt-4">
        <select
          className="form-select d-md-none mb-4"
          aria-label="Default select example"
        >
          <option defaultValue="Open this select menu">
            Open this select menu
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <ul
          className="nav nav-pills mb-4 d-none d-md-flex"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-all-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all"
              type="button"
              role="tab"
              aria-controls="pills-all"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-website-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-website"
              type="button"
              role="tab"
              aria-controls="pills-website"
              aria-selected="false"
            >
              Website
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-mobile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mobile"
              type="button"
              role="tab"
              aria-controls="pills-mobile"
              aria-selected="false"
            >
              Mobile Apps
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-dekstop-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-dekstop"
              type="button"
              role="tab"
              aria-controls="pills-dekstop"
              aria-selected="false"
            >
              Dekstop
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active "
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <Row xs={1} md={2} lg={3} className="g-4">
              {dataCard.map((item, idx) => (
                <Col key={idx}>
                  <Card
                    className="single-content"
                    onClick={() =>
                      handleShow(item.image, item.title, item.desc, item.id)
                    }
                  >
                    <Card.Img src={item.image} className="image-content" />
                    <Card.Body className="text-content">
                      <Card.Title className="fw-bold">{item.title}</Card.Title>
                      <Card.Text>{item.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <ModalImage
              title={tempdata[1]}
              desc={tempdata[2]}
              id={tempdata[3]}
            />
          </div>
          <div
            className="tab-pane fade"
            id="pills-website"
            role="tabpanel"
            aria-labelledby="pills-website-tab"
          >
            <Row xs={1} md={2} lg={3} className="g-4">
              {dataCard
                .filter((data) => data.category == "website")
                .map((item, idx) => (
                  <Col key={idx}>
                    <Card onClick={handleShow}>
                      <Card.Img variant="top" src={item.image} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
          <div
            className="tab-pane fade"
            id="pills-mobile"
            role="tabpanel"
            aria-labelledby="pills-mobile-tab"
          >
            <Row xs={1} md={2} lg={3} className="g-4">
              {dataCard
                .filter((data) => data.category == "mobile")
                .map((item, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
          <div
            className="tab-pane fade"
            id="pills-dekstop"
            role="tabpanel"
            aria-labelledby="pills-dekstop-tab"
          >
            <Row xs={1} md={2} lg={3} className="g-4">
              {dataCard
                .filter((data) => data.category == "dekstop")
                .map((item, idx) => (
                  <Col key={idx}>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
