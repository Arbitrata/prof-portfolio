import React from "react";
import andy from "./andy.png";
import Badge from "./Badge";

export default function AboutImage() {
  return (
    <div className="backdrop-blur-md ">
      <Badge text={"Reliable"} badgrStyle={"ml-[-60px] backdrop-blur-xl"} />
      <div className="h-[470px] w-[470px] mt-[-120px] rounded-full shadow-md shadow-my-black border-2 border-opacity-30 border-my-black bg-my-lightgray grid place-content-center z-10">
        <img
          src={andy}
          alt="andrew mbugua"
          className="rounded-full p-6 h-[450px]"
        />
      </div>
      <Badge
        text={"Resilience"}
        badgrStyle={"ml-[-60px] mt-[-120px] backdrop-blur-xl"}
      />
      <Badge
        text={"Passionate "}
        badgrStyle={"ml-[410px] mt-[-220px] z-40 backdrop-blur-xl"}
      />
    </div>
  );
}
