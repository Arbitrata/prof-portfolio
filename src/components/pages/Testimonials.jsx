import React from "react";
import { Tab } from "@headlessui/react";
import Cards from "./../common/Cards";
import DivShadow from "../common/DivShadow";
import Title from "../common/Title";

export default function Testimonials() {
  const testimonials = [
    {
      title: "It was a great experience!",
      text: "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.",
    },
    {
      title: "Best product!",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
    {
      title: "Great design!",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
    },
    {
      title: "Testimonials",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
  ];

  return (
    <div
      id="testimonials"
      className="block w-screen h-screen bg-my-lightgray py-2 "
    >
      <div className="ml-[100px]">
        <Title title={"Testimonials"} />
      </div>

      <div className="flex pr-[100px] pl-[150px] h-[80%] mt-14">
        <Tab.Group defaultIndex={3}>
          <div className="block w-[34%] pb-2 max-h-[400px] shadow-lg shadow-my-black pl-5 pr-6 pt-4 overflow-y-auto border-r-2 border-my-black border-opacity-40 mr-10 ">
            <Tab.List>
              <Tab className={""}>
                <Cards
                  testimonialCard={true}
                  image="https://assets.vogue.com/photos/620ea213975b70b4370ad5c5/master/pass/MCDSEAN_ZU005.jpg"
                  name={"Andy"}
                  title={"Software developer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Andy"}
                  title={"Software developer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Andy"}
                  title={"Software developer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Andy mbugua"}
                  title={"Software developer"}
                />
              </Tab>
            </Tab.List>
          </div>
          <div className=" w-[60%] place-content-center  rounded-lg h-[100%] pl-[60px] pt-[-0px] text-left">
            <Tab.Panels>
              {testimonials.map((t) => (
                <Tab.Panel key={t.title}>
                  <DivShadow  text={t.text} title={t.title} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}
