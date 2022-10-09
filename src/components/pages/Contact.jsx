import React, { Component } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import Title from "./../common/Title";
import  emailjs  from "emailjs-com";

class Contact extends Component {
  renderInput = (lebel, name, type, placeholder, email, inputStyle) => {
    return (
      <Input
        lebel={lebel}
        type={type}
        name={name}
        placeholder={placeholder}
        email={email}
        inputStyle={inputStyle}
      />
    );
  };
  handleSubmit = () => {
    return null;
  };

  sendEmail = (e) => {
    return emailjs
      .sendForm(
        "service_hgibeuw",
        "template_zjroogq",
        e.target,
        "UvyG1N1hBcQ5o-_3D"
      )
      .then((res) => {
        console.log("sent email");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        id="contact"
        className="w-screen h-screen pb-4 pl-[90px] pr-[100px] grid place-content-center"
      >
        <div className="mb-4 -ml-6">
          <Title title={"Get in touch"} />
        </div>
        <div className="rounded-[20px] grid grid-cols-7 divide-x divide-my-white pl-8 pr-8 py-6 bg-my-black bg-opacity-10">
          <div className=" grid grid-cols-2 grid-rows-7 px-6 pt-3 pb-2 col-span-3">
            <div className="grid grid-cols-6 col-span-2 pr-8 pl-4  row-span-2">
              <h1 className="text-[25px] col-span-2 font-extrabold">Contact</h1>
              <div className="h-1 bg-my-orange mt-6 col-span-4"></div>
            </div>
            <span className="col-span-2 pr-8 pl-4 flex items-center">
              <FiPhone size={21} />
              <span className=" text-[16px] text-my-black font-bold ml-12">
                +254700463499
              </span>
            </span>
            <span className="col-span-2 pr-8 pl-4 flex items-center">
              <FiMail size={21} />
              <Link
                to="/"
                className=" text-[16px] text-my-black font-bold ml-12"
              >
                andrewmbugua76@gmail.com
              </Link>
            </span>
            <span className="col-span-2 pr-8 pl-4 flex items-center">
              <BiLocationPlus size={21} />
              <span className=" text-[16px] text-my-black font-bold ml-12">
                Thika road, Kiambu
              </span>
            </span>
            <div className="grid grid-cols-5 place-content-end pb-4 col-span-2 row-span-2 pt-11  pr-8 pl-4">
              <span className="bg-my-orange h-1 col-span-3" />
              <span className="col-span-2" />
            </div>
          </div>

          <form
            onSubmit={this.handleSubmit}
            // action="submit"
            className="grid grid-cols-2 col-span-4 gap-x-10 py-6 pl-12 pr-6"
          >
            {this.renderInput(
              "First Name",
              "username",
              "username",
              "First name"
            )}
            {this.renderInput("Last Name", "username", "username", "Last name")}
            {this.renderInput(
              "Email",
              "usernemail",
              "email",
              "user email",
              true,
              "col-span-2"
            )}
            <Input
              textArea={true}
              inputStyle={"col-span-2"}
              lebel={"Message"}
              placeholder={"Type..."}
            />
            <span />
            <span className="grid grid-cols-2">
              <span />
              <Button
                  onClickButtonHandler={this.sendEmail}
                buttonIcon={<FiSend size={18} />}
                buttonStyle={"ml-4"}
                buttonText={"Send"}
                buttonType="submit"
              />
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
