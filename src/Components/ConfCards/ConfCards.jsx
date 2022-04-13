import React from 'react'
import './ConfCards.scss'

// IMPORT images
import CardImg from '../../Assets/img/conf-cards.png';
import Avatar from '../../Assets/img/Avatars.png'
import Eye from '../../Assets/img/eye.svg'

function ConfCards() {
  return (
    <section className='confcards'>
        <div className="container">
            <div className="confcards__wrapper">
                <ul className='confcards__list'>
                    <li className='confcards__item'>
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
                    </li>
                </ul>
                <div className='confcards__btnbox'><button className='confcards__btn'>Show more</button></div>
            </div>
        </div>
    </section>
  )
}

export default ConfCards