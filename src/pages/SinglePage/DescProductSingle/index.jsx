import React, { useState, useRef } from "react";
import "./style.scss";
import AllData from "./Data";

const index = () => {
  const [data, setData] = useState("Characteristics");
  const underlineChar = useRef();
  const underlineAbout = useRef();
  const underlineComments = useRef();

  const setInfo = (menu) => {
    setData(menu);
    if (menu === "Characteristics") {
      underlineChar.current.style.borderBottom = "4px solid #1c2d3f";
      underlineAbout.current.style.borderBottom = "4px solid transparent";
      underlineComments.current.style.borderBottom = "4px solid transparent";
      underlineComments.current.style.borderBottom = "4px solid transparent";
    } else if (menu === "About") {
      underlineAbout.current.style.borderBottom = "4px solid #1c2d3f";
      underlineChar.current.style.borderBottom = "4px solid transparent";
      underlineComments.current.style.borderBottom = "4px solid transparent";
    }
    // else if (menu === "Comments") {
    //   underlineComments.current.style.borderBottom = "4px solid #1c2d3f";
    //   underlineAbout.current.style.borderBottom = "4px solid transparent";
    //   underlineChar.current.style.borderBottom = "4px solid transparent";
    // }
  };
  const emptyArray = [1, 2, 3, 4];

  return (
    <section className="description-singlePage">
      <div className="container">
        <ul className="description-singlePage__list">
          <li className="description-singlePage__item">
            <button
              ref={underlineChar}
              className="description-singlePage__item-btn"
              onClick={() => setInfo("Characteristics")}
            >
              Characteristics
            </button>
          </li>
          <li className="description-singlePage__item">
            <button
              ref={underlineAbout}
              className="description-singlePage__item-btn"
              onClick={() => setInfo("About")}
            >
              About
            </button>
          </li>
          {/* <li className="description-singlePage__item">
            <button
              ref={underlineComments}
              className="description-singlePage__item-btn"
              onClick={() => setInfo("Comments")}
            >
              Comments
            </button>
          </li> */}
        </ul>
        <div className="description-singlePage__wrapper">
          {AllData &&
            AllData.length > 1 &&
            AllData.map(
              ({
                menu,
                id,
                typeOfInstallation,
                weight1,
                workingEnvironment,
                numberOfSIMCard,
                power,
                heatedArea,
                boilerType,
                combustionChumberType,
                depth,
                width,
                height,
                weight2,
                desc1,
                desc2,
                desc3,
                avatar,
                username,
                userId,
                userComment,
                commentData,
              }) => {
                if (data === menu) {
                  if (data === "Characteristics") {
                    return (
                      <ul
                        key={id}
                        className="description-singlePage__wrapper-list"
                      >
                        <li className="description-singlePage__wrapper-item">
                          <ul className="description-singlePage__wrapper-item-sublist">
                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Main characters
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Type of installation
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {typeOfInstallation}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Weight (kilo)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {weight1}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Working environment
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {workingEnvironment}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Number of SIM cards
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {numberOfSIMCard}
                                  </p>
                                </li>
                              </ul>
                            </li>

                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Technical parametres of boiler
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Power (kWat)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {power}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Boiler typea
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {boilerType}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Heated area (sq.m.)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {heatedArea}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Combustion chumber type
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {combustionChumberType}
                                  </p>
                                </li>
                              </ul>
                            </li>

                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Dimensions
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Depth (mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {depth}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Width(mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {width}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Height(mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {height}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Weight
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {weight2}
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li className="description-singlePage__wrapper-item">
                          <ul className="description-singlePage__wrapper-item-sublist">
                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Main characters
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Type of installation
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {typeOfInstallation}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Weight (kilo)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {weight1}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Working environment
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {workingEnvironment}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Number of SIM cards
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {numberOfSIMCard}
                                  </p>
                                </li>
                              </ul>
                            </li>

                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Technical parametres of boiler
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Power (kWat)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {power}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Boiler typea
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {boilerType}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Heated area (sq.m.)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {heatedArea}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Combustion chumber type
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {combustionChumberType}
                                  </p>
                                </li>
                              </ul>
                            </li>

                            <li className="description-singlePage__wrapper-item-subitem">
                              <h2 className="description-singlePage__wrapper-item-subitem-title">
                                Dimensions
                              </h2>
                              <ul className="description-singlePage__wrapper-item-subitem-inlist">
                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Depth (mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {depth}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Width(mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {width}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Height(mm)
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {height}
                                  </p>
                                </li>

                                <li className="description-singlePage__wrapper-item-subitem-initem">
                                  <h3 className="description-singlePage__wrapper-item-subitem-initem-subtitle">
                                    Weight
                                  </h3>
                                  <p className="description-singlePage__wrapper-item-subitem-initem-text">
                                    {weight2}
                                  </p>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    );
                  } else if (data === "About") {
                    return (
                      <ul
                        className="description-singlePage__about-list"
                        key={id}
                      >
                        <li className="description-singlePage__about-item">
                          <p className="description-singlePage__about-item-first-desc description-singlePage__about-item-text">
                            {desc1}
                          </p>
                          <p className="description-singlePage__about-item-second-desc description-singlePage__about-item-text">
                            {desc2}
                          </p>
                        </li>
                        <li className="description-singlePage__about-item">
                          <p className="description-singlePage__about-item-third-desc description-singlePage__about-item-text">
                            {desc3}
                          </p>
                        </li>
                      </ul>
                    );
                  } else if (data === "Comments") {
                    return (
                      // ${console.log(users)}
                      <ul
                        className="description-singlePage__comments-list"
                        key={id}
                      >
                        {emptyArray.map((item, id) => {
                          return (
                            <li
                              className="description-singlePage__comments-item"
                              key={id}
                            >
                              <div className="description-singlePage__comments-item-wrapper">
                                <div className="description-singlePage__comments-item-inner">
                                  <img
                                    src={avatar}
                                    alt="user image"
                                    className="description-singlePage__comments-item-inner-img"
                                  />
                                  <div className="description-singlePage__comments-item-box">
                                    <h2 className="description-singlePage__comments-item-box-title">
                                      {username}
                                    </h2>
                                    <p className="description-singlePage__comments-item-box-text-id">
                                      {userId}
                                    </p>
                                  </div>
                                </div>
                                <p className="description-singlePage__comments-item-text">
                                  {userComment}
                                </p>
                              </div>
                              <p className="description-singlePage__comments-item-text-data">
                                {commentData}
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                }
              }
            )}
          {console.log(underlineAbout.current)}
        </div>
      </div>
    </section>
  );
};

export default index;
