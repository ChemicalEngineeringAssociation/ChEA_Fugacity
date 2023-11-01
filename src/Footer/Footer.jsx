import React from "react";
import logo from "../logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className=" bg-[#031b30] text-white grid grid-cols-1 md:grid-cols-3  items-center justify-evenly p-2 md:p-4 "
      id="footer"
    >
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" width={200} />
          <h3 className="text-[#03a9f4] text-2xl mb-2 text-center ">
            Chemical Engineering Association
          </h3>
        </div>
        <div className="text-center text-xl text-semibold text-slate-300">
          <p>
            Department of Chemical Engineering,
            <br /> IIT Kharagpur,
            <br /> West Bengal
          </p>
        </div>
      </div>
      <div className="text-center m-10">
        <h4 className="text-center text-semibold text-xl underline">
          Follow Us
        </h4>

        <div className="grid grid-cols-4 my-0 mx-auto max-w-[700px] text-[2.8em] text-white ">
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
      <div className="p-2 pt-0 text-center ">
        <div className=" m-2">
          <h3 className="text-[#03a9f4] md:text-[2.5em] text-[2em]">
              <a href="/contact">Contact Us</a>
          </h3>
          <p>
            Indian Institute of Technology Kharagpur,
            <br />
            Kharagpur, India - 721302
            <br />
            Phone: +91-3222-255221 <br />
            FAX : +91-3222-255303
          </p>
        </div>
        {/* <div className="">
          <a
            href="/contact/#tech"
            className="block cursor-pointer text-[#03a9f4]"
          >
            Core Team
          </a>
          <a
            href="/contact/#tech"
            className="block cursor-pointer text-[#03a9f4]"
          >
            Tech Team
          </a>
          <a
            href="/conatct/#design"
            className="block cursor-pointer text-[#03a9f4]"
          >
            Design Team
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
