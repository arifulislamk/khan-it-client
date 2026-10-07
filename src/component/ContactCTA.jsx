import React from "react";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

const ContactCTA = () => {
  const [searchParams] = useSearchParams();

  const serviceParam = searchParams.get("service") || "";
  const planParam = searchParams.get("plan") || "";

  const serviceNames = {
    "website-development": "Website Development",
    "business-digital-setup": "Business Digital Setup",
    "social-media-growth": "Social Media Growth",
    "app-development": "App Development",
  };

  const serviceName = serviceNames[serviceParam] || serviceParam;

  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const message = form.message.value;

    const client = {
      name,
      number,
      email,
      message,
      service: serviceName,
      plan: planParam,
    };

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
        console.error(error);

        Swal.fire({
          title: "Something Went Wrong!",
          text: "Failed to send your message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <section id="contact" className="bg-white py-2 text-[#111827] md:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="grid gap-8 rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-lg sm:p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">

          <div>
            <p className="text-sm font-semibold text-blue-600">
              CONTACT US
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
              Let's Build Your
              <span className="text-blue-600"> Digital Future</span>
            </h2>

            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Have a project idea? Contact Khan IT Solution and get
              professional digital solutions for your business.
            </p>

            <div className="mt-7 space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <MapPin size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Location</h3>
                  <p className="text-sm text-gray-600">
                    Uttara, Dhaka
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Phone size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Phone</h3>
                  <p className="text-sm text-gray-600">
                    01727256612
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Mail size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold">Email</h3>
                  <p className="text-sm text-gray-600">
                    ariful18374@gmail.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          <form
            onSubmit={handleContact}
            className="space-y-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-md sm:p-6"
          >

            {serviceName && planParam && (
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      Selected Package
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      {serviceName}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-blue-600">
                      {planParam}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <input
              required
              name="name"
              type="text"
              placeholder="Full Name"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />

            <input
              required
              name="number"
              type="tel"
              placeholder="Phone Number"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />

            <textarea
              required
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none"
            />

            <button
              type="submit"
              className="group relative isolate h-12 w-full overflow-hidden rounded-xl border border-blue-300/60 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_35px_rgba(34,197,94,0.35)]"
            >
              <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />

              <span className="absolute inset-[2px] -z-10 rounded-xl bg-blue-600" />

              <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative">
                Send Message
              </span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;