import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import { FiCode, FiCommand, FiDatabase, FiFigma } from "react-icons/fi";
import Title from "../common/Title";
import Cards from "./../common/Cards";

class Services extends Component {

  render() {
    return (
      <div id="services" className="h-screen">
        <div className="h-[120px] pt-6 block ml-[60px]">
            <div className="text-my-black text-[20px] text-left font-extrabold ml-8">Services</div>
          <Title title={"My Expertise"} />
        </div>
        <div className="flex items-center ">
        <div className="relative h-[70vh] flex flex-1 items-start">
          <ReactCardCarousel
            autoplay={true}
            spread={"wide"}
            autoplay_speed={5000}
            disable_box_shadow={true}
          >
            <Cards
              icon={<FiCode size={50} />}
              serviceCard={true}
              title={"Frontend web dev "}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem"
            />
            <Cards
              serviceCard={true}
              icon={<FiDatabase size={50} />}
              title={"backend web dev"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem."
            />
            <Cards
              serviceCard={true}
              icon={<FiFigma size={50} />}
              title={"UI/UX Design"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem."
            />
            <Cards
              serviceCard={true}
              icon={<FiCommand size={50} />}
              title={"Project management"}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et dui,
              ullamcorper ut quis congue purus volutpat posuere lorem."
            />
          </ReactCardCarousel>
        </div>
        </div>
      </div>
    );
  }
}

export default Services;
