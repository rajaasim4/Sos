import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import "./Features.css";
const Features = () => {
  return (
    <>
      <div className="Features">
        <div className="Features_bg">
          <div className="Features_main">
            <h3 className="Common_h3_heading">What’s so special?</h3>
            <h1 className="Common_h1_heading">Features</h1>
            <div className="Features_content">
              <h4>
                <span>
                  <BsFillCircleFill />
                </span>{" "}
                Survive At All Cost
              </h4>
              <h4>
                <span>
                  <BsFillCircleFill />
                </span>{" "}
                CREATE ALLIES AND ENEMIES
              </h4>
              <h4>
                <span>
                  <BsFillCircleFill />
                </span>{" "}
                IMPRESS THE AUDIENCE
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
