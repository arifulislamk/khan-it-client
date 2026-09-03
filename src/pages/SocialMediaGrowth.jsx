import React from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Megaphone,
  Target,
  Globe,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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

  return (
    <div className="bg-white text-[#111827]">
      <section className="bg-gradient-to-br from-[#111827] to-blue-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-300 font-semibold">SOCIAL MEDIA GROWTH</p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
              Grow Your Brand
              <span className="text-blue-400"> Beyond Limits</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              We help businesses build a powerful social media presence through
              strategic campaigns, audience engagement and brand growth
              solutions.
            </p>
              <Link
                          to="/contact"
                          className="mt-4 group relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white border border-blue-300/60 shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)]"
                        >
                          <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
                          <span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600"></span>
                          <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
                          <span className="relative">Grow Your Business</span>
                          <ArrowRight
                            size={18}
                            className="relative transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-3xl p-6 w-80 shadow-2xl">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Growth Report</h3>

                <TrendingUp className="text-blue-600" />
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="flex justify-between text-sm">
                    <span>Reach</span>
                    <span className="text-blue-600">90%</span>
                  </div>

                  <div className="h-3 bg-gray-100 rounded-full mt-2">
                    <div className="h-3 bg-blue-600 rounded-full w-5/6"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Engagement</span>
                    <span className="text-blue-600">80%</span>
                  </div>

                  <div className="h-3 bg-gray-100 rounded-full mt-2">
                    <div className="h-3 bg-blue-600 rounded-full w-4/5"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm">
                    <span>Growth</span>
                    <span className="text-blue-600">75%</span>
                  </div>

                  <div className="h-3 bg-gray-100 rounded-full mt-2">
                    <div className="h-3 bg-blue-600 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Social Media Solutions
            </h2>

            <p className="mt-4 text-gray-600">
              Helping your business attract, engage and grow online.
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

                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Our Growth Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">01</h3>
              <p className="mt-2">Audience Research</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">02</h3>
              <p className="mt-2">Content Strategy</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">03</h3>
              <p className="mt-2">Campaign Launch</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">04</h3>
              <p className="mt-2">Result Analysis</p>
            </div>
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

export default SocialMediaGrowth;
