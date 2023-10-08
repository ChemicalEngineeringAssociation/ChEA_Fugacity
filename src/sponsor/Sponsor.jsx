import { useState } from "react";

const Sponsers = () => {
    const [year, setYear] = useState(2023);
    return (
        <div className="w-full h-[90vh] mt-16 text-white bg-[#010527]">
            <div className="flex flex-col justify-center items-center relative w-[40%] h-[80%] ">
                {year===2022 &&<div className="flex gap-20">
                    <img className="bg-white w-[15em] h-[13em] border-r-4 " src="https://www.iiche.org.in/images/icons/logoiiche.png" alt="sponsName"/>
                    <img className="bg-white w-[15em] h-[13em] border-r-4 " src="https://www.gammaprep.com/assets/images/Gamma_Logo.svg" alt="sponsName" />
                    <img className="bg-white w-[15em] h-[13em] border-r-4 " src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" alt="sponsName" />
                    <img className="bg-white w-[15em] h-[13em] border-r-4 " src="https://d24uab5gycr2uz.cloudfront.net/uploads/white_theme/images/elm_logo.svg" alt="sponsName" />
                </div>}
                {year===2023 &&<div className="flex gap-20">
                    <img src="" alt="sponsName" />
                    <img src="" alt="sponsName" />
                </div>}
                {/* position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25vw; */}
                <div className="">
                    <button onClick={()=>setYear(2022)}>
                        2022
                    </button>
                    <button onClick={()=>setYear(2023)}>
                        2023
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sponsers;