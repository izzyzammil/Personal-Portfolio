import React from "react";
import { Container, Image } from "react-bootstrap";
import ImageHero from "../assets/image/Muzammil.png";
import Abstract from "../assets/image/abstract.png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Hero = () => {
  return (
    <Container fluid className="hero-bg">
      <div>
        <Image
          src={Abstract}
          // className="abstract-image1"
          width={360}
          style={{
            position: "absolute",
            left: 50,
            top: 320,
            opacity: 0.5,
            zIndex: 1,
          }}
        />

        <Image
          src={Abstract}
          // className="abstract-image2"
          width={360}
          style={{ position: "absolute", right: 30, opacity: 0.5, zIndex: 1 }}
        />
      </div>

      <div className="py-5 d-flex flex-column align-items-center">
        <Image width={210} src={ImageHero} className="h-image" />
        <div className="mt-4">
          <h2 className="fw-bolder text-center">Muzammil</h2>
          <h6 className="mt-3 text-center">
            Frontend Web, Mobile, and Wordpress Developer
          </h6>
        </div>
        <div className="d-flex justify-content-center">
          <div className="hero-medsos">
            <a href="https://github.com/izzyzammil" target={"_blank"}>
              <Github size={38} color="var(--black)" />
            </a>
          </div>
          <div className="hero-medsos">
            <a
              href="https://www.linkedin.com/in/mu-zammil-b43712242/"
              target={"_blank"}
            >
              <LinkedIn size={38} color="var(--black)" />
            </a>
          </div>
          <div className="hero-medsos">
            <a href="https://www.instagram.com/izzyzammil/" target={"_blank"}>
              <Instagram size={38} color="var(--black)" />
            </a>
          </div>
          <div className="hero-medsos">
            <a href="https://wa.me/6285964076694" target={"_blank"}>
              <Whatsapp size={38} color="var(--black)" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
