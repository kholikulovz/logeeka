import React from "react";
import "./HomeNews.scss";
import { Link } from "react-router-dom";
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

function HomeNews() {
  return (
    <section className="hnews">
      <div className="container">
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
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__box">
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__box">
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
                <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
                <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                <div className="hnews__box">
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                    <span className="hnews__span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomeNews;
