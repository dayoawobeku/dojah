import React from "react";
import "./SectionsComponentProps.css";

function SectionsComponentProps({ image, alt, heading, body, className }) {
  return (
    <>
      <img src={image} alt={alt} className={className} />

      <div>
        <h1 className="text-extrabold-dark section-heading-texts">{heading}</h1>
        <p className="text-light-body">{body}</p>
      </div>
    </>
  );
}

export default SectionsComponentProps;
