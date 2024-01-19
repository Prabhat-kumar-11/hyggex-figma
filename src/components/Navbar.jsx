import React from "react";

import HomeIcon from "../assets/HomeIcon";
import RightArrow from "../assets/RightArrow";
import CompanyIcon from "../assets/CompanyIcon";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mx-[6.5rem] my-[1.5rem] ">
        <div className="flex items-center">
          <CompanyIcon />

          <p className="text-[#06286E] font-normal  text-[3rem]">
            Hygge<span className="font-bold">X</span>
          </p>
        </div>
        <div className="flex  tex-[1.25rem] font-normal items-center gap-[2.5rem] ">
          <p>Home</p>
          <p>Flashcard</p>
          <p>Contact</p>
          <p>FAQ</p>
          <button className="flex items-center px-[2.5rem] py-[0.8125rem] rounded-[2rem] not-italic  text-[1.125rem] font-medium text-white  bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            Login
          </button>
        </div>
      </div>
      <div className="flex items-center mx-[6.5rem] my-16">
        <HomeIcon />
        <RightArrow />
        <span>Flashcard</span>
        <RightArrow />
        <span>Mathematics</span>
        <RightArrow />

        <span className="text-[#06286E] ">Relation and Function</span>
      </div>
    </>
  );
};
