import React from "react";
import DownArrow from "../assets/DownArrow";

export const Footer = () => {
  return (
    <div className="mx-[6.5rem] my-[2rem] ">
      <p className="text-[#06286E] text-[3rem] font-bold">FAQ</p>

      <div className="flex justify-between px-[1.5rem] py-[1rem] w-[53rem] border-[#217EEC] border-[1px] rounded-[0.75rem] my-[1rem]">
        <p className="">Can education flashcards be used for all age groups?</p>
        <DownArrow />
      </div>
      <div className="flex justify-between px-[1.5rem] py-[1rem] w-[53rem] border-[#217EEC] border-[1px] rounded-[0.75rem] my-[1rem]">
        <p className="">How do education flashcards work ?</p>
        <DownArrow />
      </div>
      <div className="flex justify-between px-[1.5rem] py-[1rem] w-[53rem] border-[#217EEC] border-[1px] rounded-[0.75rem] my-[1rem]">
        <p className="">
          Can education flashcards be used for test preapration ?
        </p>
        <DownArrow />
      </div>
    </div>
  );
};
