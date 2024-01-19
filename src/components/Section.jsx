import React from "react";
import Light from "../assets/Light";
import Speaker from "../assets/speaker";
import Reload from "../assets/Reload";
import Square from "../assets/Square";
import LeftArrow from "../assets/LeftArrow";
import RightIcon from "../assets/RightIcon";
import ComIcon from "../assets/ComIcon";
import AddIcon from "../assets/AddIcon";

export const Section = () => {
  return (
    <div>
      <p className="mx-[6.5rem] text-[2rem] font-[700rem] text-[#06286E] not-italic ">
        Relations and Functions (Mathematics)
      </p>
      <div className="flex mt-[3.5rem]">
        <div className="inline-flex gap-[2.5rem]   mx-auto">
          <span className="text-[#06286E] text-[1.25rem] font-[700rem] border-b-2 px-[0.75rem] pb-2 border-[#06286E]">
            study
          </span>
          <span>Quiz</span>
          <span>Test</span>
          <span>Game</span>
          <span>others</span>
        </div>
      </div>
      <div className="flex mt-[2rem]">
        <div className=" mx-auto">
          <div className="bg-gradient-to-b from-[#06286E] to-[#164EC0] w-[44.5rem] h-[24.5rem] rounded-[2.6rem] relative">
            <div className="absolute flex justify-between w-[100%] p-[2.3rem]">
              <Light />
              <Speaker />
            </div>
            <p className="absolute text-center top-1/2 -translate-y-1/2  justify-between w-[100%] text-[#fff] item-center text-[2.3rem] font-bold ">
              9 + 6 + 7x - 2x - 3
            </p>
          </div>
          <div className="flex items-center justify-between p-[2.3rem]">
            <Reload />
            <div className="flex items-center justify-between">
              <LeftArrow />
              <p className="text-[#202B37] text-[1.5rem] font-bold px-[2.6rem]">
                01/10
              </p>
              <RightIcon />
            </div>
            <Square />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[6.3rem] py-[5.3rem]">
        <div className="flex items-center">
          <ComIcon />
          <div className="p-[1.3rem]">
            <p className="#696671 text-[0.7rem]">Publish by</p>
            <p className="text-[#06286E] font-normal  text-[1.9rem] ">
              Hygge<span className="font-bold">X</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <AddIcon />
          <p className="text-[#06286E] text-[1.7rem] font-medium px-[0.5rem]">Create Flashboard</p>
        </div>
      </div>
    </div>
  );
};
