import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="NewsLetter">
      <div className="NewsLetter_main">
        <h3 className="Common_h3_heading">WANT TO STAY IN TOUCh</h3>
        <h1 className="Common_h1_heading">NEWSLETTER SUBSCRIBE</h1>
        <p>
          In order to start receiving our news, all you have to do is enter your
          email address. <br /> Everything else will be taken care of by us. We
          will send you emails containing <br /> information about game. We
          don’t spam.
        </p>
        <div className="NewsLetter_input">
          <input type="text" placeholder="Your Email Address here" />
          <button className="Main_btn NewLetter_btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
