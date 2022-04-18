import React from "react";
import "./ContactsMain.scss";

// Import Images
import Phone from "../../Assets/img/phone.svg";
import Mail from "../../Assets/img/mail.svg";
import Insta from "../../Assets/img/004-instagram.svg";
import Telegram from "../../Assets/img/telegram.svg";
import Facebook from "../../Assets/img/facebook-icon.svg";

function ContactsMain() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__top">
            <ul className="contacts__menu">
              <li className="contacts__item">
                <a className="contacts__link" href="">
                  <img className="contacts__icon" src={Phone} alt="" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Phone Number</p>
                    <a className="contacts__textlink" href="">
                      +998901234567
                    </a>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="">
                  <img className="contacts__icon" src={Mail} alt="" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Email Address</p>
                    <a className="contacts__textlink" href="">
                      logeekascince@gmail.com
                    </a>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="">
                  <img className="contacts__icon" src={Insta} alt="" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Instagram</p>
                    <a className="contacts__textlink" href="">
                      Logeekascince
                    </a>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="">
                  <img className="contacts__icon" src={Telegram} alt="" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Telegram</p>
                    <a className="contacts__textlink" href="">
                      Logeekascince
                    </a>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="">
                  <img className="contacts__icon" src={Facebook} alt="" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Facebook</p>
                    <a className="contacts__textlink" href="">
                      Logeekascince
                    </a>
                  </div>
                </a>
              </li>
            </ul>
            <form className="contacts__form">
              <h2 className="contacts__form-title">Send Message</h2>
              <p className="contacts__form-text">
                If you have any questions, you can send us an SMS or contact us
                by phone you can also contact us via social networks.
              </p>
              <div className="contacts__inputbox">
                <input
                  className="contacts__input"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="contacts__input"
                  placeholder="Email address"
                  type="text"
                />
              </div>
              <div className="contacts__inputbox">
                <input
                  className="contacts__input"
                  placeholder="Phone number"
                  type="text"
                />
                <input
                  className="contacts__input"
                  placeholder="Telegram"
                  type="text"
                />
              </div>
              <textarea
                className="contacts__input contacts__textarea"
                placeholder="Message"
              ></textarea>
            </form>
          </div>
          <h3 className="contacts__subtext">Find us by map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2566544825618!2d69.24633840368692!3d41.32503208608863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d%3A0x23ac4a5a705b84ab!2sNajot%20Ta&#39;lim!5e0!3m2!1suz!2s!4v1650240911827!5m2!1suz!2s"
            width={1280}
            height={560}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactsMain;
