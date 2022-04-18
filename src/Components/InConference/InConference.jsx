import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./InConference.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Calendar from "../../Assets/img/calendar.svg";
import Eye from "../../Assets/img/eye.svg";
import Clock from "../../Assets/img/clock.svg";
import Phone from "../../Assets/img/phone.svg";
import Mappin from "../../Assets/img/map-pin.svg";
import Share from "../../Assets/img/share-2.svg";
import Smth from "../../Assets/img/smthh.svg";
import Telegram from "../../Assets/img/telegram-white.svg";
import Whatsapp from "../../Assets/img/Whatsapp.svg";
import Facebook from "../../Assets/img/facebook.svg";
import Instagram from "../../Assets/img/insta.svg";
import Computer from "../../Assets/img/computer.png";
import Abdusattor from "../../Assets/img/Abdusattor.png";
import CardImg from '../../Assets/img/conf-cards.png';
import Avatar from '../../Assets/img/Avatars.png'

function InConference() {
  return (
    <section className="inconference">
      <div className="container">
        <div className="pricing__navlink">
          <NavLink className={"pricing__navlink"} to={"/"}>
            Home
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink
            className={"pricing__navlink pricing__navlink--active"}
            to={"/#"}
          >
            Conference
          </NavLink>
        </div>
        <div className="news__wrapper">
          <div className="news__left inconference__left">
            <div className="inconference__left-box">
              <img src={Abdusattor} alt="" />
              <div className="inconference__box">
                <h2 className="news__left-title inconference__left-title">
                  Abdusattor Abdurahimov
                </h2>
                <p className="news__left-text inconference__left-text">
                  Frilanser va IT biznesmen
                </p>
              </div>
            </div>
            <ul className="inconference__menu">
              <li className="inconference__item">
                <img
                  className="inconference__icon"
                  src={Calendar}
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="news__left-text inconference__left-text">Sana : </p>
                <p className="inconference__name">26 Yanvar</p>
              </li>
              <li className="inconference__item">
                <img
                  className="inconference__icon"
                  src={Clock}
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="news__left-text inconference__left-text">Vaqt : </p>
                <p className="inconference__name">10:55</p>
              </li>
              <li className="inconference__item">
                <img
                  className="inconference__icon"
                  src={Phone}
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="news__left-text inconference__left-text">Telefon : </p>
                <p className="inconference__name">+99871 207 7173</p>
              </li>
              <li className="inconference__item">
                <img
                  className="inconference__icon"
                  src={Mappin}
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="news__left-text inconference__left-text">Manzil : </p>
                <p className="inconference__name--simple">    25-uy, Hamid  Olimjon, Shayhontoxur  tumani,  Toshkent,  100500, Toshkent  vil.</p>
              </li>
            </ul>
          </div>
          <div className="news__right">
            <h1 className="news__right-title">
              Respublika ilmiy-amaliy konferensiyasi: Tabiiy fanlar: nazariya va
              amaliyot
            </h1>
            <p className="news__right-text">
              Islom dinining ham rivojlanishi va o‘sishida pul muhim ahamiyatga
              ega
            </p>
            <img className="inconference__img" src={Computer} alt="computer" />
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
            <ul className="inconference__list">
                <li className="inconference__link">
                <button className="inconference__btn">
              <img src={Smth} alt="" width={24} height={24}/>
            </button>
                </li>
                <li className="inconference__link">
                <button className="inconference__btn">
              <img src={Telegram} alt="" width={24} height={24}/>
            </button>
                </li>
                <li className="inconference__link">
                <button className="inconference__btn">
              <img src={Facebook} alt="" width={24} height={24}/>
            </button>
                </li>
                <li className="inconference__link">
                <button className="inconference__btn">
              <img src={Whatsapp} alt="" width={24} height={24}/>
            </button>
                </li>
                <li className="inconference__link">
                <button className="inconference__btn">
              <img src={Instagram} alt="" width={24} height={24}/>
            </button>
                </li>
            </ul>
          </div>
        </div>
        {/* <div className="wrapper"> */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="confcards__item">
            <img className='confcards__item-img' src={CardImg} alt="card-img" />
                        <div className="confcards__box">
                        <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                        <div className='confcards__item-datebox'>
                            <span className='confcards__item-date'>26/01/2022</span>
                            <span className='confcards__item-line'> | </span>
                            <span className='confcards__item-time'>10:00</span>
                        </div>
                        <div className='confcards__item-box'>
                                <div className='confcards__item-subbox'>
                                <img className='confcards__item-avatar' src={Avatar} alt="" />
                                <div className='confcards__item-minbox'>
                                    <p className='confcards__item-name'>Abbos Janizakov</p>
                                    <p className='confcards__item-profession'>UX / UI Dizayner</p>
                                </div>
                                </div>
                                <span className='confcards__item-watching'>
                                    <img className='confcards__item-icon' src={Eye} alt="" /> 1300
                                </span>
                        </div>
                        </div>
            </SwiperSlide>
          </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
}

export default InConference;
