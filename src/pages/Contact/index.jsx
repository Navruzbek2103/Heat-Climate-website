import React from "react";
import "./style.scss";

const index = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-page__wrapper">
          <address className="contact-page__wrapper-address">
            <h2 className="contact-page__wrapper-address-title">Contacts</h2>
            <ul className="contact-page__wrapper-address-list">
              <li className="contact-page__wrapper-address-item">
                <h3 className="contact-page__wrapper-address-item-subtitle">
                  Address
                </h3>
                <p className="contact-page__wrapper-address-item-text">
                  Chilanzar, Tashkent
                </p>
              </li>
              <li className="contact-page__wrapper-address-item">
                <h3 className="contact-page__wrapper-address-item-subtitle">
                  Phone number
                </h3>
                <p className="contact-page__wrapper-address-item-text">
                  +998 77 277 77 77
                </p>
              </li>
              <li className="contact-page__wrapper-address-item">
                <h3 className="contact-page__wrapper-address-item-subtitle">
                  Social Media
                </h3>
                <ul className="contact-page__wrapper-address-item-sublist">
                  <li className="contact-page__wrapper-address-item-subitem">
                    <a
                      href=""
                      target={`_blank`}
                      className="contact-page__wrapper-address-item-subitem-link"
                    >
                      Facebook
                    </a>
                  </li>
                  <li className="contact-page__wrapper-address-item-subitem">
                    <a
                      href=""
                      target={`_blank`}
                      className="contact-page__wrapper-address-item-subitem-link"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="contact-page__wrapper-address-item-subitem">
                    <a
                      href=""
                      target={`_blank`}
                      className="contact-page__wrapper-address-item-subitem-link"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <a
              href="tel:+998772777777"
              className="contact-page__wrapper-address-telLink"
            >
              Call now
            </a>
          </address>
          <div className="contact-page__wrapper-location" style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Ташкент
            </a>
            <a
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.204520%2C41.285575&mode=whatshere&utm_medium=mapframe&utm_source=maps&whatshere%5Bpoint%5D=69.203437%2C41.285811&whatshere%5Bzoom%5D=17&z=17"
              style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}
            >
              махалля Катортол
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=69.204520%2C41.285575&mode=whatshere&whatshere%5Bpoint%5D=69.203437%2C41.285811&whatshere%5Bzoom%5D=17&z=17"
              width="560"
              height="400"
              // frameborder="1"
              // allowfullscreen="true"
              style={{position: "relative"}}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
