import React, { useState, useRef } from "react";
import "./style.scss";
import offerData from "../Home/Offer/Offer";
import Partners from "../Home/Partners";

const index = () => {
  const [service, setService] = useState("ВСЕ ВИДЫ УСЛУГ РЕМОНТ КОТЛОВ");

  const changeService = (title) => {
    setService(title);
  };
  return (
    <div className="sevice">
      <div className="container service-container">
        <div className="service__wrapper">
          <div className="service__wrapper-left">
            <h2 className="service__wrapper-left-title">All service</h2>
            <ul className="service__wrapper-left-list">
              {offerData.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    className="service__wrapper-left-item"
                    onClick={() => changeService(title)}
                  >
                    {title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="service__wrapper-right">
            {offerData.map(({ title, id, desc }) => {
              if (service === title) {
                return (
                  <div className="service__wrapper-right-box" key={id}>
                    <h2 className="service__wrapper-right-box-title">
                      {title}
                    </h2>
                    <p className="service__wrapper-right-box-text">{desc}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default index;
