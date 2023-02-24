import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="Footer_main">
        <div className="Footer_logo">
          <img src={logo} alt="" />
        </div>

        <div className="Footer_nav">
          <ul>
            <li>
              <a href="/#">MAIN</a>
            </li>
            <li>
              <a href="/#">ABOUT</a>
            </li>
            <li>
              <a href="/#">GAME FEATURES</a>
            </li>
            <li>
              <a href="/#">SYSTEM REQUIREMENTS</a>
            </li>
            <li>
              <a href="/#">QUOTES</a>
            </li>
          </ul>
        </div>
        <div className="Footer_Icons">
          <a href="/#">
            <FaFacebook />
          </a>
          <a href="/#">
            <FaTwitter />
          </a>
          <a href="/#">
            <FaYoutube />
          </a>
          <a href="/#">
            <AiFillMessage />
          </a>
        </div>
      </div>
      <div className="Footer_bottom">
        <div className="Footer_bottom_left">
          © {new Date().getFullYear()} Outpost Games, Inc. All Rights Reserved
        </div>
        <div className="Footer_bottom_right">
          <a href="">Privacy Policy |</a>
          <a href="">Terms Of Service |</a>
          <a href="">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
