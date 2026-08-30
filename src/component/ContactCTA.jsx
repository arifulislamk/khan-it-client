import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="bg-blue-600 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Ready To Grow Your Business Online?
        </h2>

        <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-base md:text-lg">
          Let's build a powerful digital presence with professional solutions
          designed for your business growth.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/contact"
            className="btn bg-white text-blue-600 hover:bg-gray-100 border-none rounded-full px-8"
          >
            Contact Us
          </Link>

          <Link
            to="/services"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-600 rounded-full px-8"
          >
            Explore Services
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;