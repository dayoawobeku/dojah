import React from "react";
import "./SectionLis.css";

function SectionLis({ text, className }) {
  return (
    <div className="section-lis--props-div">
      <img
        src="https://raw.githubusercontent.com/awobekuD/dojah/a185ea8555aaf1b3c7009e12109356ab2cc56463/src/assets/bullet%20point%20ellipse.svg"
        alt="bullet point ellipse"
      />
      <p className={className}>{text}</p>
    </div>
  );
}

export default SectionLis;
