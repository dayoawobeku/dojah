import React from "react";
import "./SubHeroSection.css";

function SubHeroSection() {
  return (
    <>
      <section className="sub-hero-section">
        <div className="sub-hero-section-width">
          <div className="flex-display sub-hero-section--text">
            <h2 className="text-extrabold-light">
              Stay focused on the business, while we handle the little things
            </h2>
          </div>

          <div className="flex-display sub-hero-section--text__body">
            <div className="flex-display sub-hero-section__body-container-one ">
              <img
                src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/great%20customer%20service.svg"
                alt="great customer service"
              />
              <p>Great customer service</p>
            </div>
            <div className="flex-display sub-hero-section__body-container-two ">
              <img
                src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/24%207%20support.svg"
                alt="24/7 support"
              />
              <p> 24/7 Support</p>
            </div>
          </div>

          <div className="flex-display sub-hero-section-favicon-logo">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/dojah%20favicon.svg"
              alt="dojah favicon"
            />
          </div>
        </div>
      </section>

      <div className="partner-companies">
        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/partner%20companies.svg"
          alt="partner companies"
        />
      </div>
    </>
  );
}

export default SubHeroSection;
