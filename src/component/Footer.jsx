import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Khan IT Solution" className="w-12 h-12 object-contain" />
            <h2 className="text-xl font-bold">
              Khan IT Solution
            </h2>
          </Link>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Professional digital solutions to help businesses grow online with technology and creativity.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link to="/services/web-development" className="hover:text-white">
                Website Development
              </Link>
            </li>

            <li>
              <Link to="/services/digital-marketing" className="hover:text-white">
                Digital Marketing
              </Link>
            </li>

            <li>
              <Link to="/services/business-transformation" className="hover:text-white">
                Business Transformation
              </Link>
            </li>

            <li>
              <Link to="/services/app-development" className="hover:text-white">
                App Development
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              Phone: 01727256612
            </li>

            <li>
              Email: info@khanitsolution.com
            </li>

            <li>
              Bangladesh
            </li>
          </ul>
        </div>

      </div>


      <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Khan IT Solution. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;