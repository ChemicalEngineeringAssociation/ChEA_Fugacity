import React, { useEffect, useState } from "react";
import AOS from "aos";
import ScheduleEle from "./scheduleEle";

function Schedule() {
  const [isHovered, setIsHovered1] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const backgroundImage = `/images/back_about2.png`;
  const [day, setDay] = useState("Day-1");
  const divStyle = {
    backgroundColor: isHovered ? "rgba(0,0,0,0.5)" : "transparent",
    transition: "background-color 0.3s ease",
    display: "flex",
    flexDirection: "row",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="pt-28 w-full bg-darkSecondary pb-5" id="schedule">
      <h1
        className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4"
        data-aos="fade-down"
      >
        Schedule
      </h1>
      <div className="flex justify-center items-center gap-10">
        <button
          className={`px-5 rounded-lg  py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${
            day === "Day-1" && "underline"
          }`}
          onClick={() => setDay("Day-1")}
          data-aos="fade-right"
        >
          Day 1
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${
            day === "Day-2" && "underline"
          }`}
          onClick={() => setDay("Day-2")}
          data-aos="fade-left"
        >
          Day 2
        </button>
      </div>

      {day === "Day-1" && (
        <>
          <div
            id="Day-1"
            className="flex flex-col gap-2 justify-around items-center mt-10 max-w-[800px] rounded-[4px] p-4 bg-darkPrimary mx-auto"
            role="tabpanel"
            style={{
              position: "relative",
            }}
          >
            <ScheduleEle
              time="10:00 AM"
              event="Inauguration"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="11:00 AM"
              event="Keynote"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="12:00 PM"
              event="Lunch"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="01:00 PM"
              event="Workshop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="03:00 PM"
              event="Networking"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </>
      )}
      {day === "Day-2" && (
        <>
          <div
            id="Day-2"
            className="flex flex-col gap-2  justify-around items-center mt-10 max-w-[800px] rounded-[4px] p-4 bg-darkPrimary mx-auto"
          >
            <ScheduleEle
              time="10:00 AM"
              event="Inauguration"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="11:00 AM"
              event="Keynote"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="12:00 PM"
              event="Lunch"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="01:00 PM"
              event="Workshop"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <ScheduleEle
              time="03:00 PM"
              event="Networking"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Schedule;
