import { CART, LIKE, LOGO, SEARCH, USER } from "@/app/Theme/ThemeIcons";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navbar h-[5rem] w-[100%] justify-between px-[1.5rem]">
        <div className="">
          <a className="w-[10rem] text-xl">
            <LOGO />
          </a>
        </div>
        <div className="flex items-center w-[85%] gap-2 justify-around">
          <div className="flex w-[50rem] justify-around items-center h-[2.5rem] p-2 border border-2px border-[#0000004D] border-solid">
            <input
              type="text"
              placeholder="SEARCH BY ARTWORK, ARTIST, STYLE, THEME, TAG, ETC."
              className="focus:border-none outline-none flex-1 placeholder:text-[0.8rem]"
            />
            <span className="pt-">
              <SEARCH />
            </span>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">BUY</a>
          </div>
          <div className="">
            <a className="btn btn-ghost text-xl">SELL</a>
          </div>
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <USER />
            </div>
          </div>
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <LIKE />
            </div>
          </div>
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <CART />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-[2rem] gap-[4rem]">
        <div className="">
          <a className="text-[1rem] font-[600] leading-4">ARTWORKS</a>
        </div>
        <div className="">
          <a className="text-[1rem] font-[600] leading-4">ARTIST</a>
        </div>
        <div className="">
          <a className="text-[1rem] font-[600] leading-4">AUCTION</a>
        </div>
        <div className="">
          <a className="text-[1rem] font-[600] leading-4">SHOWS/EVENTS</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
