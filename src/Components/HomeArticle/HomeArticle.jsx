import React from "react";
import "./HomeArticle.scss";
import { Link } from "react-router-dom";
import ArrowRight from "../../Assets/img/arrow-right.svg";

function HomeArticle() {
  return (
    <section className="harticle">
      <div className="container">
        <div className="harticle__wrapper">
          <Link className="harticle__title" to={"/articles"}>
            Articles
          </Link>
          <ul className="harticle__list">
            <li className="harticle__item">
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
              <div className=" harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            </li>
            <li className="harticle__item">
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
              <div className=" harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            </li>
            <li className="harticle__item">
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
              <div className=" harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            </li>
            <li className="harticle__item">
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
              <div className=" harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
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

export default HomeArticle;
