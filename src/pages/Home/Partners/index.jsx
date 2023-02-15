import React from "react";
import "./style.scss";
import Partners from "./Partners";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="partners-home">
      <div className="container">
        <div className="partners-home__wrapper">
          <div className="partners-home__wrapper-box">
            <h2 className="partners-home__wrapper-box-title">
              Мы благодарны нашим партнерам
            </h2>
          </div>
          <Marquee speed={120} className="partners-home__marquee" pauseOnHover>
          <ul className="partners-home__wrapper-list">
            {Partners.map(({ id, image }) => {
              return (
                <li className="partners-home__wrapper-item" key={id}>
                  <Link to="" className="partners-home__wrapper-item-link">
                    <img src={Object.values(image)} alt="partners's log" className="partners-home__wrapper-item-link-img" />
                  </Link>
                </li>
              );
            })}
          </ul>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default index;
