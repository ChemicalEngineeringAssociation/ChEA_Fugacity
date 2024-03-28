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
          alt={props.title}
          height={450}
          width={450}
          loading="lazy"
          title={props.title}
        />
      </div>
      <div className="lg:w-1/2 flex justify-center flex-col h-full p-4 lg:p-10 ">
        <h2 className="text-center font-nunito text-darkMain text-2xl underline mb-5">
          {props.title}
        </h2>
        <p className="font-avenir text-lightSecondary">{props.description1}</p>
        <p className="font-avenir text-lightSecondary">{props.description2}</p>
        <p className="font-avenir text-lightSecondary">{props.description3}</p>
        <p className="font-avenir text-lightSecondary">{props.description4}</p>
        <p className="font-avenir text-lightSecondary">{props.description5}</p>
        <button
          className="rounded-[4px] bg-blue-500 mt-5 text-lightPrimary py-2 font-bold text-xl hover:bg-[#20CD8D] focus:ring-4 focus:outline-none focus:ring-blue-200 sm:w-auto px-5 text-center"
          style={{
            width: "fit-content",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <a href={props.link} target="blank">
            Register here
          </a>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
