import React from "react";
import "./FourthSection.css";
import FourthSeventhSectionsBtn from "../FourthSeventhSectionsBtn";

function FourthSection() {
  return (
    <section className="fourth-section">
      <div className="fourth-section-text">
        <h4 className="text-extrabold-light fourth-section--heading">
          You want to build? We are ready to build with you, we are just an api
          call away.
        </h4>
        <p className="text-bold-light fourth-section--body">
          Dojah is faster, easier, and you are still in complete control. Sign
          up now and get ₦500 credit.
        </p>
        <FourthSeventhSectionsBtn />
      </div>

      <div>
        <img
          src="https://github.com/awobekuD/dojah/blob/working/src/assets/fourth%20section%20image.png?raw=true"
          alt="fourth section prototype"
          className="fourth-section--image"
        />
      </div>
    </section>
  );
}

export default FourthSection;
