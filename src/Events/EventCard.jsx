import React from "react";

const EventCard = (props) => {
  return (
    <div
      id={props.title}
      className="my-2 flex flex-col lg:flex-row justify-between items-center lg:h-[90vh] w-full border-y-2 border-lightSecondary"
    >
      <div className="w-full lg:w-1/2 p-3 lg:p-20">
        <img
          src={props.url}
          alt="img"
          className=" object-cover"
          width={450}
          loading="lazy"
        />
      </div>
      <div className="lg:w-1/2 flex justify-between flex-col h-full p-4 lg:p-10 ">
        <h3 className="text-center font-nunito text-darkMain text-2xl underline mb-5">{props.title}</h3>
        <p className="font-avenir text-lightSecondary">{props.description1}</p>
        <p className="font-avenir text-lightSecondary">{props.description2}</p>
        <p className="font-avenir text-lightSecondary">{props.description3}</p>
        <p className="font-avenir text-lightSecondary">{props.description4}</p>
        <p className="font-avenir text-lightSecondary">{props.description5}</p>
        {/* <button className="bg-blue-700 rounded-md p-2 w-1/5 self-center text-lg font-bold cursor-pointer hover::bg-blue-800">Know More</button> */}
      </div>
    </div>
  );
};

export default EventCard;
