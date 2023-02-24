import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="Main_header">
        <h1 className="Common_h1_heading">Survive At All Cost</h1>
        <h3 className="Common_h3_heading">
          Experiance New Socail Battler Royal game
        </h3>
        <button className="Main_btn">Buy Now On Stream |$14.99</button>
      </div>
    </header>
  );
};

export default Header;
