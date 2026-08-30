import React from "react";
import logo from "../assets/nabvar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-[#111827]/90 backdrop-blur-md shadow-lg shadow-blue-500/10 rounded-xl px-3 sm:px-4 sticky top-0 z-50 min-h-16">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-[#111827] text-white rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link className="btn bg-blue-600 text-white mt-2" to="/contact">Get Quote</Link></li>
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Khan IT Solution" className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 font-medium text-white">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>

          <li>
            <div className="dropdown">
              <label tabIndex={0} className="cursor-pointer hover:text-blue-400">
                Services
              </label>

              <ul tabIndex={0} className="dropdown-content menu p-3 bg-[#111827] text-white rounded-box shadow-lg w-64 z-50">
                <li><Link to="/services/web-development">Website Development</Link></li>
                <li><Link to="/services/business-digital-setup">Digital Marketing/Business Digital</Link></li>
                <li><Link to="/services/social-media-growth">Social Media Growth</Link></li>
                <li><Link to="/services/app-development">App Development</Link></li>
              </ul>
            </div>
          </li>

          <li><Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/contact" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-4 text-sm md:text-base">
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default Navbar;