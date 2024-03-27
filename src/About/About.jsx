import React from "react";
import Structure from "./structure";
import Structure2 from "./Structure2";

const About = () => {
  const backgroundImage = `/images/back_about2.png`;
  return (
    <div
      id="about"
      className=" w-full bg-black"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-3xl font-semibold text-center p-2 pt-4 text-darkMain font-nunito decoration-solid">
        About Us
      </h1>
      <Structure
        head="Indian Institute of Technology Kharagpur"
        text="Indian Institute of Technology Kharagpur (IIT Kharagpur) is a public technical university established by the government of India in Kharagpur, West Bengal, India. Established in 1951, the institute is the first of the IITs to be established and is recognised as an Institute of National Importance. In 2019 it was awarded the status of Institute of Eminence by the government of India."
        url="/images/logos/kgpLogo.svg"
      />
      <Structure2
        head="Indian Institute of Chemical Engineers"
        text="The Indian Institute of Chemical Engineers (IIChE) is the professional body for chemical engineers in India. The headquarter of IIChE is in the campus of Jadavpur University, Kolkata. The organization has 42 regional centers along with 172 student chapters spread throughout India. The institutions membership comprises academics, professionals from the chemical industry, researchers, and students."
        url="/images/logos/logoiiche.svg"
      />
      <Structure
        head="Chemical Engineering Association , IIT Kharagpur"
        text="Chemical Engineering Association, IIT Kharagpur( also known as ChEA-IITKGP) is the Official Student Body of the Department of Chemical Engineering, IIT Kharagpur. At present, the department is deeply involved in activities in the field of Pollution Control, Transport Processes, Coal and Petroleum Technology, and Membrane Processes."
        url="/images/logos/logo.svg"
      />
      {/* <div className="grid sm:grid-cols-1 lg:grid-cols-3 justify-between p-1 md:p-10">
        {Details.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            logo={item.logo}
          />
        ))}
      </div> */}

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
