import React from "react";
import { Container, Image } from "react-bootstrap";
import ImageHero from "../assets/image/Muzammil.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Hero = () => {
  return (
    <Container fluid className="hero-bg">
      <div className="py-5 d-flex flex-column align-items-center">
        <Image width={210} src={ImageHero} className="h-image" />
        <div className="mt-4">
          <h2 className="fw-bolder text-center">Muzammil</h2>
          <h5 className="mt-3">
            Front End Web and Mobile, Wordpress Developer
          </h5>
        </div>
        <div className="d-flex justify-content-center">
          <div className="hero-medsos">
            <Github size={38} color="var(--black)" />
          </div>
          <div className="hero-medsos">
            <LinkedIn size={38} color="var(--black)" />
          </div>
          <div className="hero-medsos">
            <Instagram size={38} color="var(--black)" />
          </div>
          <div className="hero-medsos">
            <Whatsapp size={38} color="var(--black)" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
