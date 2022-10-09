import React from "react";

export default function Button({
  buttonStyle,
  onClickButtonHandler,
  buttonType,
  buttonText,
  buttonIcon,
}) {
  return (
    <button
      className={`py-2 hover:ring-[3px] ring-0 w-fit transition-colors duration-650 ease-in-out justify-around px-8 opacity-90 rounded-[5px] text-[18px] font-medium items-center bg-my-black text-my-white hover:ring-my-orange hover:text-my-orange grid place-content-center h-[40px] hover:bg-my-white`}
      onClick={onClickButtonHandler}
      type={`${buttonType ? buttonType : "button"}`}
    >
      <div className="flex place-items-center">
        <span>{buttonText}</span>
        <span className={`${buttonStyle ? buttonStyle : " "}`}>{buttonIcon}</span>
      </div>
    </button>
  );
}
