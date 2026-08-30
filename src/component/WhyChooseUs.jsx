import React from "react";
import { CheckCircle, Rocket, Headphones, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Rocket size={38} />,
      title: "Professional Solutions",
      description: "We create modern and effective digital solutions tailored to your business needs."
    },
    {
      icon: <ShieldCheck size={38} />,
      title: "Quality & Reliability",
      description: "Our focus is delivering secure, scalable and high-quality digital services."
    },
    {
      icon: <CheckCircle size={38} />,
      title: "Affordable Pricing",
      description: "Get premium digital services with flexible solutions that fit your budget."
    },
    {
      icon: <Headphones size={38} />,
      title: "Lifetime Support",
      description: "We provide continuous support to help your business grow smoothly."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#111827]">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We combine technology, creativity and support to deliver digital solutions that create real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="text-blue-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
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