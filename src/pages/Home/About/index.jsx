import React from 'react'
import "./style.scss"
import AboutSectionImg from "./../../../assets/images/section-about-img.png"

const index = () => {
  return (
    <section className="about-home">
      <div className="container">
        <div className="about-home__wrapper">
          <div className="about-home__wrapper-box">
            <div className="about-home__wrapper-box-inner">
              <h2 className="about-home__wrapper-box-inner-title">
                Кто мы и чем мы занимаемся?
              </h2>
            </div>
            <p className="about-home__wrapper-box-text">
              Интернет-магазин HEAT-CLIMATE.UZ даёт возможность купить
              отопительные приборы и системы отопления в Ташкенте по низким
              ценам. В нашем каталоге предлагаются лучшие газовые и
              электрические котлы, бойлеры, радиаторы, напольные конвекторы,
              расширительные баки, коллекторы, полотенце-сушилки, электрические
              водонагреватели, канализационные трубы, фитинги, насосы, газовые
              регуляторы, инсталляции, теплообменники, водяные тепловентиляторы
              от мировых известных производителей.
            </p>
          </div>
          <img src={AboutSectionImg} alt="our community" className="about-home__wrapper-img" />
        </div>
      </div>
    </section>
  );
}

export default index