import React from "react";

const Hero2 = () => {
  return (
    <div className="w-[100%] h-[70vh] flex">
      <div className="w-[50%] h-[70vh] bg-[url('/Images/Hero2.png')] bg-cover  bg-no-repeat bg-center "></div>
      <div className="w-[50%] bg-[#fff] text-[#000] px-[3rem] flex flex-col justify-center gap-[1.5rem]">
        <p className="text-[3rem] font-[600] leading-[3.5rem]">
          MAKE MONEY,
          <br />
          SELL YOUR ART
        </p>
        <p className="w-[90%] text-[1.5rem]">
          Register as a seller and sell your art to millions of art lovers
          Nationwide.
        </p>
        <button className="btn bg-black hover:bg-[#fff] hover:border-[1px] hover:border-[#000] text-[#fff] hover:text-[#000] w-[12rem] h-[3.2rem] rounded-none">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Hero2;
