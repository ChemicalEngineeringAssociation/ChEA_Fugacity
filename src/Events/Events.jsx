import React, { useEffect } from "react";
import eventDetails from "./eventDetails";
import EventCard from "./EventCard";
import EventShortCard from "./EventShortCard";
import AOS from "aos";
const Events = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="pt-36 flex flex-col justify-center items-center bg-darkSecondary">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-darkMain font-nunito my-5">
        Events
      </h1>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-3 m-10">
        {eventDetails.map((event) => {
          return <EventShortCard title={event.title} url={event.url2} />;
        })}
      </div>
      {/* <ShortEvent/> */}
      <ul className="flex w-full flex-col m-2 lg:m-10 ">
        {eventDetails.map((event) => {
          return (
            <div>
              <li key={event.title}>
                <EventCard
                  title={event.title}
                  description1={event.description1}
                  description2={event.description2}
                  description3={event.description3}
                  description4={event.description4}
                  description5={event.description5}
                  url={event.url1}
                  link={event.link}
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
