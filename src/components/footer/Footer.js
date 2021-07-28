import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--links-container">
        <div className="footer--links">
          <h5 className="footer--headings grid-components--heading-medium">
            Company
          </h5>
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer--links">
          <h5 className="footer--headings grid-components--heading-medium">
            Legal
          </h5>
          <a href="#">Security</a>
          <a href="#">Terms of service</a>
          <a href="#">Privacy policy</a>
        </div>

        <div className="footer--links">
          <h5 className="footer--headings grid-components--heading-medium">
            Resources
          </h5>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
          <a href="#">Case studies</a>
          <a href="#">Documentation</a>
        </div>

        <div className="footer--links">
          <h5 className="footer--headings grid-components--heading-medium">
            Services
          </h5>
          <a href="#">Messaging Services</a>
          <a href="#">Identity/Verification Services</a>
          <a href="#">Wallet Services</a>
          <a href="#">Financial Services</a>
          <a href="#">Crypto-currency Services</a>
          <a href="#">Bill Payment Services</a>
        </div>
      </div>

      <div className="footer--contact-container">
        <img
          src="https://raw.githubusercontent.com/awobekuD/dojah/d79b08a56584367f5c4fa26726fdc45227bef5cc/src/assets/dojah%20favicon.svg"
          alt="dojah favicon"
        />

        <div className="footer--contact">
          <img
            src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/phone.svg"
            alt="phone number"
          />
          <p className="footer--contact__text ">08139841310</p>
        </div>

        <div className="footer--contact">
          <img
            src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/mail.svg"
            alt="email address"
          />
          <p className="footer--contact__text ">info@dojah.io</p>
        </div>

        <div className="footer--social-links">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/twitter.svg"
              alt="twitter link"
            />
          </a>
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/slack.svg"
              alt="slack link"
            />
          </a>
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/instagram.svg"
              alt="instagram link"
            />
          </a>
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/9b170fb6ad57b53a1bf964b973f9cd72483b4b05/src/assets/facebook.svg"
              alt="facebook link"
            />
          </a>
        </div>
      </div>

      <div className="footer--ending">
        <p className="footer--ending_text1">
          (231) 352-6536, 2237 Paul Rose Rd. Frankfort, Michigan(MI), 49635
        </p>
        <p className="footer--ending_text2">
          Bibendum augue blandit urna, egestas dignissim nunc. Sit sollicitudin
          id mollis nulla amet placerat imperdiet nunc orci. Egestas suspendisse
          in in amet libero adipiscing. Tristique semper vel tincidunt purus
          consequat mauris. Tortor, sit amet amet, duis cras eget lorem feugiat.
          Tempus ac sed consectetur pellentesque tortor porttitor aenean viverra
          aenean. Porttitor feugiat egestas amet viverra in quam vestibulum
          etiam.
        </p>
        <p>©2021 Dojah. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
