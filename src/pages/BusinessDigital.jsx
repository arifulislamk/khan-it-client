import React from "react";
import { Link } from "react-router-dom";
import { Palette, Users, Globe, Megaphone } from "lucide-react";

const BusinessDigital = () => {
  const features = [
    {
      icon: <Globe size={34} />,
      title: "Business Page Setup",
      text: "Create a professional online identity with properly optimized business pages."
    },
    {
      icon: <Palette size={34} />,
      title: "Brand Design",
      text: "Professional logo, cover design and branding elements to represent your business."
    },
    {
      icon: <Megaphone size={34} />,
      title: "Online Promotion",
      text: "Promote your business and reach more customers through effective strategies."
    },
    {
      icon: <Users size={34} />,
      title: "Audience Growth",
      text: "Build customer relationships and grow your online community."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">

      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3">
              BUSINESS DIGITAL SETUP
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Take Your Business
              <span className="text-blue-600"> Online</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We help traditional businesses build their digital identity with
              professional page setup, branding solutions and online presence
              development.
            </p>

            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-8"
            >
              Start Your Journey
            </Link>
          </div>


          <div className="flex justify-center">
            <div className="bg-[#111827] rounded-3xl p-6 w-80 h-80 shadow-2xl">

              <div className="bg-white rounded-2xl h-full flex flex-col justify-center items-center">

                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe size={45} className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Offline Business
                </h3>

                <div className="text-blue-600 text-3xl my-3">
                  ↓
                </div>

                <h3 className="text-xl font-bold">
                  Digital Business
                </h3>

              </div>

            </div>
          </div>

        </div>
      </section>


      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything Your Business Needs
            </h2>

            <p className="mt-4 text-gray-600">
              Complete digital setup solutions to start and grow online.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-500 hover:shadow-xl transition"
              >

                <div className="text-blue-600">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      <section className="bg-[#111827] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            How We Transform Your Business
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="text-center text-white">
              <h3 className="text-3xl font-bold text-blue-400">
                01
              </h3>
              <p className="mt-2">
                Business Analysis
              </p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-3xl font-bold text-blue-400">
                02
              </h3>
              <p className="mt-2">
                Branding Setup
              </p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-3xl font-bold text-blue-400">
                03
              </h3>
              <p className="mt-2">
                Online Presence
              </p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-3xl font-bold text-blue-400">
                04
              </h3>
              <p className="mt-2">
                Growth Support
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready To Build Your Online Presence?
          </h2>

          <p className="mt-4 text-blue-100">
            Start your digital journey with Khan IT Solution.
          </p>

          <Link
            to="/contact"
            className="btn bg-white text-blue-600 hover:bg-gray-100 border-none rounded-full px-8 mt-6"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </div>
  );
};

export default BusinessDigital;