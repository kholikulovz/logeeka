import React from "react";
import "./AboutMain.scss";
import { NavLink } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Building from "../../Assets/img/building.png";
import Doi from "../../Assets/img/doi.png";
import Google from "../../Assets/img/google-scholar.png";

function AboutMain() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__main">
            <img
              className="about__img"
              src={Building}
              alt="Building"
              width={437}
              height={417}
            />
            <div className="about__aside">
              <h2 className="about__title">Loogeka Science</h2>
              <p className="about__text">
                This platform is an official page of the international
                scientific journal of Logeeka Science, where you can find full
                information about our journals and conferences, services,
                scientific council, activities and contacts. Logeeka Science
                company was founded in 2022 by a team of young and ambitious
                people. All specialists of our team have many years of
                experience and successful cases in this area. Our goal is to
                present to the world a new type of scientific journal and to
                unite the scientific views of East and West at one point and
                serve to create new inventions. Our goal is to present to the
                world a new type of scientific journal and to unite the
                scientific views of East and West at one point and serve to
                create new inventions.
              </p>
              <NavLink to={"/staffs"} className="about__btn">
                About our staff
              </NavLink>
            </div>
          </div>
          <div className="about__companies">
            <h3 className="about__subtitle">Companies that recognize us</h3>
            <img className="about__subimg  about__subimg--small" src={Doi} alt="doi-logo" />
            <img className="about__subimg" src={Google} alt="google-scholarship" />
            <p className="about__subtext">
              This platform is an official page of the international scientific
              journal of Logeeka Science, where you can find full information
              about our journals and conferences, services, scientific council,
              activities and contacts. Logeeka Science company was founded in
              2022 by a team of young and ambitious people. All specialists of
              our team have many years of experience and successful cases in
              this area. Our goal is to present to the world a new type of
              scientific journal and to unite the scientific views of East and
              West at one point and serve to create new inventions. Our goal is
              to present to the world a new type of scientific journal and to
              unite the scientific views of East and West at one point and serve
              to create new inventions.
            </p>
          </div>
          <div className="about__sponsors">
            <h3 className="about__subtitle">Our sponsors</h3>
            <Swiper className="about__swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={4.5}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="about__slide">
            <img className="about__slide-img about__slide-img--small" src={Doi} alt="doi-logo"/>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img" src={Google} alt="google-scholarship" />
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img about__slide-img--small" src={Doi} alt="doi-logo"/>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img" src={Google} alt="google-scholarship" />
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img about__slide-img--small" src={Doi} alt="doi-logo"/>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img" src={Google} alt="google-scholarship" />
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img about__slide-img--small" src={Doi} alt="doi-logo"/>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
            <img className="about__slide-img" src={Google} alt="google-scholarship" />
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
