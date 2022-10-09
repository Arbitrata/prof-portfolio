import React, { Component } from "react";
import Carousel from "react-card-carousel";
import Cards from "../common/Cards";
import Title from "./../common/Title";
import akan from "../common/akan-app-pic.png";
import duka from "../common/duka.png";
import crud from "../common/crud-app-pic.png";
import booking from "../common/room.booking-pic.png";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <div id="projects" className="bg-my-white h-screen ">
        <div className="h-[120px] pt-4 block  w-full pl-24">
          <div className="text-my-black text-[20px] text-left font-extrabold ml-8">
            Resent project
          </div>
          <Title title={"My Portfolio"} />
        </div>
        <div></div>

        <div className="relative h-[60vh] flex-1  flex items-center mt-12">
          <Carousel
            showDots={true}
            spread={"wide"}
            disable_box_shadow={true}
            disable_fade_in={true}
          >
            <Cards
              image={crud}
              to="https://andy-crud-application.herokuapp.com/"
              projectCard={true}
              title={"CRUD-Application"}
              text="Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem."
            />
            <Cards
              to="https://arbitrata.github.io/room-booking/"
              image={booking}
              projectCard={true}
              title={"Room Bookimg Application"}
              text="Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem."
            />
            <Cards
              to="https://arbitrata.github.io/akan-project/"
              image={akan}
              projectCard={true}
              title={"Akan-name Generator"}
              text="Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem."
            />

            <Cards
              image={duka}
              to="https://arbitrata.github.io/bzproject-1/"
              projectCard={true}
              title={"Duka Application"}
              text="Lorem ipsum , dolor sit amet, consectetur, adipiscing elit. Et
                dui, ullamcorper, ut quis congue, purus volutpat, posuere lorem."
            />
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Portfolio;
