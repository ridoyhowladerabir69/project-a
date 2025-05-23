import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About Me</NavLink>
      </li>
      <li>
        <NavLink to="contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="project">Project</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#191919cc] to-lime-400/30 z-40 relative lg:w-3/4 mx-auto rounded-2xl mt-4">
      <div className="">
        <h3 className="text-3xl font-semibold ml-6 py-2 font-secondaryFont">AR</h3>
      </div>
      <div className="flex">
        <div className="flex list-none gap-x-10 text-white font-primaryFont">
          {link}
        </div>
      </div>
      <div>
        <button className="bg-primaryColor font-primaryFont font-semibold text-gray-800 py-4 px-8 rounded-r-xl">Hire Me +</button>
      </div>
    </div>
  );
};

export default NavBar;
