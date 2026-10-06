import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Megaphone,
  Target,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Revel from "../component/Revel";

const SocialMediaGrowth = () => {
  const features = [
    {
      icon: <Megaphone size={34} />,
      title: "Promotion Campaign",
      text: "Create effective campaigns to increase brand awareness and reach more customers.",
    },
    {
      icon: <Users size={34} />,
      title: "Audience Growth",
      text: "Build a strong online community and connect with your target customers.",
    },
    {
      icon: <TrendingUp size={34} />,
      title: "Brand Growth",
      text: "Improve your business visibility with consistent growth strategies.",
    },
    {
      icon: <Target size={34} />,
      title: "Target Audience",
      text: "Reach the right people through smart and focused marketing approaches.",
    },
  ];

  const steps = [
    ["01", "Audience Research"],
    ["02", "Content Strategy"],
    ["03", "Campaign Launch"],
    ["04", "Result Analysis"],
  ];

  const plans = [
    {
      name: "Basic",
      price: "৳2,500",
      desc: "Perfect for businesses starting their social media journey.",
      features: [
        "Facebook Page Creation & Setup",
        "Page Created In Your Own Account",
        "Professional Logo",
        "Professional Cover Design",
        "Google Account Setup",
        "FAQ & Auto Answer Setup",
        "WhatsApp Button Integration",
        "Up to 1,000 Followers",
        "12 Months Support",
      ],
      button: "Get Started",
    },
    {
      name: "Regular",
      price: "৳10,000",
      desc: "A complete social media solution for growing businesses.",
      popular: true,
      features: [
        "Everything Included In Basic",
        "Up to 2,000 Followers",
        "1 Product/Service Promotional Video",
        "1 Promotional Boost Campaign Setup",
        "Page Optimization",
        "Customer Engagement Setup",
        "Sales-Focused Promotion Setup",
        "2 Years Support",
      ],
      button: "Choose Regular",
    },
    {
      name: "Advanced",
      price: "৳30,000",
      desc: "Complete social media growth support for established businesses.",
      dark: true,
      features: [
        "Everything Included In Regular",
        "10,000+ Follower Growth Target",
        "5 Product/Service Promotional Videos",
        "5 Promotional Boost Campaigns",
        "Advanced Page Optimization",
        "Customer Conversion Strategy",
        "WhatsApp & FAQ Optimization",
        "Advanced Auto Response Setup",
        "Unlimited Support",
      ],
      button: "Go Advanced",
    },
  ];

  const List = ({ items, dark }) => (
    <ul
      className={`flex-1 space-y-3 text-sm ${
        dark ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2
            size={18}
            className={`mt-0.5 shrink-0 ${
              dark ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#111827]">

      <Revel direction="left">
        <section className="bg-gradient-to-br from-[#111827] to-blue-900 py-10 sm:py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">

            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold tracking-wider text-blue-300 sm:text-sm">
                SOCIAL MEDIA GROWTH
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Grow Your Brand
                <span className="text-blue-400"> Beyond Limits</span>
              </h1>

              <p className="mt-5 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                We help businesses build a powerful social media presence
                through strategic campaigns, audience engagement and brand
                growth solutions.
              </p>

              <Link
                to="/contact?service=social-media-growth"
                className="group relative isolate mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-7 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:w-auto"
              >
                <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600" />
                <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />
                Grow Your Business
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex justify-center px-2">
              <div className="w-full max-w-xs rounded-3xl bg-white p-5 shadow-2xl sm:max-w-sm sm:p-6">

                <div className="flex items-center justify-between">
                  <h3 className="font-bold">Growth Report</h3>
                  <TrendingUp className="text-blue-600" />
                </div>

                <div className="mt-7 space-y-5">

                  {[
                    ["Reach", "90%", "w-5/6"],
                    ["Engagement", "80%", "w-4/5"],
                    ["Growth", "75%", "w-3/4"],
                  ].map(([name, value, width], index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm">
                        <span>{name}</span>
                        <span className="text-blue-600">{value}</span>
                      </div>

                      <div className="mt-2 h-3 rounded-full bg-gray-100">
                        <div
                          className={`h-3 rounded-full bg-blue-600 ${width}`}
                        />
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

            <div className="mb-9 text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Social Media Solutions
              </h2>

              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Helping your business attract, engage and grow online.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl sm:p-7"
                >
                  <div className="text-blue-600">
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
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

            <div className="text-center">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                Our Growth Process
              </h2>

              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                A simple process designed to build and grow your online
                presence.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {steps.map(([number, title], index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">
                    {number}
                  </h3>

                  <p className="mt-2 font-semibold text-gray-700">
                    {title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-white py-12 sm:py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <p className="text-xs font-semibold tracking-wider text-blue-600 sm:text-sm">
                PRICING PLANS
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                Choose Your Growth Plan
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                Flexible packages designed to help your business build, grow
                and manage its social media presence.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">

              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex h-full min-w-0 flex-col rounded-3xl p-6 shadow-xl transition duration-300 hover:-translate-y-2 sm:p-7 ${
                    plan.dark
                      ? "bg-[#111827] text-white"
                      : "border border-gray-200 bg-white"
                  } ${
                    plan.popular
                      ? "border-2 border-blue-600"
                      : ""
                  }`}
                >

                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:-top-4">
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
                      plan.dark
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <div
                    className={`my-5 h-px ${
                      plan.dark
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    }`}
                  />

                  <List
                    items={plan.features}
                    dark={plan.dark}
                  />

                  <Link
                    to={`/contact?service=social-media-growth&plan=${encodeURIComponent(
                      plan.name
                    )}`}
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
              *Follower growth depends on audience response and campaign
              performance. Paid advertising or Boost budget is not included
              in the package price.
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
                    Grow Your Business Online
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Let's build a powerful social media presence that helps
                    your business reach more customers.
                  </p>

                </div>

                <Link
                  to="/contact?service=social-media-growth"
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

export default SocialMediaGrowth;