import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

class Cards extends Component {
  static get CARD_STYLE() {
    return {
      margin: "40px 230px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <>
        {this.props.serviceCard && (
          <div
            style={Cards.CARD_STYLE}
            className="bg-my-lightgray w-[350px] h-[350px] block px-12 py-12 rounded-[20px] "
          >
            <div className=" bg-my-orange h-[80px] w-[80px] items-center place-content-center grid  rounded-l-[20px] rounded-t-[20px]">
              {this.props.icon}
            </div>
            <h1 className="text-my-black font-extrabold text-[25px] float-left pt-6">
              {this.props.title}
            </h1>
            <span className=" float-left pt-6 text-left text-[15px] font-normal">
              {this.props.text}
            </span>
          </div>
        )}
        {this.props.skillsCard && (
          <div className="w-[300px] h-[200px] rounded-[20px] ring-1 ring-my-black block bg-my-white">
            <h1 className="h-[45px] w-full rounded-[20px] bg-my-orange grid place-content-center text-[23px] font-bold">
              {this.props.title}
            </h1>
            <div className="w-full grid place-content-center px-8 py-2">
              <span className=" float-left pt-3 text-left text-[16px] font-bold">
                {this.props.text}
              </span>
            </div>
          </div>
        )}
        {this.props.projectCard && (
          <div
          style={Cards.CARD_STYLE}
           className="w-[350px] bg-my-black opacity-80 rounded-[20px] py-0 px-0 block place-content-center h-[450px] m-12">
            <div className="h-[45%] p-1 w-full rounded-[20px]">
              <img
                alt="andy"
                className=" w-full h-full rounded-[20px]"
                src={this.props.image}
              />
            </div>

            <div className="h-[50%] pl-6 pt-3 inline-block ">
              <h2 className=" text-[23px] font-bold float-left p-2 text-my-white">
                {this.props.title}
              </h2>
              <span className=" float-left text-left text-my-white text-2sm pt-3 font-medium">
                {this.props.text}
              </span>
              <a
                href={this.props.to}
                className="text-my-orange mt-10 hover:ring-my-white hover:text-my-white ring-1 ring-my-orange flex items-center font-medium text-2sm float-left py-1 px-3 rounded-[5px]"
              >
                {this.props.view}
                <span className="pr-3 pb-1">view in full</span>
                <FiArrowRight size={20} />
              </a>
            </div>
          </div>
        )}
        {this.props.testimonialCard && (
          <div className=" w-[300px] h-[80px] py-2 px-4 mb-2 bg-my-white ring-2 shadow-sm hover:shadow-my-black ring-my-black ring-opacity-5 hover:bg-my-lightgray  rounded-[10px] items-center">
              <div className="flex">
                <div className="h-[65px] w-[65px] rounded-full">
                  <img
                    alt="andy"
                    className="rounded-full"
                    src={this.props.image}
                  />
                </div>
                <div className="block pl-4">
                  <div>
                    <h1 className="font-bold text-lg pr-5 float-left">
                    {this.props.name}
                  </h1>
                  </div>
                  <div>
                    <span className="float-left text-md  text-my-orange pt-1 text-opacity-100 font-medium">
                    {this.props.title}
                  </span>
                  </div>
                </div>
              </div>
          </div>
        )}
      </>
    );
  }
}
export default Cards;
