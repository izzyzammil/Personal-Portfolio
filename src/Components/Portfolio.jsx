import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

const Portfolio = () => {
  const [key, setKey] = useState("website");

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
      {/* <div className="d-flex align-items-center flex-column">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          variant="pills"
        >
          <Tab eventKey="website" title="Website">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste
              assumenda odit possimus sequi consequuntur deleniti mollitia.
              Obcaecati similique ullam, magni provident distinctio quae error
              autem consequuntur at repudiandae dolore?
            </div>
          </Tab>
          <Tab eventKey="mobile" title="Mobile Apps">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste
              assumenda odit possimus sequi consequuntur deleniti mollitia.
              Obcaecati similique ullam, magni provident distinctio quae error
              autem consequuntur at repudiandae dolore?
            </div>
          </Tab>
          <Tab eventKey="dekstop" title="Dekstop">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste
              assumenda odit possimus sequi consequuntur deleniti mollitia.
              Obcaecati similique ullam, magni provident distinctio quae error
              autem consequuntur at repudiandae dolore?
            </div>
          </Tab>
        </Tabs>
      </div> */}

      <div className="d-flex align-items-center flex-column">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sunt,
            at impedit eius quae, saepe sequi cumque expedita aut corrupti ut
            earum asperiores dolorem mollitia est, in ipsam dolorum assumenda
            molestias rerum odit enim? Doloribus rem, reprehenderit quibusdam
            nulla, delectus nisi repellat hic architecto quia quasi nihil, enim
            impedit aspernatur?
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            2
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            3
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
