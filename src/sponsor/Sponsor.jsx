import { useState } from "react";
import nfit from "../images/nfint-logo.5cc85aabb7c4fa57db1a.png";
import msTeamLogo from "../images/Microsoft_Office_Teams_(2018–present).svg";
import gamaLogo from "../images/Gamma_Logo.svg";
import elmLogo from "../images/Gamma_Logo.svg";
import logoIiiche from "../logos/logoiiche.svg";

const Sponsers = () => {
  const [year, setYear] = useState(2023);
  const [isMore, setIsMore] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center  mt-24  bg-darkSecondary">
      <h1 className="text-center text-3xl md:text-5xl font-bold font-nunito text-darkMain my-5">
        Sponsors
      </h1>
      <div className="flex justify-center items-center m-5 gap-10">
        <button
          className={`px-5 rounded-lg  py-2 bg-darkPrimary text-lightPrimary m-2 font-bold text-xl ${year===2022 && "underline"}`}
          onClick={() => setYear(2022)}
        >
          2022
        </button>
        <button
          className={`px-5 rounded-lg bg-darkPrimary text-lightPrimary py-2  m-2 font-bold text-xl ${year===2023 && "underline"}`}
          onClick={() => setYear(2023)}
        >
          2023
        </button>
      </div>
      <div className="flex  justify-center items-center w-full my-5">
        {year === 2022 && (
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center ">
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md mx-2 mb-3"
              src={logoIiiche}
              alt="sponsName"
            />
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md mx-2 mb-3"
              src={gamaLogo}
              alt="sponsName"
            />
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md  mx-2 mb-3"
              src={msTeamLogo}
              alt="sponsName"
            />
            <img
              className="bg-white w-[15em] h-[13em] p-5 rounded-md  mx-2 mb-3"
              src={elmLogo}
              alt="sponsName"
            />
          </div>
        )}
        {year === 2023 && (
          <div className="w-full flex flex-col justify-evenly items-center text-lightSecondary font-avenir ">
            <img src={nfit} className="w-[70%]  rounded-lg " alt="sponsName" />
            {isMore ?
                <div className="w-[70%] text-justify my-5 text-md" onClick={()=>setIsMore(false)}>
              <p >
                Navin Fluorine International Ltd (NFIL) is one of the largest
                Indian manufacturer of fluorochemicals. It belongs to the
                Padmanabh Mafatlal Group – one of India’s oldest industrial
                houses. Established in 1967, NFIL operates one of the largest
                complexes in India with manufacturing locations at Surat & Dahej
                (Gujarat), a cGMP compliant facility at Dewas (Madhya Pradesh)
                and a State of the art, DSIR approved R&D centre - Navin
                Research Innovation Center (NRIC), at Surat. Our subsidiary in
                UK, Manchester Organics Limited, augments our R&D strength and
                works with innovator customers on early discovery phase. The
                Dewas facility offers the only cGMP compliant high pressure
                fluorination capabilities in India.
              </p>
              <br />
              <p>
                NFIL pioneered manufacturing of refrigerant gases in India. It
                manufactures and markets commodities like refrigerants and
                inorganic fluorides to niche fluorine-based products/solutions
                in Life Sciences & Crop Sciences in a responsible manner. HPP,
                our emerging business unit would expand our footprints in
                High-Performance Products. We have developed specialized
                products for futuristic applications in electronics, 5G, EV,
                renewables, etc. which lay strong foundation for our business
                growth.
              </p>
            </div>
             
             :
             <div className="w-[70%] text-justify my-5 text-md">
              <p>
                Navin Fluorine International Ltd (NFIL) is one of the largest
                Indian manufacturer of fluorochemicals. It belongs to the
                Padmanabh Mafatlal Group – one of India’s oldest industrial
                houses. Established in 1967 
                <button className="ml-2 text-slate-500" onClick={()=>setIsMore(true)}>read more...</button>
              </p>
            </div>
             }
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Sponsers;
