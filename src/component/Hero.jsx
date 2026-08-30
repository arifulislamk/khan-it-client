import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white text-[#111827] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Grow Your Business
            <span className="text-blue-600"> Digitally</span>
          </h1>

          <p className="mt-5 md:mt-6 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed">
            Khan IT Solution provides professional digital solutions including website development, marketing campaigns, business transformation and mobile application development.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link to="/contact" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-6 md:px-8">
              Get Started
            </Link>

            <Link to="/services" className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 md:px-8">
              Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-500">Commitment</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-blue-600/10 flex items-center justify-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-blue-500/10 backdrop-blur-md flex items-center justify-center border border-blue-200 shadow-lg">
              <img src={logo1} alt="Khan IT Solution" className="w-36 sm:w-44 lg:w-52 object-contain" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;