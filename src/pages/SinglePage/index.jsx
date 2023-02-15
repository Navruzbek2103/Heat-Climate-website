import React from "react";
import "./style.scss";
import HeroSingle from "./Hero";
import DescProductSingle from "./DescProductSingle";

const index = () => {


  return (
    <div className="single-page">
      <HeroSingle />
      <DescProductSingle />
    </div>
  );
};

export default index;
