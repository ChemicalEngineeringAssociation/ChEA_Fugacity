import React, { useEffect, useState } from "react";
import AOS from "aos";

function ScheduleEle(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
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
    <>
      <div
        className="row w-full flex flex-row schedule-item text-white p-[3px] md:p-[6px] rounded"
        style={{
          backgroundColor: isHovered ? "transparent" : "rgba(0,0,0,0.5)",
          transition: "background-color 0.3s ease",
        }}
        data-aos="fade-up"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="col-md-2 text-lg w-[25%]"
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: 30,
            marginLeft: 20,
          }}
        >
          <time>{props.time}</time>
        </div>
        <div className="col-md-100 w-[75%]">
          <h2
            style={{
              fontWeight: "bold",
            }}
            className="bg text-darkMain text-xl"
          >
            {props.event}
          </h2>
          <p className="text-[16px]">{props.description}</p>
        </div>
      </div>
      <hr
        style={{ width: isMobile ? "100%" : "70%" }}
        data-aos="fade-left"
      ></hr>
    </>
  );
}

export default ScheduleEle;
