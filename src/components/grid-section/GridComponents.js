import React from "react";
import TextArrowLinks from "../TextArrowLinks";

function GridComponents({ className }) {
  return (
    <div>
      <div>
        <h5 className={className}>
          {" "}
          Authorizing requests and identifying your application
        </h5>
        <TextArrowLinks
          className="grid-section--btn grid-section--btn__white text-arrow-btns"
          src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/arrow.svg"
          text="Continue reading"
        />
      </div>
    </div>
  );
}

export default GridComponents;
