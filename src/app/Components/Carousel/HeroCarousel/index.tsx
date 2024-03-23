"use client";
import React from "react";
import Slider from "react-slick";
import Hero1 from "../Hero1";
import Hero2 from "../Hero2";
import Hero3 from "../Hero3";

const HeroCarousel = () => {
  const settings = {
    // HeroCarousel: function (i) {
    //   return <a>{/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}</a>;
    // },
    className: " ",
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // adaptiveHeight: true,
  };

  return (
    // <div className=" w-[100%] bg-orange-300">
    <Slider {...settings}>
      <div>
        <Hero1 />
      </div>
    </Slider>
    // </div>
  );
};

export default HeroCarousel;
