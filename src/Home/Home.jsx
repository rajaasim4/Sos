import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Layout/About/About";
import Features from "../Layout/Features/Features";
import Header from "../Layout/Header/Header";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Quotes from "../Layout/Quotes/Quotes";
import Requirements from "../Layout/Requirements/Requirements";

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Header />
      <About/>
      <Features />
      <Requirements />
      <Quotes />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
