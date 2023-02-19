import React, { useState, useRef } from "react";
import "./style.scss";
import AllCategoryBtn from "./BtnMenu";
import CardData from "./Card";
import { Link } from "react-router-dom";

const index = () => {
  const [category, setCategory] = useState("All category");
  const setCategoryInfo = (element, content) => {
    setCategory(content);
    // if (element.textContent === "All category") {
    //   element.style.backgroundColor = "#4e4e4e";
    //   element.style.color = "#fff";
    // } else if (element.textContent === "Котлы") {
    //   element.style.backgroundColor = "#4e4e4e";
    //   element.style.color = "#fff";
    // }
  };

  // console.log(category);

  return (
    <section className="categories-home">
      <div className="container">
        <ul className="categories-home__btn-list">
          {AllCategoryBtn &&
            AllCategoryBtn.length > 1 &&
            AllCategoryBtn.map(({ title, id }) => {
              return (
                <li className="categories-home__btn-item" key={id}>
                  <button
                    className="categories-home__btn-item-btn"
                    data-set={title}
                    onClick={(e) => {
                      setCategoryInfo(e.target, e.target.textContent);
                    }}
                  >
                    {title}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="container-big">
        {CardData.map((item, index) => {
          if (Object.keys(item)[0] === category) {
            if (category === "All category") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item["All category"].map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Котлы") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item.Котлы.map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Радиатор") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item.Радиатор.map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Бойлеры и баки") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item["Бойлеры и баки"].map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Насосы") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item.Насосы.map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Арматура") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item.Арматура.map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Котлы болшой") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item["Котлы болшой"].map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Горелки") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item.Горелки.map(
                    ({ id, productName, productPrice, productImg }) => {
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            } else if (category === "Система орошения") {
              return (
                <ul key={index} className="categories-home__card-list">
                  {item["Система орошения"].map(
                    ({ id, productName, productPrice, productImg }) => {
                      console.log(productName);
                      return (
                        <li key={id} className="categories-home__card-item">
                          <Link
                            to={productName.split(" ").join("-")}
                            className="categories-home__card-item-link"
                          >
                            <div className="categories-home__card-item-box">
                              <h2 className="categories-home__card-item-box-title">
                                {productName}
                              </h2>
                              <p className="categories-home__card-item-box-text">
                                от {productPrice} uzs
                              </p>
                            </div>
                            <div className="categories-home__card-item-imgBox">
                              <img
                                src={productImg[0]}
                                alt="card img"
                                className="categories-home__card-item-imgBox-img"
                              />
                            </div>
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              );
            }
          }
        })}
      </div>
    </section>
  );
};

export default index;

// CardData[0].AllCategory.map(
//   ({ id, productName, productPrice, productImg }, i) => {
//     // console.log(Object.values(productImg));

//     return (
//       <li key={id}>
//        <Link to="">
//          <h2>{productName}</h2>
//          <p>{productPrice}</p>
//          <img src={Object.values(productImg)} alt="card img" />
//         </Link>;
//       </li>
//     );
//   }
// );
