import React, { Component } from "react";
import Title from "../common/Title";
import AboutImage from "./../common/AboutImage";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about" className="w-screen h-screen bg-my-lightgray">
        <div className="h-[50%] w-[100%] bg-my-black opacity-10"></div>
        <div className="h-fit w-fit flex place-content-stretch mt-[-190px] justify-between ml-[160px]">
          <AboutImage />
          <div className=" w-[450px] ml-[100px] h-[400px]">
            <Title title={"About me"} />
            <h1 className="font-extrabold text-[22px] text-left ml-8 mt-6">
              Why hire me ?
            </h1>
            <div className=" font-medium text-md mt-14 p-8 w-ful text-left ">
              Here is some brief description about this Project. To view the
              project brief and your interactions click on view. Here is some
              brief description about this Project. To view the project brief
              and your interactions click on view. Here is some brief
              description about this Project. To view the project brief and ...
            </div>
          </div>
        </div>

        <div className="h-[20%] w-full mt-[-30px] bg-my-lightgray"></div>
      </div>
    );
  }
}

export default About;
