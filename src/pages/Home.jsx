import React from"react";
import OurServices from"../component/OurServices";
import Hero from"../component/Hero";
import WhyChooseUs from"../component/WhyChooseUs";
import WorkProcess from"../component/WorkProcess ";
import ContactCTA from"../component/ContactCTA";
import Revel from"../component/Revel";

const Home=()=>{
return(
<>
<Hero/>

<Revel direction="left">
<OurServices/>
</Revel>

<Revel direction="right">
<WhyChooseUs/>
</Revel>

<Revel direction="left">
<WorkProcess/>
</Revel>

<Revel direction="right">
<ContactCTA/>
</Revel>
</>
);
};

export default Home;