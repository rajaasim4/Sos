import React from "react";
import "./Requirements.css";
const Requirements = () => {
  return (
    <div className="Requirements">
      <div className="Requirements_headings">
        <h3 className="Common_h3_heading">can my computer run this game</h3>
        <h1 className="Common_h1_heading">System requirements</h1>
      </div>
      <div className="Requirements_main">
        <div className="Requirements_table">
          <Table title={"OS"} desc={"Windows 7,8,10,11"} />
          <Table title={"PROCESSOR"} desc={"Intel Core I5 6500k"} />
          <Table title={"RAM"} desc={"8 GB DDR4"} />
          <Table title={"STORAGE"} desc={"60 GB"} />
          <Table
            title={"GRAPHICS CARD"}
            desc={"Nvidia Getforce GTX 1080 ti"}
            class={"table_last"}
          />
        </div>
      </div>
    </div>
  );
};

const Table = (props) => {
  return (
    <>
      <div className={`table_main ${props.class}`}>
        <h5 className="Common_h5_heading">{props.title}</h5>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default Requirements;
