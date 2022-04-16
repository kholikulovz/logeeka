import React from 'react'
import './JournalCards.scss'
import Download from "../../Assets/img/download.svg";
import Img from "../../Assets/img/hjournal-item.png";

function JournalCards() {
  return (
    <section className='jcards'>
        <div className="container">
            <div className="jcards__wrapper">
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
          <div className='confcards__btnbox'><button className='confcards__btn'>Show more</button></div>
            </div>
        </div>
    </section>
  )
}

export default JournalCards