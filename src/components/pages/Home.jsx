import React, { Component } from "react";
import { FiArrowRight, FiDownloadCloud } from "react-icons/fi";
import Button from "../common/Button";
import andy from "../common/andy.png";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Testimonials from './Testimonials';
import Contact from "./Contact";
import Portfolio from "./Portfolio";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className=" overflow-x-hidden">
      <div id="home" className="w-full h-screen flex overflow-x-hidden">
        <div className="w-[55%] grid place-content-center">
          <div className="h-[600px] w-[520px] pr-12 float-left text-left pt-[140px]">
            <h1>
              <span className=" tracking-widest text-[23px] font-serif">
                Hello, I'm
              </span>
              <br />
              <span className="text-[55px] font-extrabold text-my-orange">
                Andrew
              </span>
              <br />
              <br />
              <span className="text-[16px] font-semibold text-my-black opacity-90">
                FULLSTACK SOFTWARE DEVELOPER , UI/UX DESIGNER & PROJECT
                MANAGEMENT
              </span>
              <br />
              <br />
              <span className="text-center text-[15px] text-my-black opacity-60 font-medium">
                Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem.
              </span>
            </h1>
            <div className=" bottom-0 mt-[50px] h-[70px] w-full flex justify-between items-center">
              <Button
                buttonText={"Get in tounch"}
                buttonStyle={"pl-3"}
                buttonIcon={<FiArrowRight size={25} />}
              />
              <Button
                buttonText={"Download CV"}
                buttonIcon={<FiDownloadCloud size={25} />}
                buttonStyle={"pl-3"}
              />
            </div>
          </div>
        </div>
        <div className=" w-[55%] bg-my-black pb-[10px] skew-x-12 mr-[-100px] opacity-80 grid place-content-center">
          <div className="w-[360px] h-[450px] -skew-y-12 rotate-12">
            <img
              src={andy}
              alt="andrew mbugua"
              className="top-1 opacity-80 h-full brightness-10 brightness-60 contrast-150"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact/>
      </div>
    );
  }
}

export default Home;
