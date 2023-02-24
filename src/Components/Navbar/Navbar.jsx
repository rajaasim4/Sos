import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSteam, FaXbox } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Line from "../../assets/Line.svg";
import logo from "../../assets/logo.png";
import AppContext from "../../Components/AppContext/AppContext";
import ClickOutside from "../../Hooks/ClickOutside";
import OutsideClickDetector from "../../Hooks/OutsideClickDetector";
import "./Navbar.css";
const Navbar = () => {
  // const [close, setClose] = useState(AppContext);
  const [show, setShow] = useState(false);
  // const NavModal = OutsideClickDetector(() => {
  //   setClose(false);
  // });
  const navbarShow = () => {
    setShow(!show);
  };
  let mainMenu = useRef("");
  ClickOutside(mainMenu, () => {
    setShow(false);
  });

  return (
    <>
      <nav>
        <div className="Nav_logo">
          <img src={logo} alt="" />
        </div>

        <div
          ref={mainMenu}
          className={show ? "Main_nav Main_nav_show" : "Main_nav"}
        >
          {/* <div className="Main_nav" ref={NavModal}> */}
          <ul>
            <li>
              <a href="/#" onClick={navbarShow}>
                MAIN
              </a>
            </li>
            <li>
              <a href="/#" onClick={navbarShow}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="/#" onClick={navbarShow}>
                GAME FEATURES
              </a>
            </li>
            <li>
              <a href="/#" onClick={navbarShow}>
                SYSTEM REQUIREMENTS
              </a>
            </li>
            <li>
              <a href="/#" onClick={navbarShow}>
                QUOTES
              </a>
            </li>
          </ul>

          <div className="Nav_icons">
            <FaSteam />
            <FaXbox />
          </div>
        </div>
        <div className="Nav_language">
          <select name="" id="">
            Eng
            <option>ENG</option>
            <option>RUS</option>
            <option>FRA</option>
            <option>DEU</option>
          </select>
          <img src={Line} alt="" className="line" />
        </div>
        <div className="Hamburger">
          {show ? (
            <AiOutlineClose
              onClick={() => setShow(!show)}
              className="Hamburger_icon"
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={() => setShow(!show)}
              ref={mainMenu}
              className="Hamburger_icon"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
