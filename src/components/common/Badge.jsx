import React from "react";

export default function Badge({ badgrStyle, text }) {
  return (
    <div
      className={`w-[160px] rounded-lg h-[70px] bg-my-white ring-[3px] ring-my-black ring-opacity-20 grid place-items-center  ${
        badgrStyle ? badgrStyle : ""
      }`}
    >
      <span className="text-my-orange opacity-50 text-[23px] font-extrabold">
        {text}
      </span>
    </div>
  );
}
