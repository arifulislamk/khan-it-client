import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";
import { ArrowRight } from "lucide-react";

const Hero=()=>{
return(
<div className="bg-white text-[#111827] overflow-hidden">
<div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
<div className="text-center lg:text-left">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
Grow Your Business
<span className="text-blue-600"> Digitally</span>
</h1>

<p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
Khan IT Solution provides professional digital solutions including website development, business transformation, marketing solutions and mobile application development.
</p>

<div className="mt-7 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

<a
href="#contact"
className="group relative isolate overflow-hidden inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-semibold text-white border border-blue-300/60 shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(34,197,94,0.45)]"
>
<span className="absolute inset-0 -z-20 bg-gradient-to-r from-white via-blue-400 to-green-400"></span>
<span className="absolute inset-[2px] -z-10 rounded-full bg-blue-600"></span>
<span className="absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-white/80 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
<span className="relative">Get Started</span>
<ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1"/>
</a>

</div>

<div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
<div>
<h3 className="text-2xl sm:text-3xl font-bold text-blue-600">50+</h3>
<p className="text-gray-500 text-sm sm:text-base">Projects</p>
</div>

<div>
<h3 className="text-2xl sm:text-3xl font-bold text-blue-600">24/7</h3>
<p className="text-gray-500 text-sm sm:text-base">Support</p>
</div>

<div>
<h3 className="text-2xl sm:text-3xl font-bold text-blue-600">100%</h3>
<p className="text-gray-500 text-sm sm:text-base">Commitment</p>
</div>
</div>

</div>

<div className="flex justify-center order-first lg:order-last">
<div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>
<div className="absolute w-full h-full rounded-full border border-blue-200 animate-spin-slow"></div>
<div className="absolute w-[75%] h-[75%] rounded-full bg-blue-50 border border-blue-100"></div>

<div className="relative w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white rounded-3xl flex items-center justify-center border border-gray-100 animate-float shadow-[0_30px_60px_rgba(37,99,235,0.25)] hover:scale-105 transition duration-500">
<img src={logo1} alt="Khan IT Solution" className="w-20 sm:w-32 md:w-44 lg:w-48 object-contain drop-shadow-xl"/>
</div>

<div className="absolute bottom-0 sm:bottom-4 w-36 sm:w-52 h-5 bg-blue-300/30 blur-xl rounded-full"></div>
</div>
</div>

</div>
</div>
);
};

export default Hero;