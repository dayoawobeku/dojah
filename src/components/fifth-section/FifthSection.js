import React from "react";
import "./FifthSection.css";
import TextArrowLinks from "../TextArrowLinks";

function FifthSection() {
  return (
    <section className="fifth-section">
      <div className="fifth-section-text">
        <h4 className="text-extrabold-light fourth-section--heading">
          Go through the API Documentation to properly understand what Doja is,
          you can then schedule a demo call.
        </h4>
        <TextArrowLinks
          className="fifth-section--btn text-arrow-btns"
          src="https://raw.githubusercontent.com/awobekuD/dojah/37131e9c9a51f7c9ad634cf6deb0d87cd7b72490/src/arrow%20light%20blue.svg"
          text="Visit our API Documentation"
        />
      </div>
      <div>
        <img
          src="https://github.com/awobekuD/dojah/blob/working/src/assets/fifth%20section%20image.png?raw=true"
          alt="fifth section prototype"
          className="fifth-section--image"
        />
      </div>
    </section>
  );
}

export default FifthSection;
