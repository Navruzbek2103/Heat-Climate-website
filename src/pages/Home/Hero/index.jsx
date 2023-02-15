import React, {useRef} from "react";
import "./style.scss";
import HeroSlider from "./HeroSlider";
import { Link } from "react-router-dom";

const index = () => {

  return (
    <section className="hero-home">
      <div className="container">
        <div className="hero-home__wrapper">
          <HeroSlider />
          <div className="hero-home__wrapper-box">
            <h3 className="hero-home__wrapper-box-title">
              Вам нужна бесплатная консультация?
            </h3>
            <input
              type="number"
              className="form-control hero-home__wrapper-box-numInput"
              placeholder="Ваш телефон"
            />
            <label className="hero-home__wrapper-box-label">
              <input
                type="checkbox"
                className="hero-home__wrapper-box-checkbox"
              />
              <div className="hero-home__wrapper-box-inner">
                Я согласен с{" "}
                <Link to="" className="hero-home__wrapper-box-link">
                  Политикой конфиденциальности
                </Link>{" "}
                сайта
              </div>
            </label>
            <button type="submit" className="hero-home__wrapper-box-btn">
              Получить консультация
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
