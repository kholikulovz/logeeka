

//SASS
import './HomeIntro.scss'

function HomeIntro(){
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__wrapper">
                    <h1 className='intro__title'>Logeeka Science</h1>
                    <ul className='intro__list'>
                        <li className='intro__item'>
                            <div className='intro__box'>
                                <p className='intro__text'>BY YUNHE TONG</p>
                                <span className='intro__text'> | </span>
                                <time className='intro__text'>15 MAR 2022</time>
                            </div>
                            <h2 className='intro__subtitle'>Many Black physicists find fulfillment teaching outside the ivory tower</h2>
                            <p className='intro__subtext'>MORGAN SHROK</p>
                        </li>
                        <li className='intro__item'>
                            <div className='intro__box'>
                                <p className='intro__text'>BY YUNHE TONG</p>
                                <span className='intro__text'> | </span>
                                <time className='intro__text'>15 MAR 2022</time>
                            </div>
                            <h2 className='intro__subtitle'>Many Black physicists find fulfillment teaching outside the ivory tower</h2>
                            <p className='intro__subtext'>MORGAN SHROK</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default HomeIntro