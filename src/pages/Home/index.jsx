import React from 'react';
import "./style.scss";
import Hero from "./Hero"
import Categories from "./Categories"
import Selection from "./Selection";
import Offer from "./Offer";
import About from "./About";
import Partners from "./Partners";

const index = () => {
   return (
     <div className="home-page">
       <Hero />
       <Categories />
       <Selection />
       <Offer />
       <About />
       <Partners />
     </div>
   );
};

export default index;