import React from "react";
import "./style.scss";
import HeroSingle from "./Hero";
import DescProductSingle from "./DescProductSingle";
import RecommendedSingle from "./RecommendedSingle";

const index = () => {


  return (
    <div className="single-page">
      <HeroSingle />
      <DescProductSingle />
      <RecommendedSingle />
    </div>
  );
};

export default index;
