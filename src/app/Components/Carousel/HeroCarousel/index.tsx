"use client";
import React from "react";
import Slider from "react-slick";
import Hero1 from "../Hero1";
import Hero2 from "../Hero2";
import Hero3 from "../Hero3";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    // HeroCarousel: function (i) {
    //   return <a>{/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}</a>;
    // },
    // className: " ",
    // dots: true,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // adaptiveHeight: true,
  };

  return (
    <div className=" h-[80vh] bg-red-700">
      <Slider {...settings}>
        <div className="  h-[40rem] bg-slate-500">{/* <Hero1 /> */}1</div>{" "}
        <div className=" h-[40rem] bg-red-500">{/* <Hero1 /> */}2</div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
