import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./navElement";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const logo = `/images/logos/logo.svg`;
  const hamburger = `/images/download.svg`;
  const crossMark = `/images/xmark.svg`;
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <nav className="Navbar flex h-[140px] z-10 justify-between items-center fixed top-0 w-full py-4 px-4">
          <Link
            to="/"
            className="text-center  font-bold  md:ml-6 md:mr-10 mx-2 flex items-center text-[#0A4D34] font-nunito text-xl"
          >
            <img
              className="inline rounded-full  shadow-white"
              src={logo}
              alt="logo"
              width="100"
            />
            {/* <h1 className="md:ml-3 lg:text-2xl ">

             Chemical Engineering Association
            </h1> */}
          </Link>
          {/* Mobile menu */}

          <div
            onClick={() => setIsOpen(true)}
            className={`${
              isOpen ? "hidden" : "block"
            } transition-all duration-300 ease-in-out lg:hidden mr-4`}
          >
            <img src={hamburger} alt="hamburger" width={40} />
          </div>

          <ul className="hidden font-nunito text-white lg:flex flex-col md:flex-row flex-1 justify-evenly items-10 max-w-[1000px]">
            {NavItem.map((item) => (
              <li
                key={item.title}
                className={`${
                  pathname.pathname === item.href
                    ? "font-bold text-2xl "
                    : "font-semibold text-xl "
                } hover:text-2xl transition-all duration-300 ease-in-out hover:font-bold`}
              >
                <Link to={item.href} className="">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div
          onClick={() => setIsOpen(false)}
          className={`${
            isOpen ? "block" : "hidden"
          } overflow-hidden transition-display duration-1000 ease-in-out flex flex-col lg:hidden z-20 w-full shadow-md min-h-screen fixed  top-0 bg-lightPrimary/40 right-0`}
        >
          <div className="bg-black fixed top-0 right-0 w-2/3 h-full">
            <div onClick={() => setIsOpen(false)} className=" lg:hidden m-2">
              <img src={crossMark} alt="hamburger" width={30} />
            </div>
            <ul className=" font-nunito  text-white flex flex-col gap-2   items-center ">
              {NavItem.map((item) => (
                <li
                  key={item.title}
                  className={`${
                    pathname.hash === item.href
                      ? "text-2xl bold"
                      : "font-semibold text-xl"
                  }  transition-all ease-in-out duration-300 hover:text-2xl `}
                >
                  <Link to={item.href} className="">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
