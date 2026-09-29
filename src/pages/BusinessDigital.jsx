import React from "react";
import { Link } from "react-router-dom";
import { Users, Globe, Megaphone, Palette, ArrowRight, CheckCircle2 } from "lucide-react";
import Revel from "../component/Revel";

const BusinessDigital = () => {
  const features = [
    { icon: <Globe size={34} />, title: "Business Page Setup", text: "Create a professional online identity with properly optimized business pages." },
    { icon: <Palette size={34} />, title: "Brand Design", text: "Professional logo, cover design and branding elements to represent your business." },
    { icon: <Megaphone size={34} />, title: "Online Promotion", text: "Promote your business and reach more customers through effective strategies." },
    { icon: <Users size={34} />, title: "Audience Growth", text: "Build customer relationships and grow your online community." }
  ];

  const steps = [
    ["01", "Understand Business", "We analyze your business, customers and goals to create the right digital strategy."],
    ["02", "Build Digital Identity", "We create professional pages, branding materials and online presence for your business."],
    ["03", "Reach Customers", "We help you connect with potential customers through digital platforms."],
    ["04", "Grow & Improve", "We provide continuous support to improve your digital growth."]
  ];

  const plans = [
    {
      name: "Basic",
      price: "৳2,500",
      desc: "Perfect for businesses starting their digital journey.",
      features: [
        "Facebook Page Creation & Setup",
        "Page Created In Your Own Account",
        "Professional Logo",
        "Professional Cover Design",
        "Google Account Setup",
        "FAQ & Auto Answer Setup",
        "WhatsApp Button Integration",
        "Up to 1,000 Followers",
        "12 Months Support"
      ],
      button: "Get Started"
    },
    {
      name: "Regular",
      price: "৳10,000",
      desc: "A complete digital setup for growing businesses.",
      popular: true,
      features: [
        "Everything Included In Basic",
        "Up to 2,000 Followers",
        "1 Product/Service Promotional Video",
        "1 Promotional Boost Campaign Setup",
        "Page Optimization",
        "Customer Engagement Setup",
        "Sales-Focused Promotion Setup",
        "2 Years Support"
      ],
      button: "Choose Regular"
    },
    {
      name: "Advanced",
      price: "৳30,000",
      desc: "Complete digital growth support for established businesses.",
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
        "Unlimited Support"
      ],
      button: "Go Advanced"
    }
  ];

  const FeatureList = ({ items, dark }) => (
    <ul className={`flex-1 space-y-3 text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${dark ? "text-blue-400" : "text-blue-600"}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#111827]">

      <Revel direction="left">
        <section className="bg-gradient-to-br from-blue-50 to-white py-10 sm:py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div className="min-w-0 text-center lg:text-left">
              <p className="text-xs font-semibold tracking-wider text-blue-600 sm:text-sm">BUSINESS DIGITAL SETUP</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Take Your Business<span className="text-blue-600"> Online</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0">
                We help traditional businesses build their digital identity with professional page setup, branding solutions and online presence development.
              </p>
              <Link to="/contact" className="group relative isolate mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-7 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:-translate-y-1 hover:scale-105 sm:mt-8 sm:w-auto">
                <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600" />
                <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />
                Start Your Journey<ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="flex h-72 w-72 items-center justify-center rounded-3xl bg-[#111827] p-5 shadow-2xl sm:h-80 sm:w-80">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-white">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                    <Globe size={45} className="text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold sm:text-xl">Offline Business</h3>
                  <div className="my-2 text-3xl text-blue-600">↓</div>
                  <h3 className="text-lg font-bold sm:text-xl">Digital Business</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl">From Offline Business To Digital Success</h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">We help businesses build a strong digital identity step by step.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([num, title, text], i) => (
                <div key={i} className="rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl sm:p-7">
                  <h3 className="text-3xl font-bold text-blue-600">{num}</h3>
                  <h4 className="mt-4 text-lg font-bold sm:text-xl">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="bg-white py-6 sm:py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Everything Your Business Needs</h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">Complete digital setup solutions to start and grow online.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, i) => (
                <div key={i} className="group rounded-3xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl sm:p-7">
                  <div className="text-blue-600">{item.icon}</div>
                  <h3 className="mt-5 text-lg font-bold sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Revel>

      <Revel direction="right">
        <section className="bg-gray-50 py-6 sm:py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Choose Your Digital Growth Plan</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">Simple packages designed for businesses at different stages of digital growth.</p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <div key={i} className={`relative flex h-full min-w-0 flex-col rounded-3xl p-6 shadow-xl transition duration-300 hover:-translate-y-2 sm:p-7 ${plan.dark ? "bg-[#111827] text-white" : "border border-gray-200 bg-white"} ${plan.popular ? "border-2 border-blue-600" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:-top-4">
                      <span className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg sm:px-5 sm:py-2 sm:text-xs">Most Popular</span>
                    </div>
                  )}

                  <span className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${plan.dark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                    {plan.name}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold">{plan.price}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${plan.dark ? "text-gray-400" : "text-gray-600"}`}>{plan.desc}</p>

                  <div className={`my-5 h-px ${plan.dark ? "bg-gray-700" : "bg-gray-100"}`} />

                  <FeatureList items={plan.features} dark={plan.dark} />

                  <Link to="/contact" className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:text-base ${plan.dark ? "border border-blue-500 bg-blue-500/10 text-white hover:bg-blue-600" : plan.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"}`}>
                    {plan.button}<ArrowRight size={18} />
                  </Link>
                </div>
              ))}
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
              *Follower growth depends on audience response and campaign performance. Paid advertising/Boost budget is not included in the package price.
            </p>
          </div>
        </section>
      </Revel>

      <Revel direction="left">
        <section className="bg-white px-4 py-6 sm:px-6 md:py-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#111827] px-5 py-8 shadow-xl sm:px-8 sm:py-10 md:px-12 md:py-12">
              <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-green-400/30 blur-3xl" />

              <div className="relative flex flex-col items-center justify-between gap-7 md:flex-row">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center gap-2 text-blue-400 md:justify-start">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-semibold tracking-wide sm:text-sm">READY TO GET STARTED?</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl md:text-3xl">Take Your Business Online</h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 sm:text-base">
                    Let's build a professional digital presence that helps your business grow and reach more customers.
                  </p>
                </div>

                <Link to="/contact" className="group relative isolate inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-300/60 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:scale-105 sm:w-auto sm:px-8">
                  <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />
                  <span className="absolute inset-[2px] -z-10 rounded-full bg-[#111827]" />
                  Contact Us<ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Revel>

    </div>
  );
};

export default BusinessDigital;