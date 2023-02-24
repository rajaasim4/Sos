import React from "react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../assets/Slide1.jpg";
import Slide2 from "../../assets/Slide2.jpg";
import Slide3 from "../../assets/Slide3.png";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <div className="About_left">
        <h3 className="Common_h3_heading">What is Sos?</h3>
        <h1 className="Common_h1_heading">
          Social battle <br />
          Royal game
        </h1>
        <p>
          Each round, you and 15 other contestants compete to escape a deadly
          island filled with monsters. The trick is: three people can survive.
          Will you run solo or form friendships with others to escape? Making
          the right decisions could be the difference between life and death.
        </p>
      </div>
      <div className="About_right">
        {" "}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
