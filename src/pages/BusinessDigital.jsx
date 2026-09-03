import React from "react";
import { Link } from "react-router-dom";

import {
  Users,
  Globe,
  Megaphone,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const BusinessDigital = () => {
  const features = [
    {
      icon: <Globe size={34} />,
      title: "Business Page Setup",
      text: "Create a professional online identity with properly optimized business pages.",
    },
    {
      icon: <Palette size={34} />,
      title: "Brand Design",
      text: "Professional logo, cover design and branding elements to represent your business.",
    },
    {
      icon: <Megaphone size={34} />,
      title: "Online Promotion",
      text: "Promote your business and reach more customers through effective strategies.",
    },
    {
      icon: <Users size={34} />,
      title: "Audience Growth",
      text: "Build customer relationships and grow your online community.",
    },
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="bg-gradient-to-br from-blue-50 to-white py-2 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold md:mb-3">
              BUSINESS DIGITAL SETUP
            </p>

            <h1 className="text-2xl md:text-6xl font-bold leading-tight">
              Take Your Business
              <span className="text-blue-600"> Online</span>
            </h1>

            <p className="mt-2 md:mt-6 text-gray-600 md:text-lg leading-relaxed">
              We help traditional businesses build their digital identity with
              professional page setup, branding solutions and online presence
              development.
            </p>

            <Link
              to="/contact"
              className="mt-4 group relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white border border-blue-300/60 shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)]"
            >
              <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
              <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600"></span>
              <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <span className="relative">Start Your Journey</span>
              <ArrowRight
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-[#111827] rounded-3xl p-6 w-80 h-80 shadow-2xl">
              <div className="bg-white rounded-2xl h-full flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Globe size={45} className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold">Offline Business</h3>

                <div className="text-blue-600 text-3xl my-3">↓</div>

                <h3 className="text-xl font-bold">Digital Business</h3>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gray-50 py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">

            <h2 className=" text-3xl md:text-3xl font-bold">
              From Offline Business To Digital Success
            </h2>

            <p className="mt-2 text-gray-600">
              We help businesses build a strong digital identity step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-blue-600">01</h3>

              <h4 className="mt-5 text-xl font-bold">Understand Business</h4>

              <p className="mt-3 text-gray-600">
                We analyze your business, customers and goals to create the
                right digital strategy.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-blue-600">02</h3>

              <h4 className="mt-5 text-xl font-bold">Build Digital Identity</h4>

              <p className="mt-3 text-gray-600">
                We create professional pages, branding materials and online
                presence for your business.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-blue-600">03</h3>

              <h4 className="mt-5 text-xl font-bold">Reach Customers</h4>

              <p className="mt-3 text-gray-600">
                We help you connect with potential customers through digital
                platforms.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition">
              <h3 className="text-4xl font-bold text-blue-600">04</h3>

              <h4 className="mt-5 text-xl font-bold">Grow & Improve</h4>

              <p className="mt-3 text-gray-600">
                We provide continuous support to improve your digital growth.
              </p>
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
                <div className="text-blue-600">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#111827] px-6 py-10 shadow-xl md:px-12 md:py-12">
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 animate-pulse rounded-full bg-blue-500/30 blur-3xl"></div>

            <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 animate-pulse rounded-full bg-green-400/30 blur-3xl"></div>

            <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center gap-2 text-blue-400 md:justify-start">
                  <CheckCircle2 size={19} />
                  <span className="text-sm font-semibold tracking-wide">
                    READY TO GET STARTED?
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  Take Your Business Online
                </h2>
                <p className="mt-3 max-w-xl text-gray-400">
                  Let's build a professional website that helps your business
                  grow and reach more customers.
                </p>
              </div>
              <Link
                to="/contact"
                className="group relative isolate shrink-0 overflow-hidden rounded-full border border-blue-300/60 px-8 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.45)]"
              >
                <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>

                <span className="absolute -left-10 top-0 h-full w-16 -skew-x-12 bg-white/70 blur-md transition duration-700 group-hover:left-[120%]"></span>

                <span className="absolute inset-[2px] -z-10 rounded-full bg-[#111827]"></span>

                <span className="relative flex items-center gap-2">
                  Contact Us
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessDigital;
