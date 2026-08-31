import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Palette, Code2, Rocket } from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: <Palette size={32} />,
      title: "Modern UI Design",
      text: "Beautiful and easy-to-use app interfaces for better customer experience.",
    },
    {
      icon: <Code2 size={32} />,
      title: "Custom App Development",
      text: "Mobile applications designed according to your business needs.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Smooth Performance",
      text: "Fast and reliable apps that work smoothly for your users.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Planning",
      text: "We understand your idea and business requirements.",
    },
    {
      step: "02",
      title: "Design",
      text: "We create a simple and attractive app design.",
    },
    {
      step: "03",
      title: "Development",
      text: "Our team builds a smooth and functional application.",
    },
    {
      step: "04",
      title: "Launch",
      text: "We test and launch your app successfully.",
    },
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="bg-gradient-to-br rounded-2xl from-blue-50 via-white to-white py-4 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="mt-4 text-xl md:text-6xl font-bold leading-tight">
              Build A Powerful
              <span className="text-blue-600"> Mobile App</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We create modern mobile applications that help businesses connect
              with customers and grow digitally.
            </p>

            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-4 md:mt-8"
            >
              Build Your App
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition"></div>
              <img
                src="https://i.ibb.co.com/vvsJ0HxL/app-1.png"
                alt="App Development"
                className="relative w-full max-w-md rounded-3xl shadow-2xl transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="mt-3 text-xl md:text-4xl font-bold">
              How We Build Your App
            </h2>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-blue-200"></div>
            <div className="grid md:grid-cols-4 gap-10 relative">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <div className="mx-auto w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold border-4 border-white shadow-lg">
                    {item.step}
                  </div>
                  <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            {/* <div className="flex justify-center">
              <div className="w-64 h-[460px] rounded-[40px] bg-[#111827] shadow-2xl p-3">
                <div className="h-full rounded-[32px] bg-white flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Smartphone size={45} className="text-white" />
                  </div>
                  <h3 className="mt-6 font-bold text-xl">KHAN APP</h3>
                  <p className="text-gray-500 text-sm mt-2">
                    Smart Digital Solution
                  </p>
                  <div className="mt-8 w-40 h-3 bg-blue-100 rounded-full"></div>
                  <div className="mt-3 w-32 h-3 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Our App Development
            </h2>

            <p className="mt-4 text-gray-600">
              Simple, powerful and user-friendly applications for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition"
              >
                <div className="text-blue-600">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have An App Idea?
          </h2>

          <p className="mt-4 text-blue-100">
            Let's turn your idea into a powerful mobile application.
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

export default AppDevelopment;
