import React from "react";
import { Container } from "react-bootstrap";
import Client1 from "../assets/image/client-ccinc.png";
import Client2 from "../assets/image/client-mimako.png";

const Client = () => {
  return (
    <Container className="py-5">
      <div className="d-flex align-items-center flex-column">
        <div className="button-name">
          <span>MY CLIENT</span>
        </div>
        <div className="mt-2">
          <span className="fs-2 fw-bolder">Work for All these Client</span>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center py-3">
        <a href="https://creativecolors-inc.com/" target="_blank">
          <img
            src={Client1}
            alt="creative-colors.inc"
            width={105}
            className="client-image"
          />
        </a>
        <a href="https://mimako.creativecolors-inc.com/" target="_blank">
          <img
            src={Client2}
            alt="mimako"
            width={155}
            className="client-image"
          />
        </a>
      </div>
    </Container>
  );
};

export default Client;
