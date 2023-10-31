import React from "react";

const EventCard = (props) => {
  return (
    <div id={props.title} className=" flex flex-col lg:flex-row justify-between items-center lg:h-[90vh] w-full border-2 border-white">
      <div className="w-1/2 p-3 lg:p-20">
      <img
        src={props.url}
        alt="img"
        class=" object-cover"
        width={450
        }
      />
      </div>
      <div className="lg:w-1/2 flex justify-between flex-col h-full p-4 lg:p-10 ">

      <h3 className="text-center text-2xl underline mb-5">{props.title}</h3>
      <p class="snipcss0-2-22-24 snipcss0-3-24-26">{props.description1}</p>
      <p class="snipcss0-2-22-24 snipcss0-3-24-26">{props.description2}</p>
      <p class="snipcss0-2-22-24 snipcss0-3-24-26">{props.description3}</p>
      <p class="snipcss0-2-22-24 snipcss0-3-24-26">{props.description4}</p>
      <p class="snipcss0-2-22-24 snipcss0-3-24-26">{props.description5}</p>
      {/* <button className="bg-blue-700 rounded-md p-2 w-1/5 self-center text-lg font-bold cursor-pointer hover::bg-blue-800">Know More</button> */}
      </div>
    </div>
  );
};

export default EventCard;
