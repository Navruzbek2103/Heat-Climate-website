import React from "react";
import "./style.scss";

const index = () => {
  return (
    <section className="selection-home">
      <div className="container">
        <div className="selection-home__wrapper">
          <div className="selection-home__wrapper-box">
            <h2 className="selection-home__wrapper-box-title">
              Почему вам стоит выбрать нас!
            </h2>
          </div>
          <ul className="selection-home__wrapper-list">
            <li className="selection-home__wrapper-item">100% Безопасно</li>
            <li className="selection-home__wrapper-item">
              Широкий ассортимент
            </li>
            <li className="selection-home__wrapper-item">
              Проверенное качество
            </li>
            <li className="selection-home__wrapper-item">
              Развитая система лояльности
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
