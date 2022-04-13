import { Link } from 'react-router-dom'
//SASS
import './Footer.scss'

//IMAGES
import Logo from '../../Assets/img/logo.svg'
import facebook from '../../Assets/img/facebook.svg'
import insta from '../../Assets/img/insta.svg'
import twitter from '../../Assets/img/twitter.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logoBox">
                        <img className='footer__logoBox--img' src={Logo} alt="Logo" />
                        <p className='footer__logoBox--title'>Refugees find aid and jobs, but many remain to fight Russian invaders</p>
                    </div>
                    <nav className="footer__nav">
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>Conference</h2>
                            <Link className='footer__link' to='/'>Articles</Link>
                            <Link className='footer__link' to='/'>Certificates</Link>
                            <Link className='footer__link' to='/'>Pricing</Link>
                            <Link className='footer__link' to='/'>Offline</Link>
                        </div>
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>About</h2>
                            <Link className='footer__link' to='/'>About us</Link>
                            <Link className='footer__link' to='/'>Journal</Link>
                            <Link className='footer__link' to='/'>Careers</Link>
                        </div>
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>Help</h2>
                            <Link className='footer__link' to='/'>FAQs</Link>
                            <Link className='footer__link' to='/'>Contact Us</Link>
                        </div>
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>Social media</h2>
                            <Link className='footer__link footer__sublink' to='/'>
                                <img className='footer__icon' src={facebook} alt="facebook" />
                                Facebook
                            </Link>
                            <Link className='footer__link footer__sublink' to='/'>
                                <img className='footer__icon' src={insta} alt="insta" />
                                Instagram
                            </Link>
                            <Link className='footer__link footer__sublink' to='/'>
                                <img className='footer__icon' src={twitter} alt="twitter" />
                                Twitter
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='footer__subwrapper'>
                <p className='footer__subtext'>© Logeeka 2022</p>
            </div>
        </footer>
    )
}

export default Footer