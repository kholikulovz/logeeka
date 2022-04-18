import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./NewsMain.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Calendar from '../../Assets/img/calendar.svg'
import Eye from '../../Assets/img/eye.svg'
import Clock from '../../Assets/img/clock.svg'
import Share from "../../Assets/img/share-2.svg";

function NewsMain() {
  return (
    <section className="news">
      <div className="container">
        <div className="pricing__navlink">
          <NavLink className={"pricing__navlink"} to={"/"}>
            Home
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink className={"pricing__navlink"} to={"/news"}>
            News
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink
            className={"pricing__navlink pricing__navlink--active"}
            to={"/#"}
          >
            Ukrainian
          </NavLink>
        </div>
        <div className="news__wrapper">
          <div className="news__left">
            <h2 className="news__left-title">
              Ukrainian researchers flee trauma and terror of war
            </h2>
            <p className="news__left-text">
              Refugees find aid and jobs, but many remain to fight Russian
              invaders
            </p>
            <div className="hnews__slide-box">
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
          </div>
          <div className="news__right">
            <h1 className="news__right-title">
              Ukrainian researchers flee trauma and terror of war
            </h1>
            <p className="news__right-text">
              <span className="news__right-text--bold">keyword : </span>
              ham rivojlanishi va o‘sishida pul muhim ahamiyatga ega
              bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4 tasida pul va
              moddiyatning ahamiyati bor. Masalan, namoz o‘qish uchun kiyim,
              masjid kerak. Ro‘za tutish uchun taom sotib olish Islom dinining
              ham rivojlanishi va o‘sishida pul muhim ahamiyatga ega
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
            <p className="news__right-text">
              — Islom dinining ham rivojlanishi va o‘sishida pul muhim
              ahamiyatga ega bo‘lgan. Dinimizning asosiy 5 ta farz amallaridan 4
              tasida pul va moddiyatning ahamiyati bor. Masalan, namoz o‘qish
              uchun kiyim, masjid kerak. Ro‘za tutish uchun taom sotib olish
              Islom dinining ham rivojlanishi va o‘sishida pul muhim ahamiyatga
              ega{" "}
            </p>
            <button className="news__btn">
              <img src={Share} alt="" />
            </button>
          </div>
        </div>
        <div className="hnwes__wrapper">
          <Link className="hnews__title" to={"/news"}>
            News
          </Link>
          <Swiper className="hnews__swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__slide-box">
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Preprint server removes ‘inflammatory’ papers in superconductor controversy</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__slide-box">
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__slide-box">
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__slide-box">
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default NewsMain;
