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
      title: "Great Worker!",
      text: "I've known Andrew for almost a year and have found him to be hardworking, goal-oriented, tenacious, and an achiever. I believe that his academic credentials and technical skills will be extremely valuable to you as a client and to your company.",
    },
    {
      title: "Testimonials",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
    {
      title: "Testimonials",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
    {
      title: "Testimonials",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
    {
      title: "Testimonials",
      text: "There is absolutely no doubt in my mind that without Flowbite, I would not have been able to make the jump to Ueno, a digital agency I started in 2014. The work I got through Flowbite made it possible for me to have something to build on. We now have about 45 people on our team, a lot of whom we found and recruited through Flowbite",
    },
  ];

  return (
    <div
      id="testimonials"
      className="block w-screen md:h-screen md:pt-0 pt-14 h-fit bg-my-lightgray md:pb-0 pb-14 max-w-[1400px]"
    >
      <div className="md:ml-[100px]">
        <Title title={"Testimonials"} />
      </div>

      <div className="md:flex md:pr-[100px] md:pl-[150px] w-fit md:h-[60%] md:mt-14 mt-14">
        <Tab.Group defaultIndex={3}>
          <div className="md:block flex md:w-[40%] w-[100%] pb-2 md:max-h-[400px] overflow-y-auto  max-h-[190px] mt-6 shadow-lg shadow-my-black py-4">
            <Tab.List className={""}>
              <Tab >
                <Cards
                  testimonialCard={true}
                  image="https://assets.vogue.com/photos/620ea213975b70b4370ad5c5/master/pass/MCDSEAN_ZU005.jpg"
                  name={"James Gichimu"}
                  title={"CEO and Co-founder Apprentice cloud limited"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Edwin Muriri"}
                  title={"Software Engineer & a Technical mentor"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Timothy Munene"}
                  title={"Software developer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Alex Mwangi"}
                  title={"Ui/ux designer"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Josephine Wairimu"}
                  title={"Technical Mentor"}
                />
              </Tab>
              <Tab>
                <Cards
                  testimonialCard={true}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0K34qUFH8QdwAVBFqMfY9p93E5M4_-IUcaQ&usqp=CAU"
                  name={"Josephine Wairimu"}
                  title={"Technical Mentor"}
                />
              </Tab>
            </Tab.List>
          </div>
          <div className="md:w-[60%] place-content-center  rounded-lg h-[100%] md:pl-[60px] pt-[-0px] text-left">
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
