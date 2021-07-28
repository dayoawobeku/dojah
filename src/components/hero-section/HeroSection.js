import React from "react";
import "./HeroSection.css";
import Button from "../button/Button";

function HeroSection() {
  return (
    <main className="flex-display-col hero-section">
      <div className="flex-display-col hero-section--text">
        <h1 className="text-extrabold-dark">
          Onboard users across Africa in seconds{" "}
        </h1>
        <p className="text-light-body">
          Seamlessly identify and verify individuals and businesses via access
          to simple, easy-to-understand APIs
        </p>
      </div>

      <div className="hero-section--actions">
        <a href="#" className="hero-section--actions__primary">
          <Button buttonprop="Get started"></Button>
        </a>
        <a href="#" className="hero-section--actions__secondary">
          <Button buttonprop="Schedule a demo"></Button>
        </a>
      </div>

      <a href="#" className=" hero-section--text__sub-body-text">
        <p>Visit our API Documentation</p>
      </a>

      <img
        src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/hero%20section%20portraits.svg"
        alt="hero-section-portraits"
        className="hero-section--portraits"
      />

      <img
        src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/sub%20hero%20section%20image.svg"
        alt="sub-hero-section-prototype"
        className="sub-hero-section--image"
      />
    </main>
  );
}

export default HeroSection;
