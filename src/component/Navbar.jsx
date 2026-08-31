import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/nabvar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar bg-white shadow-md px-3 sm:px-4 sticky top-0 z-50 min-h-16">

      <div className="navbar-start">

        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <ul className="menu menu-sm dropdown-content mt-3 p-3 bg-white text-gray-700 shadow-xl rounded-xl w-52">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/contact" className="btn bg-blue-600 text-white mt-2">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <img
            src={logo}
            alt="Khan IT Solution"
            className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
          />
        </Link>

      </div>


      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-3 font-medium text-gray-700">

          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>


          <li
            ref={serviceRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
          >

            <button
              onClick={() => setOpen(!open)}
              className="cursor-pointer hover:text-blue-600"
            >
              Services
            </button>


            {open && (
              <ul
                className="absolute left-0 top-8 bg-white shadow-xl rounded-xl w-64 p-3 border border-gray-100"
                onMouseEnter={() => setOpen(true)}
              >

                <li>
                  <Link
                    to="/services/web-development"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  >
                    Website Development
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services/business-digital-setup"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  >
                    Business Digital Setup
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services/social-media-growth"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  >
                    Social Media Growth
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services/app-development"
                    className="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
                  >
                    App Development
                  </Link>
                </li>

              </ul>
            )}

          </li>


          <li>
            <Link to="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>

        </ul>

      </div>


      <div className="navbar-end">
        <Link
          to="/contact"
          className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-4 sm:px-6"
        >
          Get Quote
        </Link>
      </div>

    </div>
  );
};

export default Navbar;