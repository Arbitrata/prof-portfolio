import React from "react";

export default function SkillCircles({ icon, left, right }) {
  return (
    <>
      <div className="w-fit h-fit">
        <>
        {/* { right && <div className="w-1.5 h-[60px] bg-my-orange "></div>} */}
          <div className=" flex items-center h-fit w-fit place-content-center">
            {left && <div className="h-1.5 w-[150px] bg-my-orange"></div>}
            <div className="w-[80px] h-[80px] bg-my-white ring-4 ring-my-orange rounded-full grid place-content-center">
              <div className="">{icon}</div>
            </div>
            {right && <div className="h-1.5 w-[150px] bg-my-orange"></div>}
          </div>
        </>
         {/* { right && <div className="w-1.5 h-[60px] bg-my-orange"></div>} */}
      </div>
    </>
  );
}
