import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
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
        {
          CardData.map((category) => {
            if(Object.keys(category)[0] === "NewProducts"){
              return Object.values(category)[0].map(({ id, desc, productName, productImg}) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="swiper__content">
                      <p className="swiper__content-subtitle">Thermona</p>
                      <h2 className="swiper__content-title">{desc}</h2>
                      <Link
                        to={productName.split(" ").join("-")}
                        className="swiper__content-link"
                      >
                        Подробнее
                        <RiArrowRightSLine />
                      </Link>
                    </div>
                    <div className="swiper__hero">
                      <img
                        src={productImg[0]}
                        alt="product img"
                        className="swiper__hero-img"
                      />
                    </div>
                  </SwiperSlide>
                );
              });
            }
          })
        }


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
