import React from "react";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/nav-logo.png";

const NavBar = () => {
  const link = (
    <>
      <li className="relative group">
        <NavLink to="/">Home</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group">
        <NavLink to="projects">Projects</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group">
        <NavLink to="blog">Blog</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group">
        <NavLink to="page">Page</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group">
        <NavLink to="about">About Us</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="relative group">
        <NavLink to="contact">Contact Us</NavLink>
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#191919cc] to-lime-400/30 z-40 relative lg:w-3/4 mx-auto rounded-2xl mt-4">
      {/* nav logo */}
      <NavLink to="/">
        <img
          className="w-[160px] h-[55px] object-cover"
          src={NavLogo}
          alt="Website Logo"
        />
      </NavLink>
      <div className="flex">
        <div className="flex list-none gap-x-10 text-white font-light font-primaryFont">
          {link}
        </div>
      </div>
      <div>
        <button className="bg-primaryColor font-primaryFont font-semibold text-gray-800 py-5 px-8 rounded-r-xl">
          Hire Me +
        </button>
      </div>
    </div>
  );
};

export default NavBar;
