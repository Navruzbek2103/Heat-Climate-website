import React from "react";
import "./style.scss";
import { BiCheck } from "react-icons/bi";
import { TbBox } from "react-icons/tb";
import OrderImg from "./../../../assets/images/order-img.png";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
// import SliderHeroSinglePage from "./SliderHeroSinglePage";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import CardData from "../../Home/Categories/Card";

const index = () => {
  const { cardTitle } = useParams();
  // console.log(cardTitle);
  // cardTitle = cardTitle.split("-")

  return (
    <section className="hero-singlePage">
      <div className="container">
        <h2 className="hero-singlePage__title">{cardTitle.split("-").join(" ")}</h2>
        <div className="hero-singlePage__wrapper">
          <div className="hero-singlePage__wrapper-left">
            <div className="hero-singlePage__wrapper-left-imgBox">lorem</div>
            {CardData.map((array) => {
              return (
                // console.log(array)
                Object.values(array).map((el) => {
                  return el.map(({ id, productName, productPrice, productBrand, OsType, displayType, diagonal, camera }) => {
                    // console.log(cardTitle.split("-").join(" "));
                    if (cardTitle.split("-").join(" ") === productName) {
                      return (
                        <div
                          className="hero-singlePage__wrapper-left-description"
                          key={id}
                        >
                          <div className="hero-singlePage__wrapper-left-description-price">
                            <p className="hero-singlePage__wrapper-left-description-price-text">
                              Price
                            </p>
                            {productPrice ? (
                              <h2 className="hero-singlePage__wrapper-left-description-price-title">
                                {productPrice} cўм
                              </h2>
                            ) : (
                              " 🙄 🙄 🙄 🙄 "
                            )}
                          </div>
                          <p className="hero-singlePage__wrapper-left-description-text">
                            About of product
                          </p>
                          <ul className="hero-singlePage__wrapper-left-description-list">
                            <li className="hero-singlePage__wrapper-left-description-item">
                              <h3 className="hero-singlePage__wrapper-left-description-item-subtitle">
                                Brand
                              </h3>
                              <p className="hero-singlePage__wrapper-left-description-item-subtext">
                                {productBrand}
                              </p>
                            </li>
                            {OsType ? (
                              <li className="hero-singlePage__wrapper-left-description-item">
                                <h3 className="hero-singlePage__wrapper-left-description-item-subtitle">
                                  OS type
                                </h3>
                                <p className="hero-singlePage__wrapper-left-description-item-subtext">
                                  {OsType}
                                </p>
                              </li>
                            ) : (
                              ""
                            )}
                            {displayType ? (
                              <li className="hero-singlePage__wrapper-left-description-item">
                                <h3 className="hero-singlePage__wrapper-left-description-item-subtitle">
                                  Display type
                                </h3>
                                <p className="hero-singlePage__wrapper-left-description-item-subtext">
                                  {displayType}
                                </p>
                              </li>
                            ) : (
                              ""
                            )}
                            {diagonal ? (
                              <li className="hero-singlePage__wrapper-left-description-item">
                                <h3 className="hero-singlePage__wrapper-left-description-item-subtitle">
                                  Diagonal
                                </h3>
                                <p className="hero-singlePage__wrapper-left-description-item-subtext">
                                  {diagonal}
                                </p>
                              </li>
                            ) : (
                              ""
                            )}
                            {
                              // console.log(camera)
                              camera ? (
                                <li className="hero-singlePage__wrapper-left-description-item">
                                  <h3 className="hero-singlePage__wrapper-left-description-item-subtitle">
                                    Camera
                                  </h3>
                                  <p className="hero-singlePage__wrapper-left-description-item-subtext">
                                    {camera}
                                  </p>
                                </li>
                              ) : (
                                ""
                              )
                            }
                          </ul>
                          <ul className="hero-singlePage__wrapper-left-description-boxList">
                            <li className="hero-singlePage__wrapper-left-description-boxItem">
                              <h4 className="hero-singlePage__wrapper-left-description-boxItem-text">
                                Share product
                              </h4>
                              <button className="hero-singlePage__wrapper-left-description-boxItem-btn">
                                <FiCopy />
                                Copy link
                              </button>
                            </li>

                            <li className="hero-singlePage__wrapper-left-description-boxItem">
                              <h4 className="hero-singlePage__wrapper-left-description-boxItem-text">
                                Rating
                              </h4>
                            </li>
                          </ul>
                        </div>
                      );
                    }
                  });
                })
              );
            })}
          </div>
          <div className="hero-singlePage__wrapper-right">
            <div className="hero-singlePage__wrapper-right-top">
              <BiCheck />
              <TbBox />
              Delivery around Uzbekistan
            </div>
            <img
              src={OrderImg}
              alt="bus image"
              className="hero-singlePage__wrapper-right-img"
            />
            <Link to="" className="hero-singlePage__wrapper-right-btn">
              <FaShoppingBag />
              Order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
