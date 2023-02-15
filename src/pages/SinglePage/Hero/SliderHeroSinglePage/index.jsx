import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./style.css";
import ProductImgSingle1 from "./../../../../assets/images/singlePageImage-1.png";
import ProductImgSingle2 from "./../../../../assets/images/singlePageImage-3.png";
import ProductImgSingle3 from "./../../../../assets/images/singlePageImage-subimg1.png";
import ProductImgSingle4 from "./../../../../assets/images/singlePageImage-subimg2.png";


// import required modules
import { FreeMode, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper-wrapper-box">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="product-img-single" src={ProductImgSingle1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="product-img-single" src={ProductImgSingle2} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper4"
      >
        <SwiperSlide>
          <img src={ProductImgSingle3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ProductImgSingle4} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
