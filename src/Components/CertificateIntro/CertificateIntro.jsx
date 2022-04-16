import React from "react";

import "./CertificateIntro.scss";
import Lupa from "../../Assets/img/search.svg";

function CertificateIntro() {
  return (
    <section className="certintro">
      <div className="container">
        <div className="certintro__wrapper">
          <h1 className="certintro__title">Certificates</h1>
          <h2 className="certintro__subtitle">
            Matbaa va matn terish sanoatining oddiygina soxta matnidir. Lorem
            Ipsum 1500-yillardan beri{" "}
          </h2>
          <form className="artintro__form" action="">
            <div className="artintro__box">
              <img className="artintro__icon" src={Lupa} alt="" />
              <input
                className="artintro__input"
                type="search"
                placeholder="Search"
              />
            </div>
            <button className="artintro__btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CertificateIntro;
