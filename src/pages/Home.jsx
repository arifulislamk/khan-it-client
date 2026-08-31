import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo.png";
import OurServices from "../component/OurServices";
import Hero from "../component/Hero";
import WhyChooseUs from "../component/WhyChooseUs";
import WorkProcess from "../component/WorkProcess ";
import Portfolio from "../component/Portfolio";
import ContactCTA from "../component/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <WorkProcess />
      <Portfolio />
      <ContactCTA />
    </>
  );
};

export default Home;
