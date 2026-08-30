import React from "react";
import { Link } from "react-router-dom";
import { Globe, Code2, Search, Zap } from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: <Globe size={32} />,
      title: "Business Website",
      text: "Professional websites that represent your brand and attract potential customers."
    },
    {
      icon: <Code2 size={32} />,
      title: "Custom Development",
      text: "Unique and scalable websites built according to your business requirements."
    },
    {
      icon: <Search size={32} />,
      title: "SEO Friendly",
      text: "Optimized structure to improve search visibility and online presence."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Performance",
      text: "Speed optimized websites for better user experience and engagement."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="bg-gradient-to-br from-blue-50 via-white to-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3">
              WEBSITE DEVELOPMENT
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build A Website That
              <span className="text-blue-600"> Grows Your Business</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We create modern, responsive and high-performing websites that
              help businesses establish a strong digital presence and connect
              with more customers.
            </p>

            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-8"
            >
              Start Your Project
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md bg-[#111827] rounded-2xl shadow-2xl p-3">
              <div className="bg-white rounded-xl overflow-hidden">

                <div className="bg-gray-100 px-4 py-3 flex gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                </div>

                <div className="p-8">
                  <div className="h-6 w-32 bg-blue-600 rounded"></div>

                  <div className="mt-6 h-4 w-full bg-gray-200 rounded"></div>
                  <div className="mt-3 h-4 w-4/5 bg-gray-200 rounded"></div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-24 bg-blue-50 rounded-xl"></div>
                    <div className="h-24 bg-gray-100 rounded-xl"></div>
                  </div>

                  <div className="mt-6 h-10 w-28 bg-blue-600 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We Offer
            </h2>

            <p className="mt-4 text-gray-600">
              Complete website solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((item, index) => (
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
            Website Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                01
              </h3>
              <p className="mt-2 text-gray-600">
                Requirement
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                02
              </h3>
              <p className="mt-2 text-gray-600">
                Design
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                03
              </h3>
              <p className="mt-2 text-gray-600">
                Development
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                04
              </h3>
              <p className="mt-2 text-gray-600">
                Launch
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="bg-[#111827] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready To Build Your Website?
          </h2>

          <p className="mt-4 text-gray-300">
            Let's create a professional online presence for your business.
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