import React from "react";
import { Rocket, ShieldCheck, BadgeCheck, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Rocket size={30} />,
      title: "Professional Service",
      description: "Modern solutions designed for your business growth."
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Quality & Trust",
      description: "Reliable services with secure and quality results."
    },
    {
      icon: <BadgeCheck size={30} />,
      title: "Affordable Price",
      description: "Premium solutions that fit your budget."
    },
    {
      icon: <Headphones size={30} />,
      title: "Customer Support",
      description: "Continuous support whenever you need help."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#111827]">
            Why Choose Khan IT Solution?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide reliable digital solutions with quality, creativity and dedicated support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((item,index)=>(
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-xl hover:border-blue-500 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;