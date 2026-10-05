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
import Revel from "../component/Revel";

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

  const works = [
    ["https://i.ibb.co.com/k2TB4PfD/Whats-App-Image-2026-09-26-at-19-24-24-1.jpg", "Portfolio Website", "Portfolio"],
    ["https://i.ibb.co.com/mVcKwvgk/Whats-App-Image-2026-09-26-at-19-24-24-2.jpg", "Tourism Website", "Travel & Tourism"],
    ["https://i.ibb.co.com/rfRQnVrX/Whats-App-Image-2026-09-26-at-19-24-24-3.jpg", "Business Website", "Business"],
    ["https://i.ibb.co.com/GQgDs63P/Whats-App-Image-2026-09-26-at-19-24-24-4.jpg", "E-commerce Website", "Online Store"],
    ["https://i.ibb.co.com/nN45kmch/Whats-App-Image-2026-09-26-at-19-24-24-5.jpg", "Business Website", "Business"],
    ["https://i.ibb.co.com/nq2fs4XL/Whats-App-Image-2026-09-26-at-19-24-24-6.jpg", "Mobile Shop Website", "E-commerce"],
    ["https://i.ibb.co.com/svpHYCFF/Whats-App-Image-2026-09-26-at-19-24-24-7.jpg", "Web Application", "Web Application"],
    ["https://i.ibb.co.com/TMfMs00X/Whats-App-Image-2026-09-26-at-19-24-24-8.jpg", "Food Website", "Food & Restaurant"],
  ];

  const plans = [
    {
      name: "Starter",
      title: "Landing Page",
      price: "৳5,000",
      desc: "Perfect for small businesses, personal brands and promotional campaigns.",
      features: [
        "1 Professional Landing Page",
        "Modern & Responsive Design",
        "Mobile, Tablet & Desktop Support",
        "Contact / Inquiry Form",
        "Basic SEO Setup",
        "Social Media Integration",
        "Free Deployment",
        "12 Months Support",
      ],
      button: "Get Started",
    },
    {
      name: "Business",
      title: "Business Website",
      price: "৳15,000",
      desc: "A complete website solution for growing businesses.",
      popular: true,
      features: [
        "Up to 8–10 Professional Pages",
        "Custom Modern UI/UX Design",
        "Fully Responsive Website",
        "Contact & Inquiry System",
        "Admin Dashboard",
        "Up to 2 Dashboard/Login Systems",
        "Basic Content Management",
        "SEO & Speed Optimization",
        "Free Deployment",
        "2 Years Support",
      ],
      button: "Choose Business",
    },
    {
      name: "Professional",
      title: "Advanced Solution",
      price: "৳50,000",
      desc: "Advanced custom systems for businesses with complex needs.",
      dark: true,
      features: [
        "Fully Custom Website & System",
        "Unlimited Pages & Sections",
        "Premium UI/UX Design",
        "Secure Authentication System",
        "Unlimited Dashboard Management",
        "Multiple User Roles & Permissions",
        "Advanced Admin Panel",
        "Database & API Integration",
        "Performance & Security Optimization",
        "Priority Support",
        "Long-Term Support",
      ],
      button: "Discuss Your Project",
    },
  ];

  const List = ({ items, dark }) => (
    <ul className={`flex-1 space-y-3 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2
            size={18}
            className={`mt-0.5 shrink-0 ${dark ? "text-blue-400" : "text-blue-600"}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#111827]">

      <Revel direction="left">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white py-10 sm:py-14 md:py-24">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-2">
            <div className="min-w-0 text-center lg:text-left">
              <p className="text-xs font-semibold tracking-wider text-blue-600 sm:text-sm">
                WEBSITE DEVELOPMENT
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Professional Website For Your
                <span className="text-blue-600"> Business</span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
                We create modern, responsive and professional websites that
                help your business build trust, attract customers and grow
                online.
              </p>

              <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/contact?service=website-development"
                  className="group relative isolate inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-6 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:w-auto sm:px-8"
                >
                  <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                  <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600" />
                  <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="flex w-full justify-center px-2 sm:px-4 lg:px-0">
              <div className="relative w-full max-w-xs sm:max-w-md">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                <img
                  src="https://i.ibb.co.com/3mPTLyC8/web1-1.png"
                  alt="Website Development"
                  className="relative block h-auto w-full rounded-3xl object-contain shadow-2xl"
                />

                <div className="relative mx-2 mt-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-xl sm:absolute sm:-bottom-5 sm:left-4 sm:mx-0 sm:mt-0">
                  <p className="text-xs font-semibold text-gray-800 sm:text-sm">
                    Modern Website Solution
                  </p>
                  <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                    Built For Business Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="py-6 sm:py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Everything Your Business Needs
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                We focus on creating websites that look professional, perform
                smoothly and support your business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group min-w-0 rounded-3xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="bg-gray-50 py-6 sm:py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Websites We’ve Built
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Explore some of our previous website projects created for
                businesses, professionals and digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {works.map(([img, title, cat], i) => (
                <div
                  key={i}
                  className="group min-w-0 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {cat}
                    </p>

                    <h3 className="mt-2 text-lg font-bold sm:text-xl">
                      {title}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Website Development
                      </span>

                      <ArrowRight
                        size={18}
                        className="text-blue-600 transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-white py-6 sm:py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                From Idea To Launch
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                A simple and transparent process to turn your business idea
                into a professional online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="min-w-0 rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:p-7"
                >
                  <span className="text-3xl font-bold text-blue-600 sm:text-4xl">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="bg-gray-50 py-12 sm:py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <p className="text-xs font-semibold tracking-wider text-blue-600 sm:text-sm">
                PRICING PLANS
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                Simple Pricing For Every Business
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Choose a package that fits your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {plans.map((p, i) => (
                <div
                  key={i}
                  className={`relative flex h-full min-w-0 flex-col rounded-3xl p-6 shadow-xl transition duration-300 hover:-translate-y-2 sm:p-7 ${
                    p.dark
                      ? "bg-[#111827] text-white"
                      : "border border-gray-200 bg-white"
                  } ${p.popular ? "border-2 border-blue-600" : ""}`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:-top-4">
                      <span className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase text-white shadow-lg sm:px-5 sm:py-2 sm:text-xs">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <span
                    className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${
                      p.dark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {p.name}
                  </span>

                  <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                    {p.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      p.dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {p.desc}
                  </p>

                  <div className="mt-5 sm:mt-6">
                    <span className="text-3xl font-bold sm:text-4xl">
                      {p.price}
                    </span>

                    <span
                      className={`ml-2 text-xs ${
                        p.dark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      / project
                    </span>
                  </div>

                  <div
                    className={`my-5 h-px ${
                      p.dark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  />

                  <List items={p.features} dark={p.dark} />

                  <Link
                    to={`/contact?service=website-development&plan=${encodeURIComponent(
                      p.name
                    )}`}
                    className={`mt-8 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base ${
                      p.dark
                        ? "border border-blue-500 bg-blue-500/10 text-white hover:bg-blue-600"
                        : p.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {p.button}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-7 text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
              Final pricing may vary depending on project requirements and
              customization.
            </p>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#111827] px-5 py-8 shadow-xl sm:px-8 sm:py-10 md:px-12 md:py-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-400/30 blur-3xl" />

              <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">
                <div className="min-w-0 text-center md:text-left">
                  <div className="flex items-center justify-center gap-2 text-blue-400 md:justify-start">
                    <CheckCircle2 size={18} />

                    <span className="text-xs font-semibold tracking-wide sm:text-sm">
                      READY TO GET STARTED?
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Take Your Business Online
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Let's build a professional website that helps your
                    business grow and reach more customers.
                  </p>
                </div>

                <Link
                  to="/contact?service=website-development"
                  className="group relative isolate inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:scale-105 sm:w-auto sm:px-8"
                >
                  <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                  <span className="absolute inset-[2px] -z-10 rounded-full bg-[#111827]" />
                  Contact Us
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Revel>

    </div>
  );
};

export default WebsiteDevelopment;