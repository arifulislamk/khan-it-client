import React from "react";
import { CheckCircle, Send } from "lucide-react";
import Swal from "sweetalert2";

const PortfolioPurchase=()=>{
      const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const tel = e.target.tel.value;
        const email = e.target.email.value;
        console.log(name, tel, email);
        const client = { name, tel, email };
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
const features=[
"Professional portfolio website design",
"Responsive mobile & desktop layout",
"Personal brand showcase section",
"Project gallery integration",
"Contact form setup",
"Basic SEO friendly structure",
"Fast and modern UI design"
];
return(
<section className="py-4 md:py-16 bg-white text-[#111827]">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto">
<h2 className="mt-3 text-3xl md:text-5xl font-bold">
Create Your Professional
<span className="text-blue-600"> Portfolio Website</span>
</h2>
<p className="mt-4 text-gray-600 text-lg">
Showcase your skills, projects and achievements with a modern portfolio website.
</p>
</div>
<div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
<div className="bg-gray-50 rounded-3xl border border-gray-200 p-8">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-bold">
Portfolio Package
</h3>
<div className="group relative isolate overflow-hidden px-5 py-2 rounded-full font-bold text-white shadow-[0_10px_25px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-1">
<span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 blur-md"></span>
<span className="absolute inset-[2px] rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-green-500"></span>
<span className="relative">
৳1000 Only
</span>
</div>
</div>
<div className="mt-8 space-y-4">
{features.map((item,index)=>(
<div
key={index}
className="flex items-center gap-3"
>
<CheckCircle
size={22}
className="text-blue-600"
/>
<p className="text-gray-700">
{item}
</p>
</div>
))}
</div>
</div>
<form onSubmit={handlePurchase} className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 space-y-5">
<h3 className="text-2xl font-bold">
Apply For Portfolio
</h3>
<p className="text-gray-600">
Fill up the form and we will contact you soon.
</p>
<input
type="text"
name="name"
placeholder="Your Name"
className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
/>
<input
type="tel"
name="tel"
placeholder="Phone Number"
className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
/>
<input
type="email"
name="email"
placeholder="Email Address"
className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-600"
/>
<button
type="submit"
className="group relative isolate overflow-hidden w-full h-12 rounded-xl font-semibold text-white border border-blue-300/60 shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)] flex items-center justify-center gap-2"
>
<span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
<span className="absolute inset-[2px] -z-10 rounded-xl bg-blue-600"></span>
<span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
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