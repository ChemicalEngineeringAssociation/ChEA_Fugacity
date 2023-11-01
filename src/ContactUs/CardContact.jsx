import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CardContact = (props) => {
  return (
    <div className=" cardParent relative h-[400px] w-[320px] ">
      <div className="frontFace card absolute h-full w-full p-2 bg-darkPrimary rounded-lg">
        <img
          loading="lazy"
          className=" h-full w-full object-cover rounded-10"
          src={props.url}
          alt="img"
        />
      </div>
      <div className="backFace text-center card absolute h-full w-full p-2 bg-darkPrimary rounded-lg">
        <img
          loading="lazy"
          className="h-[150px] w-[150px] p-1 rounded-full bg-lightPrimary" 
          src={props.url}
          alt="img"
        />
        <h2 className="text-2xl font-bold text-darkMain font-nunito my-2">{props.name}</h2>
        <h3 className="text-xl font-avenir font-semibold text-slate-400 ">
          {props.position}
        </h3>
        <h3 className="text-lg font-avenir text-slate-200 text-center">
          +91-{props.phone}
        </h3>
        <h3 className="text-lg text-slate-100 mb-2 font-avenir">{props.email}</h3>
        <div className="grid grid-cols-4 my-1 mx-auto w-[90%] text-[2em] text-white ">
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="http://facebook.com" className="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="http://twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="http://instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="http://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
