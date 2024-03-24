import React, { useEffect } from "react";

import TypingEffect from "react-typing-effect";
import './Home.css';
import About from '../About/About';
import VideoPlayer from '../Video/Video';
const Home = () => {
  const Fugacity = `/images/logos/Fugacity.webp`;
  const backgroundImage = `/images/bg3.gif`;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="home" className="app-container">
      <section className="mt-16 h-[91vh]  flex justify-center items-center bg-darkSecondary"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, backgroundSize: 'cover' }}
      >
        <div className="flex w-full h-[90%] flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center flex-col  h-full sm:w-full md:w-1/2 p-3  text-center">
            <section className=" relative w-full h-1/4 flex justify-center items-center  text-center">
              <h2 style={{ WebkitTextStroke: "4px #f7f7f7" }} className="text-white text-transparent text-[4.5em] md:text-[8em] absolute ">Fugacity </h2>
              <h2 className="animatEffect text-blue-500 text-[4.5em] md:text-[8em] absolute  ">Fugacity </h2>
            </section>
            <h1 className="text-2xl font-bold mt-5 text-[#B3B3B3] font-avenir">
              <TypingEffect
                text={['Coming Soon!', 'Stay Tuned', 'Register Now', 'For More Info']}
                speed={100}
                eraseDelay={1000}
              />
            </h1>

            <button className="mt-10 px-100 py-500 text-center">
              <a href="/" className="from-[#e299e2] to-[#db80a0] hover-gradient rounded-lg px-5 py-2" style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid white',
                margin: '10px',
                padding: '15px 25px',
                transition: 'background-color 0.3s ease, color 0.3s ease', // Add color transition
                display: 'inline-block', // Ensure button behaves as inline-block
                textDecoration: 'none', // Remove default link underline
              }}>
                <b>Register Now!</b>
              </a>
            </button>

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
     <VideoPlayer/>
      <About />
      {/* <Merchandise/> */}
    </div>
  );
};

export default Home;
