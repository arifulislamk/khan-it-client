import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#111827] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Grow Your Business
            <span className="text-blue-600"> Digitally</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
            Khan IT Solution provides professional digital solutions including website development, marketing campaigns, business transformation and mobile application development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8">
              Get Started
            </Link>

            <Link to="/services" className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8">
              Our Services
            </Link>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-500">Support</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="text-gray-500">Commitment</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="w-96 h-96 rounded-full bg-blue-600/10 flex items-center justify-center">
            <div className="w-72 h-72 rounded-full bg-blue-500/10 backdrop-blur-md flex items-center justify-center border border-blue-200 shadow-lg">
              <img src={logo1} alt="Khan IT Solution" className="w-52 rounded-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;