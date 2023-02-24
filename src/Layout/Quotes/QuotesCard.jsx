import React from "react";
import Avatar from "../../assets/Avatar!.png";

const QuotesCard = (props) => {
  return (
    <div className="QuotesCard" style={{ alignSelf: props.self }}>
      <div className="Card_top">
        <img src={Avatar} alt="" />
        <h4>
          sadasd
          <br />
          <span> asdas</span>
        </h4>
      </div>
      <div className="Card_bottom">
        <h5>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ut?
        </h5>
        <span>dssd</span>
      </div>
    </div>
  );
};

export default QuotesCard;
