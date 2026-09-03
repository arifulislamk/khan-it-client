import React from "react";
import { Link } from "react-router-dom";

const OurServices = () => {
  const services = [
    {
      image: "https://i.ibb.co.com/gbtxXfSD/web-2.png",
      title: "Website Development",
      description: "Modern and responsive websites that help your business build a strong online presence.",
      link: "/services/web-development"
    },
    {
      image: "https://i.ibb.co.com/zhc0pZm0/Business-Transform.png",
      title: "Business Digital Setup",
      description: "Transform your offline business into a complete digital platform and reach more customers.",
      link: "/services/business-digital-setup"
    },
    {
      image: "https://i.ibb.co.com/vvsJ0HxL/app-1.png",
      title: "App Development",
      description: "Custom mobile applications designed to improve customer experience and business growth.",
      link: "/services/app-development"
    },
    {
      image: "https://i.ibb.co.com/R4PsL0zP/social-meadia-growth.png",
      title: "Social Media Growth",
      description: "Grow your brand visibility through audience engagement and effective social strategies.",
      link: "/services/social-media-growth"
    },
  ];

  return (
    <section   id="services" className="py-14 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-8">
          <h1 className="text-blue-600 md:text-2xl font-semibold">
            OUR SERVICES
          </h1>

          <h2 className="mt-1 text-sm md:text-3xl font-bold text-[#111827]">
            Digital Solutions For Your Business
          </h2>
          <p className="mt-2 hidden md:block text-gray-600">
            We help businesses build, grow and succeed with professional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-8">
          {services?.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-white hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <Link to={service.link}>
              <div className="md:h-64 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-1 md:p-6">
                <p className=" md:text-2xl text-center font-bold text-[#111827]">
                  {service.title}
                </p>

                <p className="mt-1 text-center md:mt-3 text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;