import React from "react";
import { Link } from "react-router-dom";
import { Globe, Code2, Search, Zap } from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: <Globe size={32} />,
      title: "Business Website",
      text: "A professional website to show your business, products and services online."
    },
    {
      icon: <Code2 size={32} />,
      title: "Custom Design",
      text: "Unique website design based on your business needs and goals."
    },
    {
      icon: <Search size={32} />,
      title: "Google Friendly",
      text: "Websites designed to help customers find your business online."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast & Responsive",
      text: "Fast loading websites that work smoothly on mobile and desktop."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="bg-gradient-to-br from-blue-50 via-white to-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-600 font-semibold">
              WEBSITE DEVELOPMENT
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
              Professional Website For Your
              <span className="text-blue-600"> Business</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We create modern and responsive websites that help your business
              attract customers and grow online.
            </p>

            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-8"
            >
              Get Started
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition"></div>

              <img
                src="https://i.ibb.co.com/gbtxXfSD/web-2.png"
                alt="Website Development"
                className="relative w-full max-w-md rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105"
              />

              <div className="absolute -bottom-5 left-5 bg-white border border-gray-200 shadow-lg rounded-2xl px-5 py-3">
                <p className="text-sm font-semibold text-gray-800">
                  Modern Website Solution
                </p>
                <p className="text-xs text-gray-500">
                  Built For Business Growth
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Provide
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need for a professional business website.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item,index)=>(
              <div
                key={index}
                className="p-7 rounded-3xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition"
              >
                <div className="text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-gray-50 py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How We Build Your Website
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {["Planning","Design","Development","Launch"].map((item,index)=>(
              <div key={index} className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  0{index+1}
                </h3>
                <p className="mt-2 text-gray-600">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#111827] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Need A Website For Your Business?
          </h2>

          <p className="mt-4 text-gray-300">
            Let's create a professional website that helps your business grow.
          </p>

          <Link
            to="/contact"
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-6"
          >
            Contact Us
          </Link>

        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;