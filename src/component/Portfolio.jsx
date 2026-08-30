import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Business Website",
      category: "Website Development",
      description: "Modern responsive website designed for business growth."
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Brand promotion and audience growth through targeted campaigns."
    },
    {
      title: "Offline To Online Setup",
      category: "Business Transformation",
      description: "Complete digital presence setup for traditional businesses."
    },
    {
      title: "Mobile Application",
      category: "App Development",
      description: "Custom mobile solutions built for business requirements."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Our Portfolio
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore some of our digital solutions and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >
              <div className="h-44 bg-blue-600/10 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">
                  Project Image
                </span>
              </div>

              <div className="p-6">
                <p className="text-blue-600 text-sm font-medium">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-[#111827] mt-2">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            to="/portfolio"
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none rounded-full px-8"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;