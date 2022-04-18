import React from 'react';

import './ArticleCards.scss';


function ArticleCards() {

  return (
    <section className='artcards'>
        <div className="container">
            <div className="artcards__wrapper">
              <ul className='artcards__menu'>
                <li className='artcards__item'>
                    <button className='artcards__btn artcards__btn--active'>
                      All
                    </button>
                    <button className='artcards__btn'>
                      Kimyo
                    </button>
                    <button className='artcards__btn'>
                      Biologiya
                    </button>
                    <button className='artcards__btn'>
                      Matematika
                    </button>
                    <button className='artcards__btn'>
                      Adabiyot
                    </button>
                    <button className='artcards__btn'>
                      Tibbiyot
                    </button>
                </li>
              </ul>
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
              <div className="harticle__item-box">
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
              <div className="harticle__item-box">
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
              <div className="harticle__item-box">
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
              <div className="harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            </li>
          </ul>
          <div className='confcards__btnbox'><button className='confcards__btn'>Show more</button></div>
            </div>
        </div>
    </section>
  )
}

export default ArticleCards