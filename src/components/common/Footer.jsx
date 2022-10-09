import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

export default function Footer() {
  const icons = [
    {
      icon: <FiLinkedin size={20} />,
      href: "http://1",
    },
    {
      icon: <FiGithub size={20} />,
      href: "http://2",
    },
    {
      icon: <FiInstagram size={20} />,
      href: "http://3",
    },
    {
      icon: <FiFacebook size={20} />,
      href: "http://4",
    },
    {
      icon: <FiTwitter size={20} />,
      href: "http://5",
    },
  ];

  return (
    <footer className="w-screen grid grid-rows-4 divide-y-2 divide-my-white bg-my-lightgray opacity-100 h-[220px] pt-6 mt-24">
      <div className=" row-span-3 w-screen grid place-content-center">
        <div className="h-1 w-screen grid place-content-center">
            <div className="bg-my-black w-[900px] h-1 opacity-70 "></div>
        </div>
        <div className="flex px-[70px] w-screen place-content-center">
          <div className=" h-full grid place-content-center w-[35%]">
            <div className="item-center h-full text-[45px] text-my-orange font-bold">
              Andy
            </div>
          </div>
          <div className="grid grid-rows-3 pl-[100px] p-2 h-[150px] w-[60%]">
            <div className="flex text-my-black  items-center underline">
              <FiMail />
              <Link
                to="/"
                className=" text-[15px] font-bold  ml-10"
              >
                andrewmbugua76@gmail.com
              </Link>
            </div>
            <div className="flex text-my-black items-center">
              <FiPhone />
              <span className=" text-[15px] font-bold ml-10">
                +254700463499
              </span>
            </div>
            <div className="flex items-center ">
              <span className=" text-[16px] text-my-black font-bold pr-10">
                Social media
              </span>
              {icons.map((icon) => (
                <a
                key={icon.href}
                  href={icon.href}
                  className="p-2 ring-1 ring-my-black hover:ring-my-blue mr-4 hover:text-my-blue bg-my-white rounded"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" pl-[53%] grid place-items-center">
        <span className="text-[13px] font-medium">
          copyright andyportfolio. All Rights observed
        </span>
      </div>
    </footer>
  );
}
