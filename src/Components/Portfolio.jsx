import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { dataCard } from "./DataCard";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [tempdata, setTempdata] = useState([]);
  const [option, setOption] = useState("All");
  const [all, setAll] = useState(false);
  const [website, setWebsite] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [desktop, setDekstop] = useState(false);

  useEffect(() => {
    option === "All" ? setAll(true) : setAll(false);
    option === "website" ? setWebsite(true) : setWebsite(false);
    option === "mobile" ? setMobile(true) : setMobile(false);
    option === "dekstop" ? setDekstop(true) : setDekstop(false);
  }, [option]);

  const onSelectOption = (e) => {
    setOption(e.target.value);
  };

  const handleClose = () => setShow(false);
  const handleShow = (img, title, desc, id) => {
    let tempData = [img, title, desc, id];

    setTempdata(() => [...tempData]);

    return setShow(true);
  };

  const PortfolioCard = ({ category }) => {
    return (
      <Row xs={1} md={2} lg={3} className="g-4">
        {dataCard
          .filter((data) => data.category == category)
          .map((item, idx) => (
            <Col key={idx}>
              <Card
                className="single-content"
                onClick={() =>
                  handleShow(item.image, item.title, item.desc, item.id)
                }
              >
                <Card.Img src={item.image} className="image-content" />
                <Card.Body className="text-content">
                  <Card.Title style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: 14 }}>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    );
  };

  const All = () => {
    return (
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
                <Card.Title style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.title}
                </Card.Title>
                <Card.Text style={{ fontSize: 14 }}>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
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
    <Container className="py-5" id="porfolio">
      <div className="d-flex align-items-center flex-column">
        <div className="button-name">
          <span>MY PORTFOLIO</span>
        </div>
        <div className="mt-2">
          <h2 className="fs-2 fw-bolder text-center mt-2">Featured Projects</h2>
        </div>
      </div>

      <div className="d-flex align-items-center flex-column mt-4">
        <select
          className="form-select d-md-none mb-4"
          aria-label="Default select example"
          value={option}
          onChange={onSelectOption}
        >
          <option value="All">All</option>
          <option value="website">Website</option>
          <option value="mobile">Mobile Apps</option>
          <option value="dekstop">Dekstop</option>
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

        <div className="d-md-none">
          {all && <All />}
          {website && <PortfolioCard category="website" />}
          {mobile && <PortfolioCard category="mobile" />}
          {desktop && <PortfolioCard category="dekstop" />}
        </div>

        <div className="tab-content d-none d-md-flex" id="pills-tabContent">
          <div
            className="tab-pane fade show active "
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-all-tab"
          >
            <All />
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
            <PortfolioCard category="website" />
          </div>

          <div
            className="tab-pane fade"
            id="pills-mobile"
            role="tabpanel"
            aria-labelledby="pills-mobile-tab"
          >
            <PortfolioCard category="mobile" />
          </div>

          <div
            className="tab-pane fade"
            id="pills-dekstop"
            role="tabpanel"
            aria-labelledby="pills-dekstop-tab"
          >
            <PortfolioCard category="dekstop" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
