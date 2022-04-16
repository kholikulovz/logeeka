import React from 'react'

import './ArticleIntro.scss'
import Lupa from '../../Assets/img/search.svg';

function ArticleIntro() {
  return (
    <section className='artintro'>
        <div className="container">
            <div className="artintro__wrapper">
                <h1 className='artintro__title'>Articles</h1>
                <form className='artintro__form' action="">
                    <div className='artintro__box'>
                    <img className='artintro__icon' src={Lupa} alt="" />
                    <input className='artintro__input' type="search" placeholder='Search'/>
                    </div>
                    <button className='artintro__btn'>Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ArticleIntro