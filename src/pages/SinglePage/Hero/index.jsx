import React, { useState, useRef } from "react";
import "./style.scss";
import { BiCheck } from "react-icons/bi";
import { TbBox } from "react-icons/tb";
import OrderImg from "./../../../assets/images/order-img.png";
import { FaShoppingBag } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import CardData from "../../Home/Categories/Card";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";

const index = () => {
  const { cardTitle } = useParams();
  const ElModal = useRef();
  const checklist = useRef();

  // form elements
  const name = useRef();
  const surName = useRef();
  const passportSeries = useRef();
  const passportNumbers = useRef();
  const phoneNumber = useRef();
  const plusPhoneNumber = useRef();
  const mapUrl = useRef();
  const showModal = () => {
    ElModal.current.style.transform = "scale(1)";
  };
  const hiddenModal = () => {
    ElModal.current.style.transform = "scale(0)";
    name.current.value = "";
    surName.current.value = "";
    passportSeries.current.value = "";
    passportNumbers.current.value = "";
    phoneNumber.current.value = "";
    mapUrl.current.value = "";
    if (plusPhoneNumber.current.value) {
      plusPhoneNumber.current.value = "";
    } else {
      plusPhoneNumber.current.value = "";
    }
  };
  const showChecklist = () => {
    if (
      name.current.value &&
      surName.current.value &&
      passportSeries.current.value &&
      passportNumbers.current.value &&
      phoneNumber.current.value &&
      mapUrl.current.value
    ) {
      ElModal.current.style.transform = "scale(0)";
      checklist.current.style.transform = "scale(1)";
    } else {
      alert("Ma'lumotlar yetarli emas !");
    }
  };
  const hiddenChecklist = () => {
    checklist.current.style.transform = "scale(0)";
    name.current.value = "";
    surName.current.value = "";
    passportSeries.current.value = "";
    passportNumbers.current.value = "";
    phoneNumber.current.value = "";
    mapUrl.current.value = "";
    if (plusPhoneNumber.current.value) {
      plusPhoneNumber.current.value = "";
    }
  };

  return (
    <section className="hero-singlePage">
      <div className="container">
        <h2 className="hero-singlePage__title">
          {cardTitle.split("-").join(" ")}
        </h2>
        <div className="hero-singlePage__wrapper">
          {CardData.map((array) => {
            return Object.values(array).map((el) => {
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
            });
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

      {/* Modal window */}
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
                          ref={surName}
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
                          ref={name}
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Passport series*
                        </h4>
                        <input
                          required
                          type="text"
                          maxLength={2}
                          minLength={2}
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="AA"
                          ref={passportSeries}
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Passport number*
                        </h4>
                        <input
                          required
                          type="number"
                          minLength={7}
                          maxLength={7}
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your passport number"
                          ref={passportNumbers}
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
                          type="number"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your phone number"
                          ref={phoneNumber}
                        />
                      </li>
                      <li className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem">
                        <h4 className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-title">
                          Additional - phone number*
                        </h4>
                        <input
                          required
                          type="number"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="Your phone number"
                          ref={plusPhoneNumber}
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
                          type="url"
                          className="hero-singlePage__modal-wrapper-top-left-personalData-item-subitem-input"
                          placeholder="https://www.google.com/"
                          ref={mapUrl}
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
                type="button"
                className="hero-singlePage__modal-wrapper-bottom-btnSend"
                onClick={() => showChecklist()}
                // onClick={() => console.log(name.current.value)}
              >
                <HiOutlineClipboardList />
                Make a purchase
              </button>
              <button
                type="button"
                className="hero-singlePage__modal-wrapper-bottom-btnCancel"
                onClick={() => hiddenModal()}
              >
                <MdOutlineCancel />
                Cancel the purchase
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hero-singlePage__modalInner" ref={checklist}>
        <div className="hero-singlePage__modalInner-wrapper">
          <div className="hero-singlePage__modalInner-wrapper-left">
            <h2 className="hero-singlePage__modalInner-wrapper-left-title">
              The purchase was successful
            </h2>
            <p className="hero-singlePage__modalInner-wrapper-left-text">
              To get a personal consultation, call our short numbers and our
              specialists will provide you with detailed information.
            </p>
          </div>
          <div className="hero-singlePage__modalInner-wrapper-right"></div>
        </div>
        <div
          className="hero-singlePage__modalInner-close"
          onClick={() => hiddenChecklist()}
        >
          <GrFormClose />
        </div>
      </div>
    </section>
  );
};

export default index;
