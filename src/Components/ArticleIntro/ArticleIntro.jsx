import React from 'react'

import './ArticleIntro.scss'

function ArticleIntro() {
  return (
    <section className='artintro'>
        <div className="container">
            <div className="artintro__wrapper">
                <h1 className='artintro__title'>Articles</h1>
                <form action="">
                    <img src="" alt="" />
                    <input type="search" placeholder='Search'/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ArticleIntro