import React, { Component } from "react";
import { Link } from "react-scroll";
import Button from "./Button";

class Navbar extends Component {
  state = {
    links: [
      {
        to: "home",
        label: "Home",
      },
      {
        to: "about",
        label: "About",
      },
      {
        to: "services",
        label: "Services",
      },
      {
        to: "skills",
        label: "Skills",
      },
      {
        to: "projects",
        label: "Portfolio",
      },
      {
        to: "testimonials",
        label: "testimonials",
      },
      {
        to: "contact",
        label: "Contact",
      },
    ],
  };

  activeLinkStyle = ({ active }) => {
    return {
      fontWeight: active ? "bold" : "normal",
      textDecoration: active ? "underline" : "none",
      textDecorationThickness: active ? "decoration-8" : "decoration-none",
    };
  };

  render() {
    return (
      <nav className="h-[70px] w-screen border-b-2 border-opacity-10 border-my-black z-10 bg-my-white fixed top-0 items-center pl-[100px] pr-[100px] flex justify-between">
        <div className="item-center h-full text-3xl grid place-content-center text-my-orange font-extrabold basis-1/8">
          Andy
        </div>
        <div className="flex items-center justify-between h-full basis-1/2">
          {this.state.links.map((link) => (
            <Link
              to={link.to}
              key={link.label}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-50}
              duration={300}
              // delay={500}
              isDynamic={true}
              activeClass={'active'}
              className="text-sm ml-4 mr-4 text-my-black opacity-50 font-medium cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className=" h-full grid place-content-center basis-1/8">
          <Button buttonText={"hire me"} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
