import React from "react";
import "./style.scss";
import {NavLink, Link} from "react-router-dom";
import SiteLogo from "./../../assets/images/site-logo.svg";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import GetterImg from "./../../assets/images/Getter-logo.svg"

const index = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrapper">
            <div className="footer-top__left">
              <nav className="footer-top__left-nav">
                <Link to="/" className="footer-top__left-nav-link">
                  <img
                    src={SiteLogo}
                    alt="site logo"
                    className="footer-top__left-nav-link-img"
                  />
                </Link>
                <ul className="footer-top__left-nav-list">
                  <li className="footer-top__left-nav-item">
                    <NavLink
                      to="/Бренды"
                      className="footer-top__left-nav-item-link"
                    >
                      Бренды
                    </NavLink>
                  </li>
                  <li className="footer-top__left-nav-item">
                    <NavLink
                      to="/Сервисная-служба"
                      className="footer-top__left-nav-item-link"
                    >
                      Сервисная служба
                    </NavLink>
                  </li>
                  <li className="footer-top__left-nav-item">
                    <NavLink
                      to="/Новости"
                      className="footer-top__left-nav-item-link"
                    >
                      Новости
                    </NavLink>
                  </li>
                  <li className="footer-top__left-nav-item">
                    <NavLink
                      to="/Контакты"
                      className="footer-top__left-nav-item-link"
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="footer-top__left-desc">
                <p className="footer-top__left-desc-text">
                  The way to get started is to quit talking and begin doing.
                  Your most unhappy customers are your greatest source of
                  learning. The question isn't who is going to let me. It's who
                  is going to stop me.
                </p>
              </div>
            </div>
            <address className="footer-top__right">
              <div className="footer-top__right-head">
                <p className="footer-top__right-head-address">
                  М. Улугбекский р-н. улица Олтинтепа дом 150
                </p>
                <a
                  href="mailto:heat-climate@mail.ru"
                  className="footer-top__right-head-gmail"
                >
                  heat-climate@mail.ru
                </a>
              </div>
              <ul className="footer-top__right-list">
                <li className="footer-top__right-item">+998 93 567-89-56</li>
                <li className="footer-top__right-item">+998 90 123-45-67</li>
                <li className="footer-top__right-item">+998 95 000-04-00</li>
                <li className="footer-top__right-item">+998 95 144-04-00</li>
                <li className="footer-top__right-item">+998 94 611-71-07</li>
              </ul>
            </address>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <ul className="footer-bottom__left-list">
              <li className="footer-bottom__left-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__left-item-link"
                >
                  Privacy & Policy
                </a>
              </li>
              <li className="footer-bottom__left-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__left-item-link"
                >
                  Terms of use
                </a>
              </li>
            </ul>
            <ul className="footer-bottom__center-icon-list">
              <li className="footer-bottom__center-icon-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__center-icon-item-link"
                >
                  <FaFacebookF className="footer-bottom__center-icon-item-link-img" />
                </a>
              </li>
              <li className="footer-bottom__center-icon-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__center-icon-item-link"
                >
                  <BsInstagram className="footer-bottom__center-icon-item-link-img" />
                </a>
              </li>
              <li className="footer-bottom__center-icon-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__center-icon-item-link"
                >
                  <FaTelegramPlane className="footer-bottom__center-icon-item-link-img" />
                </a>
              </li>
              <li className="footer-bottom__center-icon-item">
                <a
                  href=""
                  target={`_blank`}
                  className="footer-bottom__center-icon-item-link"
                >
                  <BsTwitter className="footer-bottom__center-icon-item-link-img" />
                </a>
              </li>
            </ul>
            <div className="footer-bottom__right">
              <p className="footer-bottom__right-text">Сайт разработан в:</p>
              <a
                href=""
                target={"_blank"}
                className="footer-bottom__right-link"
              >
                <img
                  src={GetterImg}
                  alt="Getter img"
                  className="footer-bottom__right-link-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
