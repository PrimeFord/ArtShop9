import React from "react";

const Hero1 = () => {
  return (
    <div className="w-[100%] h-[70vh] flex">
      <div className="w-[50%] bg-secondary-color text-[#fff] px-[2rem] flex flex-col justify-center gap-[1.5rem]">
        <p className="text-[3rem] font-[600] leading-[3.5rem]">
          SHOP MIND BLOWING
          <br />
          NIGERIAN ART
        </p>
        <p className="w-[90%] text-[1.5rem]">
          Buy and discover art from a wide variety of talented and amazing
          artists from the 9.
        </p>
        <button className="btn w-[10rem] h-[3.2rem] rounded-none">
          SHOP NOW
        </button>
      </div>
      <div className="w-[50%] h-[70vh] bg-[url('/Images/Hero1.png')] bg-cover  bg-no-repeat bg-center "></div>
    </div>
  );
};

export default Hero1;
