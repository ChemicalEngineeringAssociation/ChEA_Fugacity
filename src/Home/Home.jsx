import React, { useEffect } from "react";

import TypingEffect from "react-typing-effect";
import "./Home.css";
import About from "../About/About";
const Home = () => {
  const Fugacity = `/images/logos/Fugacity.webp`;
  const backgroundImage = `/images/Back.png`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="home" className="app-container">
      <section
        className=" h-[100vh]  flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex w-full h-[90%] flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center flex-col  h-full sm:w-full md:w-1/2 p-3  text-center">
            <section className=" relative w-full h-1/4 flex justify-center items-center  text-center">
              <h2
                style={{ WebkitTextStroke: "4px #f7f7f7" }}
                className="text-white text-transparent text-[4.5em] md:text-[8em] absolute "
              >
                Fugacity{" "}
              </h2>
              <h2 className="animatEffect text-blue-500 text-[4.5em] md:text-[8em] absolute  ">
                Fugacity{" "}
              </h2>
            </section>
            <h2 className="text-2xl font-bold mt-5 text-[#B3B3B3] font-avenir">
              <TypingEffect
                text={["30th Mar 2024-31st Mar 2024", "Register Now!"]}
                speed={100}
                eraseDelay={1000}
              />
            </h2>
          </div>

          {/* <div className=" flex justify-center items-center  sm:w-full md:w-1/2 h-full col-lg-6  order-1 order-lg-2 header-img text-center">
            <img
              src={Fugacity}
              className=""
              alt="logo"
              width={400}
            />
          </div> */}
        </div>
      </section>
      <About />
      {/* <Merchandise/> */}
    </div>
  );
};

export default Home;
