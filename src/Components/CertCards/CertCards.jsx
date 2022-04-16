import React from "react";
import './CertCards.scss'
import Certificate from '../../Assets/img/certificate.png'

function CertCards() {
  return (
    <section className="certcards">
      <div className="container">
        <div className="certcards__wrapper">
          <ul className="certcards__list">
            <li className="certcards__item">
              <img className="certcards__img" src={Certificate} alt=""  width={252} height={179}/>
              <h4 className="certcards__title">CCID : 2200089</h4>
            </li>
            <li className="certcards__item">
              <img className="certcards__img" src={Certificate} alt="" />
              <h4 className="certcards__title">CCID : 2200089</h4>
            </li>
            <li className="certcards__item">
              <img className="certcards__img" src={Certificate} alt="" />
              <h4 className="certcards__title">CCID : 2200089</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CertCards;
