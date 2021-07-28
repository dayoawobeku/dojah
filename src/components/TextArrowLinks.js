import React from "react";

function TextArrowLinks({ src, text, className }) {
  return (
    <div>
      <a href="#" className={className}>
        <p>{text}</p>
        <img src={src} alt="arrow" />
      </a>
    </div>
  );
}

export default TextArrowLinks;
