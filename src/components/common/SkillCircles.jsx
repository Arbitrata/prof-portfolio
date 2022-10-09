import React from "react";

export default function SkillCircles({ icon, left, right }) {
  return (
    <>
      <div className="w-fit h-fit">
        <>
          {right && <div className="w-1.5 h-[50px] ml-[33px] bg-my-orange "></div>}
          <div className=" flex items-center h-fit w-fit place-content-center">
            {left && <div className="h-1.5 w-[120px] bg-my-orange"></div>}
            <div className="w-[70px] h-[70px] bg-my-white ring-4 ring-my-orange rounded-full grid place-content-center">
              <div className="">{icon}</div>
            </div>
            {right && <div className="h-1.5 w-[120px] bg-my-orange"></div>}
          </div>
        </>
        {right && <div className="w-1.5 h-[50px] ml-8 bg-my-orange"></div>}
      </div>
    </>
  );
}
