import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const logo=  `/images/logos/logo.svg`;
  return (
    <div
      className=" text-white bg-lightPrimary grid grid-cols-1 md:grid-cols-3  items-center justify-evenly p-2 md:p-4 "
      id="footer"
    >
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" width={200} />
          <h3 className=" text-2xl text-darkSecondary font-bold font-nunito mb-2 text-center ">
            Chemical Engineering Association
          </h3>
        </div>
        <div className="text-center font-avenir font-semibold text-darkPrimary">
          <p>
            Department of Chemical Engineering,
            <br /> IIT Kharagpur,
            <br /> West Bengal
          </p>
        </div>
      </div>
      <div className="text-center m-10">
        <h4 className="text-center font-avenir font-bold text-xl underline text-darkSecondary ">
          Follow Us
        </h4>

        <div className="grid grid-cols-4 my-0 mx-auto max-w-[700px] text-[2.8em] text-[#0A4D34] ">
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="https://www.facebook.com/cheaiitkgp"
            aria-label="Visit our facebook profile"
            target="_blank"
             className="" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
              <span className="hidden">Facebook</span>
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="http://twitter.com"
            aria-label="Visit our twitter profile"
            target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <span className="hidden">Twitter</span>
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a href="https://www.instagram.com/cheaiitkgp"
            aria-label="Visit our instagram profile"
            target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span className="hidden">Instagram</span>
            </a>
          </div>
          <div className="hover:translate-y-[-10px] transition-all ease-in-out duration-150">
            <a
              href="https://www.linkedin.com/company/chemical-engineering-association-iit-kharagpur"
              aria-label="Visit our LinkedIn profile"
              target="_blank" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="hidden">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-2 pt-0 text-center ">
        <div className=" m-2">
          <h3 className=" md:text-[2.5em] text-darkSecondary font-nunito font-semibold text-[2em]">
            <a href="/contact">Contact Us</a>
          </h3>
          <div className="mt-4 font-avenir text-darkPrimary font-semibold">
            <p>
              Indian Institute of Technology Kharagpur,
              <br />
              Kharagpur, India - 721302
              <br />
              Phone: +91-3222-255221 <br />
              FAX : +91-3222-255303
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
