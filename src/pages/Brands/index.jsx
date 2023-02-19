import React from "react";
import "./style.scss";
import Recommended from "./../SinglePage/RecommendedSingle"

const index = () => {
  return (
    <div className="brands">
      <div className="container">
        <h1>Бренды</h1>
      </div>
      <Recommended />
    </div>
  );
};

export default index;
