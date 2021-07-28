import React from "react";
import "./ArrowButton.css";

function ArrowButton({ text }) {
  return (
    <div>
      <a href="#" className="btn-default arrow-button">
        <p>{text}</p>
        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/arrow.svg"
          alt="arrow"
        />
      </a>
    </div>
  );
}

export default ArrowButton;
