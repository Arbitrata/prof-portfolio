import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

class Cards extends Component {


  static get CARD_STYLE() {
    return {
      margin: "40px 230px",
      boxSizing: "border-box"
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
          <div className="w-[300px] mt-[-0px] h-[200px] rounded-[20px] ring-1 ring-my-black block">
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
          <div className="w-[380px]  bg-my-black opacity-80 rounded-[20px] py-6 px-4 block place-content-center h-[500px] m-12">
            <div className="h-[50%] px-2 rounded-[20px]">
              <img
                alt="andy"
                className=" w-full h-full rounded-[20px]"
                src={this.props.image}
              />
            </div>

            <div className="h-[50%] pl-6 pt-3 inline-block ">
              <h2 className=" text-[23px] font-bold float-left p-2 text-my-white">
                {this.props.title}
                Design
              </h2>
              <span className=" float-left text-left text-my-white text-2sm pt-3 font-medium">
                {this.props.text}
                Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem.
              </span>
              <Link
                to={"/"}
                className="text-my-orange mt-10 hover:ring-my-white hover:text-my-white ring-1 ring-my-orange flex items-center font-medium text-2sm float-left py-1 px-3 rounded-[5px]"
              >
                {" "}
                {this.props.view}{" "}
                <span className="pr-3 pb-1">view in full</span>{" "}
                <FiArrowRight size={20} />{" "}
              </Link>
            </div>
          </div>
        )}
        {this.props.testimonialCard && (
          <div className=" w-[400px] h-[450px] bg-my-white ring-1 p-8  ring-my-black rounded-[20px]">
            <div></div>

            <div className="h-[100px] w-[100px]  rounded-full">
              <img
                alt="andy"
                className=" w-full h-full rounded-full"
                src="data:image/jpeg;base64,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"
              />
            </div>

            <div className="h-[50%] pl-6 pt-3 inline-block ">
              <h2 className=" text-[20px] font-bold float-left p-2 ">
                {this.props.title}
                Design
              </h2>
              <span className=" float-left text-left  text-2sm pt-3 font-medium">
                {this.props.text}
                software dev
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Cards;
