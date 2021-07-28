import React from "react";
import "./ThirdSection.css";
import SectionsComponentProps from "../sections-component-props/SectionsComponentProps";
import ThirdSectionOnlyProps from "./ThirdSectionOnlyProps";
import ArrowButton from "../arrow-button/ArrowButton";

function ThirdSection() {
  return (
    <div className="third-section">
      <SectionsComponentProps
        image="https://github.com/awobekuD/dojah/blob/working/src/assets/third%20section%20image.png?raw=true"
        className="third-section--image"
      />

      <div className="sections-text third-sections-text">
        <SectionsComponentProps
          heading="Financial Identity"
          body="One major source of identification and verification for both individuals and businesses is the bank identity. With our customisable widget, you can identify the customers with the following:"
        />
        <div className="section-lis-container">
          <ThirdSectionOnlyProps
            heading="Account information"
            body="You can retrieve the account information to financially identify a customer. This includes the name, account balance, account status (active or inactive), account number, type of account (savings or current)."
          />
          <ThirdSectionOnlyProps
            heading="Account transactions"
            body="Spending and income patterns can be gotten from this to identify and understand how your customers spend and earn."
          />
        </div>
        <ArrowButton text="Watch Demo" />
        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/third%20section%20art.svg"
          className="third-section-art"
          alt="third-section-art"
        />{" "}
      </div>
    </div>
  );
}

export default ThirdSection;
