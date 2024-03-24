import React from "react";
import { Details } from "./details";
import Card from "./Card";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full bg-black
     "
    >
      <h1 className="text-3xl font-semibold text-center p-2 pt-4 text-darkMain font-nunito decoration-solid">
        About Us
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 justify-between p-1 md:p-10">
        {Details.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            logo={item.logo}
          />
        ))}
      </div>

      <div className="">
        <h1 className="text-center text-3xl font-bold text-darkMain font-nunito ">
          Our Vision
        </h1>
        <div className="p-4 md:p-10 text-slate-400 font-avenir text-md">
          <div className=" text-justify">
            <p>
              Fugacity is the departmental fest of the Chemical Engineering
              Department, IIT Kharagpur, organised by the Chemical Engineering
              Association and Kharagpur Regional Chapter, Indian Institute of
              Chemical Engineers. The fest is to be held on 12th and 13th
              February this year in a virtual mode. Over 1500 enthusiastic
              participants from various IITs, NITs and other reputed colleges
              across the country will be competing in an array of events lined
              up over the two days. Esteemed Professors across the globe,
              Industry Experts and emerging Researchers will grace the fest will
              their insightful lectures and warm presence. We cordially invite
              you to our fest and request you to support our endeavours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
