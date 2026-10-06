import React from "react";
import { CheckCircle, Send } from "lucide-react";
import Swal from "sweetalert2";

const PortfolioPurchase = () => {
  const features = [
    "Professional portfolio website design",
    "Responsive mobile & desktop layout",
    "Personal brand showcase section",
    "Project gallery integration",
    "Contact form setup",
    "Basic SEO friendly structure",
    "Fast and modern UI design",
  ];

  const handlePurchase = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    const client = {
      name,
      number,
      email,
      service: "Portfolio Purchase",
      plan: "Portfolio Package",
      price: "৳1000",
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
            title: "Application Sent Successfully!",
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
          text: "Failed to send your application. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <section className="bg-white py-4 text-[#111827] md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Create Your Professional
            <span className="text-blue-600"> Portfolio Website</span>
          </h2>

          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Showcase your skills, projects and achievements with a modern
            portfolio website.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">

          <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-2xl font-bold">
                Portfolio Package
              </h3>

              <div className="group relative isolate w-fit overflow-hidden rounded-full px-5 py-2 font-bold text-white shadow-[0_10px_25px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-1">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 blur-md" />
                <span className="absolute inset-[2px] rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-green-500" />

                <span className="relative">
                  ৳1000 Only
                </span>
              </div>
            </div>

            <div className="mt-8 flex-1 space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={22}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />

                  <p className="text-sm text-gray-700 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <form
            onSubmit={handlePurchase}
            className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8"
          >

            <h3 className="text-2xl font-bold">
              Apply For Portfolio
            </h3>

            <p className="mt-2 text-gray-600">
              Fill up the form and we will contact you soon.
            </p>

            <div className="mt-6 space-y-4">

              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 text-gray-800 outline-none transition focus:border-blue-600"
              />

              <input
                required
                type="tel"
                name="number"
                placeholder="Phone Number"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 text-gray-800 outline-none transition focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="h-12 w-full rounded-xl border border-gray-300 px-4 text-gray-800 outline-none transition focus:border-blue-600"
              />

            </div>

            <button
              type="submit"
              className="group relative isolate mt-6 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-300/60 font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)]"
            >
              <span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400" />

              <span className="absolute inset-[2px] -z-10 rounded-xl bg-blue-600" />

              <span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative">
                Submit Application
              </span>

              <Send
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default PortfolioPurchase;