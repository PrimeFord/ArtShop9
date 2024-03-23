import React from "react";

const Hero3 = () => {
  return (
    <div className="w-[100%] h-[70vh] flex">
      <div className="w-[50%] bg-[#d32c37] text-[#fff] px-[2rem] flex flex-col justify-center gap-[1.5rem]">
        <p className="text-[3rem] font-[600] leading-[3.5rem]">
          BID ON ART BY
          <br /> NIGERIA’S HOTTEST
          <br />
          ARTISTS
        </p>
        <p className="w-[90%] text-[1.5rem]">
          Find emerging and established artists at auction.
        </p>
        <button className="btn w-[10rem] h-[3.2rem] rounded-none">
          BID NOW
        </button>
      </div>
      <div className="w-[50%] h-[70vh] bg-[url('/Images/Hero3.png')] bg-cover  bg-no-repeat bg-center "></div>
    </div>
  );
};

export default Hero3;
