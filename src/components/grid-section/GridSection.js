import React from "react";
import "./GridSection.css";
import TextArrowLinks from "../TextArrowLinks";
import GridComponents from "./GridComponents";

function GridSection() {
  return (
    <div className="flex-container">
      <div className="flex">
        <div className="left-col">
          <div className="grid-section--dark-heading">
            <h4 className="text-extrabold-dark">Read our case studies</h4>
            <p className="text-light-body">
              Find out about exciting products that have been built and that you
              can build with Dojah!
            </p>
            <TextArrowLinks
              className="grid-section--btn grid-section--btn__blue text-arrow-btns"
              src="https://raw.githubusercontent.com/awobekuD/dojah/299abe11c01887b5f283bdd6255d5df34715091f/src/assets/arrow%20blue.svg"
              text="Check out more"
            />
          </div>

          <div className="grid-one grids">
            <GridComponents className="grid-components--heading grid-components--heading-medium " />
          </div>
        </div>

        <div className="right-col">
          <div className="grid-two grids">
            <GridComponents className="grid-components--heading grid-components--heading-large" />
          </div>

          <div className="bottom-cols">
            <div className="grid-three grids">
              <GridComponents className="grid-components--heading grid-components--heading-medium" />
            </div>
            <div className="grid-four grids">
              <GridComponents className="grid-components--heading grid-components--heading-medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
