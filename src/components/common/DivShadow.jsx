import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function DivShadow({ text, title }) {
  return (
    <div className="w-fit h-fit pt-6 px-6 block">
      <FaQuoteLeft size={30} className="opacity-50" />
      <h1 className="text-[35px] font-bold text-left mt-4  text-my-orange text-opacity-100">{title}</h1>
      <div className="mt-10 h-fit w-fit">
        <span className="text-[20px] font-thin text-my-black">{text}</span>
      </div>
    </div>
  );
}
