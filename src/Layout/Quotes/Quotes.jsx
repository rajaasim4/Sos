import React from "react";
import "./Quotes.css";
import QuotesCard from "./QuotesCard";

const Quotes = () => {
  return (
    <div className="Quotes">
      <div className="Quotes_left">
        <h3 className="Common_h3_heading">What People Think?</h3>
        <h1 className="Common_h1_heading">Press Quotes</h1>
        <p>
          Our goal is to create a product and service that you’re satisfied with
          and use it every day. This is why we’re constantly working on our
          services to make it better every day and really listen to what our
          users has to say.
        </p>
        <button className="Main_btn">Read More Testimonials</button>
      </div>
      <div className="Quotes_right">
        <QuotesCard />
        <QuotesCard self={"flex-start"} />
        <QuotesCard />
      </div>
    </div>
  );
};

export default Quotes;
