import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Structure(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const isMobile = windowWidth <= 768;

  return (
    <div className="relative mb-5 border-b md:border-none mx-2 p-4 md:p-6">
      <div
        className={`flex flex-col ${
          props.reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative" data-aos="fade-right">
          <img
            src={props.url}
            alt={props.head}
            title={props.head}
            style={{
              transition: "transform 0.3s",
              transformOrigin: "center",
            }}
            className="m-auto md:m-0 max-w-[200px]"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.zIndex = "1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.zIndex = "0";
            }}
            width={200}
            height={200}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col mx-5">
          <div
            style={{
              animation: "slide-in-right 4s ease-in-out",
              animationFillMode: "forwards",
            }}
            data-aos="fade-down"
            className="mt-10 md:m-0 flex flex-col"
          >
            <h4 className="font-semibold text-2xl my-5 text-center p-2 pt-4 text-darkMain font-nunito decoration-solid">
              {props.head}
            </h4>
            {isMobile && (
              <p
                className="text-justify"
                style={{ color: "white", fontSize: isMobile ? "15px" : "17px" }}
              >
                {props.text}
              </p>
            )}
          </div>
          {!isMobile && (
            <div style={{ marginLeft: 20 }} data-aos="fade-down">
              <p
                style={{ color: "white", fontSize: isMobile ? "15px" : "17px" }}
                className="text-justify"
              >
                {props.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Structure;
