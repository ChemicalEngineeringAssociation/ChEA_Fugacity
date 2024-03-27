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
    <div
      style={{
        position: "relative",
        marginBottom: 50,
        marginLeft: isMobile ? 20 : 200,
        marginRight: isMobile ? 20 : 200,
      }}
    >
      <div
        style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}
      >
        <div
          style={{ position: "relative", marginRight: isMobile ? 0 : 100 }}
          data-aos="fade-right"
        >
          <img
            src={props.url}
            alt="PropsImage"
            style={{
              transition: "transform 0.3s",
              transformOrigin: "center",
              maxWidth: isMobile ? 200 : 300,
              marginRight: isMobile ? "auto" : 0,
              marginLeft: isMobile ? "auto" : 0,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.2)";
              e.target.style.zIndex = "1";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.zIndex = "0";
            }}
          />
        </div>
        <div>
          <div
            style={{
              animation: "slide-in-right 4s ease-in-out",
              animationFillMode: "forwards",
              marginTop: isMobile ? 20 : 100,
            }}
            data-aos="fade-down"
          >
            <h2
              style={{ color: "white", fontSize: isMobile ? "20px" : "25px" }}
              className="font-semibold text-center p-2 pt-4 text-darkMain font-nunito decoration-solid"
            >
              {props.head}
            </h2>
            {isMobile && (
              <p
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
