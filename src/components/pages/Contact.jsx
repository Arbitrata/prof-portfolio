import React, { Component } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "../common/Button";
import Input from "../common/Input";
import Title from "./../common/Title";
import emailjs from "emailjs-com";

class Contact extends Component {
  state = {
    isOpen: true,
    submitted: false,
  };
  renderInput = (lebel, name, type, placeholder, email, inputStyle) => {
    return (
      <Input
        required
        lebel={lebel}
        type={type}
        name={name}
        placeholder={placeholder}
        email={email}
        inputStyle={inputStyle}
      />
    );
  };

  sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_7dzc46j",
        "template_a35aeeu",
        e.target,
        "R9iqdZ-m5qnfm40UJ"
      )
      alert("mail sent suc")
      // .then((res) => {
      //   console.log(res);
      //   alert("email sent");
      // })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div
          id="contact"
          className="w-screen h-screen pb-4 md:pl-[90px] md:mt-0 mt-14 max-w-[1400px] md:pr-[100px] md:grid place-content-center"
        >
          <div className="md:mb-4 mb-10 -ml-6">
            <Title title={"Get in touch"} />
          </div>
          <div className="rounded-[20px] md:grid grid-cols-7 divide-x divide-my-white pl-8 pr-8 py-6 bg-my-black bg-opacity-10">
            <div className=" md:grid grid-cols-2 grid-rows-7 px-6 pt-3 pb-2 col-span-3">
              <div className="grid grid-cols-6 col-span-2 md:pr-8 md:pl-4 md:mb-0 mb-6 row-span-2">
                <h1 className="text-[25px] col-span-2 font-extrabold">
                  Contact
                </h1>
                <div className="h-1 bg-my-orange mt-6 col-span-4"></div>
              </div>
              <span className="col-span-2 md:pr-8 md:pl-4 md:mb-0 mb-6  flex items-center">
                <FiPhone size={21} />
                <span className=" text-[16px] text-my-black font-bold ml-12">
                  +254700463499
                </span>
              </span>
              <span className="col-span-2 md:pr-8 md:pl-4 md:mb-0 mb-6  flex items-center">
                <FiMail size={21} />
                <Link
                  to="/"
                  className=" text-[16px] text-my-black font-bold ml-12"
                >
                  andrewmbugua76@gmail.com
                </Link>
              </span>
              <span className="col-span-2 md:pr-8 md:pl-4 flex items-center">
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
              onSubmit={this.sendEmail}
              className="md:grid grid-cols-2 col-span-4 gap-x-10 md:py-6 py-14 md:pl-12 md:pr-6"
            >
              {this.renderInput(
                "First Name",
                "firstname",
                "text",
                "First name"
              )}
              {this.renderInput("Last Name", "lastname", "text", "Last name")}
              {this.renderInput(
                "Email",
                "useremail",
                "text",
                "user email",
                true,
                "col-span-2"
              )}
              <Input
                textArea={true}
                inputStyle={"col-span-2"}
                lebel={"Message"}
                placeholder={"Type..."}
                name="message"
              />
              <span />
              <span className="md:grid grid-cols-2">
                <span />
                <Button
                  buttonIcon={<FiSend size={18} />}
                  buttonStyle={"ml-4"}
                  buttonText={"Send"}
                  buttonType="submit"
                />
              </span>
              {this.state.submitted && <Link to={"home"}  />}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
