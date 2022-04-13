import React from 'react'
import './ArticleCards.scss'
function ArticleCards() {
  return (
    <section className='artcards'>
        <div className="container">
            <div className="artcards__wrapper">
            <ul className="harticle__list">
            <li className="harticle__item">
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