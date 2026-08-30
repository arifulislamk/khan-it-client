import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Palette, Code2, Rocket } from "lucide-react";

const AppDevelopment = () => {
  const features = [
    {
      icon: <Palette size={32} />,
      title: "Modern UI/UX",
      text: "Beautiful and user-friendly app interfaces designed for better customer experience."
    },
    {
      icon: <Code2 size={32} />,
      title: "Custom Development",
      text: "Business-focused mobile applications built according to your requirements."
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast Performance",
      text: "Optimized applications with smooth performance and reliable functionality."
    }
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="py-14 md:py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-3">
              APP DEVELOPMENT
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Turn Your Idea Into A
              <span className="text-blue-600"> Powerful App</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We design and develop mobile applications that help businesses
              connect with customers, improve services and create new digital
              opportunities.
            </p>

            <Link
              to="/contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8 mt-8"
            >
              Build Your App
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-[460px] rounded-[40px] bg-[#111827] shadow-2xl p-3">
              <div className="h-full rounded-[32px] bg-white flex flex-col items-center justify-center">

                <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center">
                  <Smartphone size={45} className="text-white" />
                </div>

                <h3 className="mt-6 font-bold text-xl">
                  KHAN APP
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Smart Digital Solution
                </p>

                <div className="mt-8 w-40 h-3 bg-blue-100 rounded-full"></div>
                <div className="mt-3 w-32 h-3 bg-gray-100 rounded-full"></div>

              </div>
            </div>
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
              We create applications that are simple, powerful and user-focused.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {features.map((item, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl bg-gray-50 hover:shadow-xl transition"
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

      <section className="bg-[#111827] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <h2 className="text-3xl md:text-4xl text-white font-bold text-center">
            Our App Development Journey
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="text-center text-white">
              <h3 className="text-blue-400 text-3xl font-bold">01</h3>
              <p className="mt-2">Planning</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-blue-400 text-3xl font-bold">02</h3>
              <p className="mt-2">Design</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-blue-400 text-3xl font-bold">03</h3>
              <p className="mt-2">Development</p>
            </div>

            <div className="text-center text-white">
              <h3 className="text-blue-400 text-3xl font-bold">04</h3>
              <p className="mt-2">Launch</p>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-blue-600 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have An App Idea?
          </h2>

          <p className="mt-4 text-blue-100">
            Let's transform your idea into a powerful mobile experience.
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