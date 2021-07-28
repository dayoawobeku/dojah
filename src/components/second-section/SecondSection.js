import React from "react";
import "./SecondSection.css";
import SectionsComponentProps from "../sections-component-props/SectionsComponentProps";
import SectionLis from "../section-lis/SectionLis";

function SecondSection() {
  return (
    <div className="second-section">
      <SectionsComponentProps
        image="https://github.com/awobekuD/dojah/blob/working/src/assets/second%20section%20image.png?raw=true"
        className="second-section--image"
      />

      <div className="sections-text second-sections-text">
        <SectionsComponentProps
          heading="Know your business"
          body="You can also verify companies’ corporate information and the personal information of those that manage the operations of the company. This can be achieved with the:

        "
        />
        <div className="section-lis-container">
          <SectionLis className="text-light-body" text="Validate BVN" />
          <SectionLis className="text-light-body" text="Lookup CAC" />
          <SectionLis
            className="text-light-body"
            text="Lookup NUBAN of company"
          />
        </div>
        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/second%20section%20art.svg"
          alt="second-section-art"
          className="second-section-art"
        />
      </div>
    </div>
  );
}

export default SecondSection;
