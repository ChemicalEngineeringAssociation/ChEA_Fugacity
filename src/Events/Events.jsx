import React from "react";
import eventDetails from "./eventDetails";
import EventCard from "./EventCard";
import EventShortCard from "./EventShortCard";
const Events = () => {
  return (
    <div className="mt-16  flex flex-col justify-center items-center bg-[#010527]">
      <h1 className="text-center text-5xl font-bold text-white my-5">Events</h1>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-3 m-10">
        {
          eventDetails.map((event) => {
            return(
              <EventShortCard title={event.title} url={event.url2} />
            )
          })
        }
      </div>
      <div className="flex w-full flex-col text-white m-2 lg:m-10 ">
        {eventDetails.map((event) => {
          return (
            <EventCard
              title={event.title}
              description1={event.description1}
              description2={event.description2}
              description3={event.description3}
              description4={event.description4}
              description5={event.description5}
              url={event.url1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
