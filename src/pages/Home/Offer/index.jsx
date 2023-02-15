import React from 'react'
import "./style.scss"
import {Link} from "react-router-dom"
import offerData from './Offer'


const index = () => {
  // console.log(offerData);
  return (
    <section className="offer-home">
      <div className="container">
        <div className="offer-home__wrapper">
          <div className="offer-home__wrapper-box">
            <h2 className="offer-home__wrapper-box-title">
              Мы предлагаем лучший сервис обслуживание по отоплению
            </h2>
          </div>
          <ul className="offer-home__wrapper-list">
            {
              offerData.map(({id, title, icon}) => {
                return (
                  <li className="offer-home__wrapper-item" key={id}>
                    <Link to="" className="offer-home__wrapper-item-link">
                      <img
                        src={Object.values(icon)}
                        alt="offer icon"
                        className="offer-home__wrapper-item-link-img"
                      />
                      <h3 className="offer-home__wrapper-item-link-subtitle">{title}</h3>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default index