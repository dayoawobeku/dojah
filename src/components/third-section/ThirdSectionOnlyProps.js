import React from "react";
import "./ThirdSection.css";

function ThirdSectionOnlyProps({ heading, body }) {
  return (
    <div className="third-section-props--container">
      <h4 className="third-section-props--heading">{heading}</h4>
      <p className="text-light-body">{body}</p>
    </div>
  );
}

export default ThirdSectionOnlyProps;
