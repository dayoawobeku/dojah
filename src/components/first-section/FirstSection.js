import React from "react";
import "./FirstSection.css";
import SectionsComponentProps from "../sections-component-props/SectionsComponentProps";
import SectionLis from "../section-lis/SectionLis";

function FirstSection() {
  return (
    <div className="first-section">
      <SectionsComponentProps
        image="https://github.com/awobekuD/dojah/blob/working/src/assets/first%20section%20image.png?raw=true/"
        className="first-section--image"
      />

      <div className="sections-text first-sections-text">
        <SectionsComponentProps
          heading="Know your customer"
          body="With our various data points and biometric verification techniques, you can identify and verify customers with ease. Some of the data points include:
        "
        />
        <div className="section-lis-container">
          <SectionLis className="text-light-body" text="Validate BVN" />
          <SectionLis
            className="text-light-body"
            text="Lookup NIN
"
          />
          <SectionLis className="text-light-body" text="Lookup VIN" />
          <SectionLis
            className="text-light-body"
            text="Lookup Phone Number
"
          />
          <SectionLis className="text-light-body" text="Lookup NUBAN" />
          <SectionLis className="text-light-body" text="Liveness check" />
          <SectionLis
            className="text-light-body"
            text="Selfie with ID verification"
          />
          <SectionLis className="text-light-body" text="And so on" />
        </div>

        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/first%20section%20art.svg"
          alt="first-section-art"
          className="first-section-art"
        />
      </div>
    </div>
  );
}

export default FirstSection;
