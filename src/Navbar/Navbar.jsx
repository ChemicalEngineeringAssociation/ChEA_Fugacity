import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./navElement";
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const logo = `/images/logos/logo.svg`
  const hamburger = `/images/download.svg`
  const crossMark = `/images/xmark.svg`
  const pathname = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <nav className="flex h-24 z-10
         justify-between items-center bg-black bg-opacity-100
         fixed top-0  w-full
         ">
          <Link to="/" className="text-center font-bold p-2 md:ml-6 md:mr-10 flex items-center text-[#0A4D34] font-nunito text-xl">
            <img
              className="inline rounded-full shadow-white"
              src={logo}
              alt="logo"
              width="70"
            />
            {/* <h1 className="md:ml-3 lg:text-2xl ">

             Chemical Engineering Association
            </h1> */}
          </Link>
          {/* Mobile menu */}
          
          <div onClick={() => setIsOpen(true)} className={`${isOpen ? 'hidden' : 'block'} transition-all duration-300 ease-in-out lg:hidden mr-4`}>
            <img src={hamburger} alt="hamburger" width={40} />
          </div>

          <ul className="hidden font-nunito text-darkSecondary lg:flex flex-col md:flex-row flex-1 justify-evenly items-10 max-w-[1000px]">
            {
              NavItem.map((item) => (
                <li key={item.title} className={`${pathname.pathname === item.href ? 'font-bold text-2xl' : 'font-semibold text-xl'} hover:text-2xl transition-all duration-300 ease-in-out text-white`}>
                  <Link to={item.href} className="">
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
       
        <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} transform fixed top-0 right-0 w-2/3 h-full bg-lightPrimary/40 transition-all duration-500 ease-in-out z-20`}>
          <div className="bg-lightPrimary h-full">

            <div onClick={() => setIsOpen(false)} className="lg:hidden m-2">
              <img src={crossMark} alt="hamburger" width={30} />
            </div>
            <ul className=" font-nunito  text-darkSecondary flex flex-col gap-2 items-center">
              {
                NavItem.map((item) => (
                  <li key={item.title} className={`${pathname.hash === item.href ? 'text-2xl bold' : 'font-semibold text-xl'}  transition-all ease-in-out duration-300 hover:text-2xl `}>
                    <Link to={item.href} className="">
                      {item.title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
