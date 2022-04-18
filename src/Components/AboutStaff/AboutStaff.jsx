import React from "react";
import "./AboutStaff.scss";

// import images

import Farangiz from "../../Assets/img/farangiz.png";
import Farruh from "../../Assets/img/farrukh.png";
import Behruz from "../../Assets/img/bekhruz.png";
import Diyorbek from "../../Assets/img/diyorbek.png";
import Facebook from "../../Assets/img/facebook-about.svg";
import Twitter from "../../Assets/img/twitter-about.svg";
import Linkedin from "../../Assets/img/linkedin.svg";

function Staffs() {
  return (
    <section className="staffs">
      <div className="container">
        <div className="staffs__wrapper">
          <h2 className="staffs__title">Our staff</h2>
          <ul className="staffs__menu">
            <li className="staffs__item">
              <img className="staffs__img" src={Farruh} alt="" />
              <h3 className="staffs__subtitle">Farrukh Khusainov</h3>
              <div className="staffs__box">
                <p className="staffs__text">Founder & CEO</p>
                <div className="staffs__subbox">
                  <img className="staffs__subimg" src={Twitter} alt="twitter" />
                  <img
                    className="staffs__subimg"
                    src={Facebook}
                    alt="facebook"
                  />
                  <img
                    className="staffs__subimg"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </div>
              </div>
            </li>
            <li className="staffs__item">
              <img className="staffs__img" src={Farangiz} alt="" />
              <h3 className="staffs__subtitle">Farangiz Khudoyorova</h3>
              <div className="staffs__box">
                <p className="staffs__text">Co-Founder, Director</p>
                <div className="staffs__subbox">
                  <img className="staffs__subimg" src={Twitter} alt="twitter" />
                  <img
                    className="staffs__subimg"
                    src={Facebook}
                    alt="facebook"
                  />
                  <img
                    className="staffs__subimg"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </div>
              </div>
            </li>
            <li className="staffs__item">
              <img className="staffs__img" src={Behruz} alt="" />
              <h3 className="staffs__subtitle">Bekhruz Usmonov</h3>
              <div className="staffs__box">
                <p className="staffs__text">HR Manager</p>
                <div className="staffs__subbox">
                  <img className="staffs__subimg" src={Twitter} alt="twitter" />
                  <img
                    className="staffs__subimg"
                    src={Facebook}
                    alt="facebook"
                  />
                  <img
                    className="staffs__subimg"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </div>
              </div>
            </li>
            <li className="staffs__item">
              <img className="staffs__img" src={Diyorbek} alt="" />
              <h3 className="staffs__subtitle">Diyorbek Satimboyev</h3>
              <div className="staffs__box">
                <p className="staffs__text">it specialist</p>
                <div className="staffs__subbox">
                  <img className="staffs__subimg" src={Twitter} alt="twitter" />
                  <img
                    className="staffs__subimg"
                    src={Facebook}
                    alt="facebook"
                  />
                  <img
                    className="staffs__subimg"
                    src={Linkedin}
                    alt="linkedin"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Staffs;
