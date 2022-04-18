import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./InArticles.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Download from '../../Assets/img/download-white.svg'
import Share from "../../Assets/img/share-2.svg";

function InArticles() {
  return (
    <section className="inarticles">
      <div className="container">
        <div className="pricing__navlink">
          <NavLink className={"pricing__navlink"} to={"/"}>
            Home
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink className={"pricing__navlink"} to={"/news"}>
            Articles
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink
            className={"pricing__navlink pricing__navlink--active"}
            to={"/#"}
          >
            Ways to strengthten
          </NavLink>
        </div>
        <div className="news__wrapper">
          <div className="news__left">
            <h2 className="news__left-title">
            Abdusattor Abdurahimov
            </h2>
            <p className="news__left-text">
            Frilanser va IT biznesmen 
            </p>
          </div>
          <div className="news__right inarticles__right">
            <h1 className="news__right-title">
            Ways to strengthen financial controlin the rational USE of state...
            </h1>
            <p className="news__right-text">
              <span className="news__right-text--bold">keyword : </span>
              ham rivojlanishi va o‘sishida pul muhim ahamiyatga ega
              bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4 tasida pul va
              moddiyatning ahamiyati bor. Masalan, namoz o‘qish uchun kiyim,
              masjid kerak. Ro‘za tutish uchun taom sotib olish Islom dinining
              ham rivojlanishi va o‘sishida pul muhim ahamiyatga ega
            </p>
            <h4 className="inarticles__subtitle">Аннoтация</h4>
            <p className="news__right-text">
              — Islom dinining ham rivojlanishi va o‘sishida pul muhim
              ahamiyatga ega bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4
              tasida pul va moddiyatning ahamiyati bor. Masalan, namoz o‘qish
              uchun kiyim, masjid kerak. Ro‘za tutish uchun taom sotib olish
              Islom dinining ham rivojlanishi va o‘sishida pul muhim ahamiyatga
              ega{" "}
            </p>
            <p className="news__right-text">
              — Islom dinining ham rivojlanishi va o‘sishida pul muhim
              ahamiyatga ega bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4
              tasida pul va moddiyatning ahamiyati bor. Masalan, namoz o‘qish
              uchun kiyim, masjid kerak. Ro‘za tutish uchun taom sotib olish
              Islom dinining ham rivojlanishi va o‘sishida pul muhim ahamiyatga
              ega{" "}
            </p>
            <p className="news__right-text">
              — Islom dinining ham rivojlanishi va o‘sishida pul muhim
              ahamiyatga ega bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4
              tasida pul va moddiyatning ahamiyati bor. Masalan, namoz o‘qish
              uchun kiyim, masjid kerak. Ro‘za tutish uchun taom sotib olish
              Islom dinining ham rivojlanishi va o‘sishida pul muhim ahamiyatga
              ega{" "}
            </p>
            <div className="inarticles__box">
            <button className="news__btn">
              <img src={Share} alt="" />
            </button>
              <div className="inarticles__subbox">
              <p className="inarticles__subbox-text">Download PDF</p>
            <button className="news__btn">
              <img src={Download} alt="" />
            </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hnwes__wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={2}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="harticle__item">
            {/* <li className="harticle__item"> */}
              <div className="harticle__item-box--res">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
              <h4 className="harticle__item-title">
                Ways to strengthen financial control in the rational USE of
                state...
              </h4>
              <p className="harticle__item-name">Xodjayev Erkin</p>
              <div className="harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            {/* </li> */}
            </SwiperSlide>
            <SwiperSlide className="harticle__item">
            {/* <li className="harticle__item"> */}
              <div className="harticle__item-box--res">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
              <h4 className="harticle__item-title">
                Ways to strengthen financial control in the rational USE of
                state...
              </h4>
              <p className="harticle__item-name">Xodjayev Erkin</p>
              <div className="harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            {/* </li> */}
            </SwiperSlide>
            <SwiperSlide className="harticle__item">
            {/* <li className="harticle__item"> */}
              <div className="harticle__item-box--res">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
              <h4 className="harticle__item-title">
                Ways to strengthen financial control in the rational USE of
                state...
              </h4>
              <p className="harticle__item-name">Xodjayev Erkin</p>
              <div className="harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            {/* </li> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default InArticles;
