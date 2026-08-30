import React from "react";
import { Link } from "react-router-dom";
import { Code, Megaphone, Globe, Smartphone } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Website Design & Development",
      description: "Modern, responsive and professional websites that help your business grow online.",
      link: "/services/web-development"
    },
    {
      icon: <Megaphone size={40} />,
      title: "Digital Marketing & Promotion",
      description: "Strategic marketing campaigns to increase your brand visibility and customer reach.",
      link: "/services/digital-marketing"
    },
    {
      icon: <Globe size={40} />,
      title: "Business Online Transformation",
      description: "Convert your offline business into a complete digital presence with our support.",
      link: "/services/business-transformation"
    },
    {
      icon: <Smartphone size={40} />,
      title: "App Design & Development",
      description: "Custom mobile applications designed for modern business requirements.",
      link: "/services/app-development"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#111827]">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete digital solutions to help your business build a strong online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:border-blue-500 transition duration-300"
            >
              <div className="text-blue-600 mb-5">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111827]">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-block mt-5 text-blue-600 font-medium"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurServices;