import React from "react";
import "./Navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div>
      <nav className="flex-display">
        <div className="navbar">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/awobekuD/dojah/5cc52aac7bc3f6292d95cf7b44fee8ac446d9218/src/assets/dojah%20logo.svg"
              alt="dojah-logo"
              className="dojah-logo"
            />
          </a>

          <ul className="navbar--lis">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="navbar--actions">
            <a href="#" className="navbar--actions__secondary">
              Login
            </a>
            <a href="#" className="navbar--actions__primary">
              <Button buttonprop="Get started"></Button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
