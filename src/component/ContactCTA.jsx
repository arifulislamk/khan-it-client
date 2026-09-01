import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Swal from "sweetalert2";

const ContactCTA = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, number, email, message);
    // const client = { name, number, email, message };
    fetch(`${import.meta.env.VITE_URL}/client`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(client),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Message Sent Successfully!",
            text: "We will contact you soon.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Something Went Wrong!",
          text: "Failed to send your message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <section className="py-12 md:py-20 bg-white text-[#111827]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 bg-gray-50 border border-gray-200 rounded-3xl shadow-lg p-4 sm:p-6 md:p-10 lg:p-14">
          <div>
            <p className="text-blue-600 font-semibold text-sm">CONTACT US</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              Let's Build Your
              <span className="text-blue-600"> Digital Future</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Have a project idea? Contact Khan IT Solution and get professional
              digital solutions for your business.
            </p>
            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Location</h3>
                  <p className="text-gray-600 text-sm">Uttara, Dhaka</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Phone</h3>
                  <p className="text-gray-600 text-sm">01727256612</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Email</h3>
                  <p className="text-gray-600 text-sm">
                    contact@khanitsolution.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleContact}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-4 sm:p-6 space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600"
            />
            <input
              required
              name="number"
              type="tel"
              placeholder="Phone Number"
              className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600"
            />
            <textarea
              required
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 resize-none"
            />
            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
