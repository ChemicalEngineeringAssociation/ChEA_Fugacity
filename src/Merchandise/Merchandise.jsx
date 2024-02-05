import React, { useEffect } from "react";
// import { useState } from "react";
import './Merchandise.css'
import MerchCard from "./MerchCard";

const Merchandise = () => {
  const merch_front = `/images/varsity_(1).png`
  const merch_back = `/images/varsity_(2).png`
  const bg = `/images/bg.gif`
  // const [isMore, setIsMore] = useState(false);
  useEffect(() => {
    window.scroll(0,0)
  }, []);

  return (
    <div className='mt-24 w-full bg-darkSecondary pb-5' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`, backgroundSize: 'cover'  }}>
        <h1 className='text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-3 p-4'>Merchandise</h1>
        <div className="flex justify-center items-center">
        <p className="text-white p-6 text-center">
        Hola Chemical Engineers! The wait is finally over, ChEA IIT Kharagpur proudly unveils the merchandise for 2023! 
        </p>
        </div>
         <div id='varsity' className='flex flex-col gap-2 lg:flex-row justify-around items-center mt-10 max-w-[1000px] mx-auto'>
             <MerchCard name="Front" position="Winter Merchandise" email="XXXXX@che.iitkgp.ac.in" phone="XXXXXX-XXXXX" url={merch_front} />
             <MerchCard name="Back" position="Winter Merchandise" email="XX@che.iitkgp.ac.in" phone="XXXXXX-XXXXX" url={merch_back} />
          </div>
          <div className='flex justify-center items-center'>
          <button className="mt-10 px-100 py-500 text-center">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDGIfinEMyfPeJ-tGQl5UXJHXFaYVh6vBzE82tDfrFMqGybA/viewform" className=" from-[#8F379E] to-[#B92E61] hover-gradient rounded-lg px-5 py-2" style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
                margin: '20px',
                padding: '15px 25px',
                transition: 'background-color 0.3s ease',
              }} rel="noreferrer">
              Buy Now
              </a>
            </button>
            </div>
    </div>
  );
};

export default Merchandise;
