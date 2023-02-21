import React, { useState, useRef } from "react";
import "./style.scss";
import { BiCheck } from "react-icons/bi";
import { TbBox } from "react-icons/tb";
import OrderImg from "./../../../assets/images/order-img.png";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import CardData from "../../Home/Categories/Card";
import {HiOutlineClipboardList} from "react-icons/hi"
import {MdOutlineCancel} from "react-icons/md"

const index = () => {
  const { cardTitle } = useParams();
  // console.log(cardTitle);
  // cardTitle = cardTitle.split("-")

  const ElModal = useRef();

  const showModal = () => {
    ElModal.current.style.transform = "scale(1)"
  }

  const hiddenModal = () => {
    ElModal.current.style.transform = "scale(0)";
  };

  return (
    <section className="hero-singlePage">
      <div className="container">
        <h2 className="hero-singlePage__title">
          {cardTitle.split("-").join(" ")}
        </h2>
        <div className="hero-singlePage__wrapper">
          {CardData.map((array) => {
            return (
              // console.log(array)
              Object.values(array).map((el) => {
                return el.map(
                  ({
                    id,
                    productName,
                    productPrice,
                    productBrand,
                    productImg,
                    OsType,
                    displayType,
                    diagonal,
                    camera,
                  }) => {
                    if (cardTitle.split("-").join(" ") === productName) {
                      const [imgData, setImgData] = useState(productImg[0]);
                      const setSliderImg = (props) => {
                        if (
                          props.target.className ==
                          "hero-singlePage__wrapper-left-imgBox-item"
                        ) {
                          setImgData(props.target.childNodes[0].src);
                          // props.target.style.backgroundColor =
                          // "rgba(252, 221, 4, .3)";
                        } else {
                          setImgData(props.target.src);
                        }
                      };

                      return (
                        <div className="hero-singlePage__wrapper-left" key={id}>
                          <div className="hero-singlePage__wrapper-left-imgBox">
                            <div className="hero-singlePage__wrapper-left-imgBox-inner">
                              <img
                                src={imgData}
                                alt="product image"
                                className="hero-singlePage__wrapper-left-imgBox-inner-img"
                              />
                            </div>
                            <ul className="hero-singlePage__wrapper-left-imgBox-list">
                              {productImg.map((id, i) => {
                                return (
                                  <li
                                    className="hero-singlePage__wrapper-left-imgBox-item"
                                    key={i}
                                    onClick={(selectElement) =>
                                      setSliderImg(selectElement)
                                    }
                                  >
                                    <img
                                      src={id}
                                      alt="product image"
                                      className="hero-singlePage__wrapper-left-imgBox-item-img"
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div className="hero-singlePage__wrapper-left-description">
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
                              {camera ? (
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
                              )}
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
                        </div>
                      );
                    }
                  }
                );
              })
            );
          })}
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
            <button
              className="hero-singlePage__wrapper-right-btn"
              onClick={() => showModal()}
            >
              <FaShoppingBag />
              Order now
            </button>
          </div>
        </div>
      </div>
      <div className="hero-singlePage__modal" ref={ElModal}>
        <div className="hero-singlePage__modal-wrapper">
          <form>
            <div className="hero-singlePage__modal-wrapper-top">
              <div className="hero-singlePage__modal-wrapper-top-left">
                <h2 className="hero-singlePage__modal-wrapper-top-left-title">
                  Fill out the forms
                </h2>
                <ul className="hero-singlePage__modal-wrapper-top-left-personalData-list">
                  <li className="hero-singlePage__modal-wrapper-top-left-personalData-item">
                    <h3 className="hero-singlePage__modal-wrapper-top-left-personalData-item-title">
                      Personal data
                    </h3>
                    <ul className="hero-singlePage__modal-wrapper-top-left-personalData-item-sublist">
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Surname*
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your surname"
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Name*
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your name"
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Passport series*
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="AA"
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Passport number*
                        </h4>
                        <input
                          required
                          type="number"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your passport number"
                        />
                      </li>
                    </ul>
                  </li>
                  <li className="hero-singlePage__modal-wrapper-top-left-personalData-item">
                    <h3 className="hero-singlePage__modal-wrapper-top-left-personalData-item-title">
                      Contact information
                    </h3>
                    <ul className="hero-singlePage__modal-wrapper-top-left-personalData-item-sublist">
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Phone number*
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Additional - phone number*
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          City
                        </h4>
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Map
                        </h4>
                        <input
                          required
                          type="text"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your surname"
                        />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="hero-singlePage__modal-wrapper-top-right">
                <h3 className="hero-singlePage__modal-wrapper-top-right-title">
                  Make a purchase
                </h3>
                <ul className="hero-singlePage__modal-wrapper-top-right-list">
                  <li className="hero-singlePage__modal-wrapper-top-right-item">
                    <ul className="hero-singlePage__modal-wrapper-top-right-sublist">
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle">
                          Total price:
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext">
                          12 867 000 млн.uzs
                        </p>
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle">
                          Delivery service:
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext">
                          Включено
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="hero-singlePage__modal-wrapper-top-right-item">
                    <ul className="hero-singlePage__modal-wrapper-top-right-sublist">
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle">
                          Total price:
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext">
                          12 867 000 млн.uzs
                        </p>
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle">
                          Delivery service:
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext">
                          Включено
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className="hero-singlePage__modal-wrapper-top-right-item">
                    <ul className="hero-singlePage__modal-wrapper-top-right-sublist">
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle3">
                          About delivery
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext3">
                          Risk more than others think is safe. Dream more than
                          others think is practical. Risk more than others think
                          is safe. Dream more than others think is practical.
                        </p>
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-right-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-right-subitem-subtitle3">
                          About delivery
                        </h4>
                        <p className="hero-singlePage__modal-wrapper-top-right-subitem-subtext3">
                          Risk more than others think is safe. Dream more than
                          others think is practical. Risk more than others think
                          is safe.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hero-singlePage__modal-wrapper-bottom">
              <button
                className="hero-singlePage__modal-wrapper-bottom-btnSend"
              >
                <HiOutlineClipboardList />
                Make a purchase
              </button>
              <button
                className="hero-singlePage__modal-wrapper-bottom-btnCancel"
                onClick={() => hiddenModal()}
              >
                <MdOutlineCancel />
                Cancel the purchase
              </button>
            </div>
          </form>
        </div>
        <div className="hero-singlePage__modal-inner">
          
        </div>
      </div>
    </section>
  );
};

export default index;
