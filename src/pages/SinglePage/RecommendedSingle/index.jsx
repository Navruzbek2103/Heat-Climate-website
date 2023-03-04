import React from "react";
import "./style.scss";
import CardImg1 from "./../../../assets/images/Boyler/boyler-card-img-1.png";
import { Link } from "react-router-dom";
import CardData from "../../Home/Categories/Card";
import Marquee from "react-fast-marquee";

const index = () => {

  return (
    <section className="recommended-single">
      <div className="container-big">
        <div className="recommended-single__wrapper">
          <h2 className="recommended-single__wrapper-title">Recommended</h2>
          <Marquee pauseOnHover speed={80} >
            <ul className="recommended-single__wrapper-list">
              {CardData.map((el) => {
                if (Object.keys(el).join() === "Recommended") {
                  return el.Recommended.map(
                    ({ id, productName, productPrice, productImg }) => {
                      // console.log(productName.split(" ").join("-"));


                      return (
                        <li
                          className="recommended-single__wrapper-item"
                          key={id}
                        >
                          <Link
                            to={productName.split(" ").join("-")}
                            // to={productName.split(" ").join("-")}
                            className="recommended-single__wrapper-item-link"
                          >
                            <div className="recommended-single__wrapper-item-box">
                              <h2 className="recommended-single__wrapper-item-box-title">
                                {productName}
                              </h2>
                              <p className="recommended-single__wrapper-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="recommended-single__wrapper-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="recommended-single__wrapper-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  );
                  // console.log(el.Recommended)
                }
              })}
            </ul>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default index;
