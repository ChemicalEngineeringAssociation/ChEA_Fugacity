import React, { useEffect } from "react";
import './Home.css'
import About from '../About/About'
const Home = () => {
  const Fugacity = `/images/logos/Fugacity.webp`;
  useEffect(() => {
    window.scroll(0,0)
    
  }, []);
  return (
    <div id="home" className="">
      <section className="mt-16 h-[100vh]  flex justify-center items-center bg-darkSecondary">
        <div className="flex w-full h-[90%] flex-col md:flex-row justify-around">
          <div className="flex justify-center items-center flex-col  h-full sm:w-full md:w-1/2 p-3  text-center">
            <section className=" relative w-full h-1/3 flex justify-center items-center  text-center">  
                <h2 style={{ WebkitTextStroke: "4px #f7f7f7" }} className="text-white text-transparent text-[4.5em] md:text-[8em] absolute ">Fugacity </h2>
                <h2  className="animatEffect text-blue-500 text-[4.5em] md:text-[8em] absolute  ">Fugacity </h2>
            </section>
              <h2 className="text-2xl font-bold mt-6 text-[#B3B3B3] font-avenir"> XX Feb 2023-XX Feb 2023</h2>
        
            <button className="mt-12 text-center">
              <a href="/" className="border-1 font-semibold text-lg border-black bg-gradient-to-b from-[#8F379E] to-[#B92E61] hover-gradient rounded-lg px-5 py-2">
                Register Here
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

      <About/>
      {/* <Merchandise/> */}
    </div>
  );
};

export default Home;
