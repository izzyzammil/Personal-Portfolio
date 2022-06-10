import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

import PortfolioImage1 from "../assets/image/Thumbnail-FoodMarket.jpg";
import PortfolioImage2 from "../assets/image/Thumbnail-Mimako.jpg";
import PortfolioImage3 from "../assets/image/Thumbnail-SiniNonton.jpg";
import PortfolioImage4 from "../assets/image/Thumbnail-Website-Staycation.jpg";
import PortfolioImage5 from "../assets/image/Thumbnail-Staycation.jpg";
import PortfolioImage6 from "../assets/image/Thumbnail-Website-CCINC.jpg";

const Portfolio = () => {
  const dataCard = [
    { id: 1, image: PortfolioImage1, category: "mobile" },
    { id: 2, image: PortfolioImage2, category: "dekstop" },
    { id: 3, image: PortfolioImage3, category: "mobile" },
    { id: 4, image: PortfolioImage4, category: "website" },
    { id: 5, image: PortfolioImage5, category: "mobile" },
    { id: 6, image: PortfolioImage6, category: "website" },
  ];

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
        <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
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
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                  </Card>
                </Col>
              ))}
            </Row>
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
                    <Card>
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
