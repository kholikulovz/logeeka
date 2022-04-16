import React from "react";
import "./HomeJournal.scss";
import { Link } from "react-router-dom";

// import images
import ArrowRight from "../../Assets/img/arrow-right.svg";
import Download from "../../Assets/img/download.svg";
import Img from "../../Assets/img/hjournal-item.png";

function HomeJournal() {
  return (
    <section className="hjournal">
      <div className="container">
        <div className="hjournal__wrapper">
          <Link className="hjournal__title" to={"/journal"}>
            Journal
          </Link>
          <ul className="hjournal__list">
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
            <li className="hjournal__item">
              <img className="hjournal__item-img" src={Img} alt="" />
              <div className="hjournal__item-wrapper">
                <h4 className="hjournal__item-title">
                  The role of user preference in the customized control of
                  ......
                </h4>
                <div className="hjournal__item-box">
                  <span className="hjournal__item-date">1-aprel 12:30</span>
                  <button className="hjournal__item-btn">
                    <img
                      src={Download}
                      alt="downloader"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <Link className="more__link" to={"/"}>
            More...{" "}
            <img
              className="more__link-img"
              src={ArrowRight}
              alt="ArroowRight"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeJournal;
