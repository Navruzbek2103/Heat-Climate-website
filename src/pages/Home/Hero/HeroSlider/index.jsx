import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HeroProductImg1 from "./../../../../assets/images/kotyol-card-img.png";
import HeroProductImg2 from "./../../../../assets/images/Radiator/radiator-card-img-1.png";
import HeroProductImg3 from "./../../../../assets/images/nasos-card-img.png";
import HeroProductImg4 from "./../../../../assets/images/armatura-card-img.png";
import HeroProductImg5 from "./../../../../assets/images/gorelka-card-img.png";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import CardData from "../../Categories/Card";


// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay } from "swiper";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  console.log(CardData);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper__content">
            <p className="swiper__content-subtitle">Thermona</p>
            <h2 className="swiper__content-title">
              Котлы для удобной и экономной эксплуатации...
            </h2>
            <Link to="/single-page" className="swiper__content-link">
              Подробнее
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="swiper__hero">
            <img
              src={HeroProductImg1}
              alt="product img"
              className="swiper__hero-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <p className="swiper__content-subtitle">Thermona</p>
            <h2 className="swiper__content-title">
              Радиатор для удобной и экономной эксплуатации...
            </h2>
            <Link to="/single-page" className="swiper__content-link">
              Подробнее
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="swiper__hero">
            <img
              src={HeroProductImg2}
              alt="product img"
              className="swiper__hero-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <p className="swiper__content-subtitle">Thermona</p>
            <h2 className="swiper__content-title">
              Насосы для удобной и экономной эксплуатации...
            </h2>
            <Link to="/single-page" className="swiper__content-link">
              Подробнее
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="swiper__hero">
            <img
              src={HeroProductImg3}
              alt="product img"
              className="swiper__hero-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <p className="swiper__content-subtitle">Thermona</p>
            <h2 className="swiper__content-title">
              Арматура для удобной и экономной эксплуатации...
            </h2>
            <Link to="/single-page" className="swiper__content-link">
              Подробнее
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="swiper__hero">
            <img
              src={HeroProductImg4}
              alt="product img"
              className="swiper__hero-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__content">
            <p className="swiper__content-subtitle">Thermona</p>
            <h2 className="swiper__content-title">
              Горелки для удобной и экономной эксплуатации...
            </h2>
            <Link to="/single-page" className="swiper__content-link">
              Подробнее
              <RiArrowRightSLine />
            </Link>
          </div>
          <div className="swiper__hero">
            <img
              src={HeroProductImg5}
              alt="product img"
              className="swiper__hero-img"
            />
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
