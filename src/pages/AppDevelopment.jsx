import React from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Revel from "../component/Revel";

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
    ["01", "Planning", "We understand your idea and business requirements."],
    ["02", "Design", "We create a simple and attractive app design."],
    ["03", "Development", "Our team builds a smooth and functional application."],
    ["04", "Launch", "We test and launch your app successfully."],
  ];

  const plans = [
    {
      name: "Basic",
      price: "৳15,000",
      desc: "Perfect for simple business and basic mobile applications.",
      features: [
        "Custom App UI Design",
        "Android App Development",
        "Up to 5 Main Screens",
        "Responsive & User-Friendly UI",
        "Basic Functionality",
        "Contact / Inquiry Feature",
        "Testing & Bug Fixing",
        "App Deployment Support",
        "6 Months Support",
      ],
      button: "Get Started",
    },
    {
      name: "Regular",
      price: "৳30,000",
      desc: "A complete mobile solution for growing businesses.",
      popular: true,
      features: [
        "Everything Included In Basic",
        "Android & iOS Development",
        "Up to 10 Main Screens",
        "Custom UI/UX Design",
        "User Authentication",
        "Database Integration",
        "API Integration",
        "Push Notification Setup",
        "Testing & Bug Fixing",
        "12 Months Support",
      ],
      button: "Choose Regular",
    },
    {
      name: "Advanced",
      price: "৳60,000",
      desc: "Advanced custom applications for businesses with complex requirements.",
      dark: true,
      features: [
        "Everything Included In Regular",
        "Advanced Custom App",
        "Unlimited Screens",
        "Premium UI/UX Design",
        "Advanced Authentication",
        "Database & API Integration",
        "Admin Dashboard",
        "Multiple User Roles",
        "Payment Gateway Integration",
        "Performance Optimization",
        "Priority Support",
        "Long-Term Support",
      ],
      button: "Go Advanced",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#111827]">
      <Revel direction="left">
        <section className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-white py-10 sm:py-14 md:py-16">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Build A Powerful
                <span className="text-blue-600"> Mobile App</span>
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                We create modern mobile applications that help businesses
                connect with customers and grow digitally.
              </p>

              <Link
                to="/contact?service=app-development"
                className="group relative isolate mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-7 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:w-auto"
              >
                <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600" />
                <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative">Build Your App</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex justify-center px-2">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                <img
                  src="https://i.ibb.co.com/NgF13Wpf/app-1-1.png"
                  alt="App Development"
                  className="relative h-auto w-full rounded-3xl object-contain shadow-2xl transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="mb-9 text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                How We Build Your App
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-24 hidden h-1 w-full bg-blue-200 md:block" />

              <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
                {process.map(([num, title, text], i) => (
                  <div key={i} className="text-center">
                    <h3 className="mb-4 text-lg font-bold">{title}</h3>

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 font-bold text-white shadow-lg">
                      {num}
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-gray-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mb-9 text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Why Choose Our App Development
              </h2>

              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Simple, powerful and user-friendly applications for your
                business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-3xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl sm:p-7"
                >
                  <div className="text-blue-600">{item.icon}</div>

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

      <Revel direction="right">
        <section className="bg-gray-50 py-10 sm:py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Choose Your App Development Plan
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Flexible packages designed for different business and
                application requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative flex h-full min-w-0 flex-col rounded-3xl p-6 shadow-xl transition duration-300 hover:-translate-y-2 sm:p-7 ${
                    plan.dark
                      ? "bg-[#111827] text-white"
                      : "border border-gray-200 bg-white"
                  } ${plan.popular ? "border-2 border-blue-600" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg sm:px-5 sm:py-2 sm:text-xs">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <span
                    className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${
                      plan.dark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {plan.name}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold sm:text-4xl">
                    {plan.price}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      plan.dark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <div
                    className={`my-5 h-px ${
                      plan.dark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  />

                  <ul
                    className={`flex-1 space-y-3 text-sm ${
                      plan.dark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {plan.features.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className={`mt-0.5 shrink-0 ${
                            plan.dark ? "text-blue-400" : "text-blue-600"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/contact?service=app-development&plan=${encodeURIComponent(
                      plan.name
                    )}&price=${encodeURIComponent(plan.price)}`}
                    className={`mt-8 inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base ${
                      plan.dark
                        ? "border border-blue-500 bg-blue-500/10 text-white hover:bg-blue-600"
                        : plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    {plan.button}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
              Final pricing may vary depending on app complexity, features and
              customization requirements.
            </p>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#111827] px-5 py-8 shadow-xl sm:px-8 sm:py-10 md:px-12 md:py-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-400/30 blur-3xl" />

              <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center gap-2 text-blue-400 md:justify-start">
                    <CheckCircle2 size={18} />

                    <span className="text-xs font-semibold tracking-wide sm:text-sm">
                      READY TO GET STARTED?
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                    Build Your Mobile App
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Let's build a professional mobile application that helps
                    your business grow.
                  </p>
                </div>

                <Link
                  to="/contact?service=app-development"
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

export default AppDevelopment;