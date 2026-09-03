import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Code2,
  Search,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: <Globe size={30} />,
      title: "Business Website",
      text: "A professional website to showcase your business, products and services online.",
    },
    {
      icon: <Code2 size={30} />,
      title: "Custom Design",
      text: "A unique website design created around your business needs and goals.",
    },
    {
      icon: <Search size={30} />,
      title: "Google Friendly",
      text: "Websites structured to help customers discover your business online.",
    },
    {
      icon: <Zap size={30} />,
      title: "Fast & Responsive",
      text: "Fast-loading websites that work smoothly across mobile, tablet and desktop.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Planning",
      text: "We understand your business and plan the right website structure.",
    },
    {
      number: "02",
      title: "Design",
      text: "We create a modern design that matches your business and audience.",
    },
    {
      number: "03",
      title: "Development",
      text: "We build a fast, responsive and functional website.",
    },
    {
      number: "04",
      title: "Launch",
      text: "After testing, your website goes live and is ready for customers.",
    },
  ];

  return (
    <div className="bg-white text-[#111827]">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white py-16 md:py-24">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold tracking-wider text-blue-600">
              WEBSITE DEVELOPMENT
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Professional Website For Your
              <span className="text-blue-600"> Business</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg lg:mx-0">
              We create modern, responsive and professional websites that help
              your business build trust, attract customers and grow online.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/contact" 
                className="group relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white border border-blue-300/60 shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)]"
              >
                <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
                <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600"></span>
                <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
                <span className="relative">Get Started</span>
                <ArrowRight
                  size={18}
                  className="relative transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              <img
                src="https://i.ibb.co.com/gbtxXfSD/web-2.png"
                alt="Website Development"
                className="relative w-full rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-5 left-4 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-xl sm:left-6">
                <p className="text-sm font-semibold text-gray-800">
                  Modern Website Solution
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Built For Business Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wider text-blue-600">
              WHAT WE DO
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Everything Your Business Needs
            </h2>

            <p className="mt-4 text-gray-600">
              We focus on creating websites that look professional, perform
              smoothly and support your business goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wider text-blue-600">
              OUR PROCESS
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              From Idea To Launch
            </h2>

            <p className="mt-4 text-gray-600">
              A simple and transparent process to turn your business idea into a
              professional online presence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="text-4xl font-bold text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {step.text}
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

export default WebsiteDevelopment;
