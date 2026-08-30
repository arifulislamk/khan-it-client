import React from "react";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      icon: <MessageCircle size={36} />,
      title: "Consultation",
      description: "We understand your business goals, requirements and challenges."
    },
    {
      icon: <FileText size={36} />,
      title: "Planning",
      description: "We create a clear strategy and roadmap for your project."
    },
    {
      icon: <Code2 size={36} />,
      title: "Development",
      description: "Our team builds and delivers a reliable digital solution."
    },
    {
      icon: <Rocket size={36} />,
      title: "Launch & Support",
      description: "We launch your solution and provide continuous support."
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Our Work Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple and effective process to turn your ideas into successful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-5">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111827]">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>

              <div className="absolute top-4 right-5 text-4xl font-bold text-blue-100">
                0{index + 1}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WorkProcess;