import React from "react";

const About = () => {
  const journey = [
    {
      title: "Understand",
      text: "We understand your business goals and identify the right digital solutions."
    },
    {
      title: "Create",
      text: "We design and develop creative solutions that improve your online presence."
    },
    {
      title: "Support",
      text: "We provide continuous support to help your business grow successfully."
    }
  ];

  const values = [
    {
      title: "Mission",
      text: "Deliver reliable digital solutions that help businesses grow in the modern world."
    },
    {
      title: "Vision",
      text: "Become a trusted technology partner for businesses seeking digital transformation."
    },
    {
      title: "Values",
      text: "Innovation, quality, transparency and long-term customer relationships."
    }
  ];

  return (
    <section className="bg-white text-[#111827] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-600">Khan IT Solution</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg">
            We provide modern digital solutions to help businesses build,
            grow and succeed online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-14 items-center">

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold">
              Who We Are
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Khan IT Solution is a digital service company focused on website
              development, digital marketing, business transformation and
              mobile application solutions.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We combine creativity, technology and strategy to create digital
              solutions that bring real value to businesses.
            </p>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-blue-500 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;