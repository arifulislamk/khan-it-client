import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/nabvar.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const serviceRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        serviceRef.current &&
        !serviceRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "text-blue-600 font-semibold transition-colors"
      : "text-gray-700 hover:text-blue-600 transition-colors";
  };
  const serviceLinkClass = ({ isActive }) => {
    return isActive
      ? "block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold transition-colors"
      : "block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors";
  };

  const isServiceActive = location.pathname.startsWith("/services");

  return (
    <div className="navbar bg-white shadow-md px-3 sm:px-4 sticky top-0 z-50 min-h-16">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle text-gray-700"
          >
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
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive || isServiceActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/portfolio" className={navLinkClass}>
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="btn bg-blue-600 hover:bg-blue-700 text-white border-none mt-2"
              >
                Get Quote
              </NavLink>
            </li>

          </ul>
        </div>

        <NavLink to="/">
          <img
            src={logo}
            alt="Khan IT Solution"
            className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
          />
        </NavLink>

      </div>

      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-3 font-medium">

          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>

          <li
            ref={serviceRef}
            className="relative"
            onMouseEnter={() => setOpen(true)}
          >
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className={`cursor-pointer transition-colors ${
                isServiceActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Services
            </button>

            {open && (
              <ul
                className="absolute left-0 top-8 bg-white shadow-xl rounded-xl w-64 p-3 border border-gray-100 z-50"
                onMouseEnter={() => setOpen(true)}
              >

                <li>
                  <NavLink
                    to="/services/web-development"
                    className={serviceLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Website Development
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/services/business-digital-setup"
                    className={serviceLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Business Digital Setup
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/services/social-media-growth"
                    className={serviceLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Social Media Growth
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/services/app-development"
                    className={serviceLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    App Development
                  </NavLink>
                </li>

              </ul>
            )}
          </li>

          <li>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>

        </ul>

      </div>

      <div className="navbar-end">

        <NavLink
          to="/contact"
          className="group relative isolate overflow-hidden rounded-full border border-blue-300/60 px-5 py-2 font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.55)]"
        >
          <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
          <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
          <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600"></span>
          <span className="relative">
            Get Quote
          </span>
        </NavLink>

      </div>

    </div>
  );
};

export default Navbar;