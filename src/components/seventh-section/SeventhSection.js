import React from "react";
import "./SeventhSection.css";
import FourthSeventhSectionsBtn from "../FourthSeventhSectionsBtn";

function SeventhSection() {
  return (
    <section className="seventh-section">
      <div className="seventh-section-text">
        <h4 className="text-extrabold-light fourth-section--heading seventh-section--heading">
          You want to build? We are ready to build with you, we are just an api
          call away.
        </h4>

        <FourthSeventhSectionsBtn />
      </div>
    </section>
  );
}

export default SeventhSection;
