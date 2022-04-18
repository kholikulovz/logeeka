import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

//SASS
import './Header.scss'

//IMAGES
import Logo from '../../Assets/img/logo.svg'
import x_icon from '../../Assets/img/menu.svg'
import Bar from '../../Assets/img/bar_icon.svg'

//SubComponents
import MobileNav from './mobileNav'

function Header() {
    const barList = useRef()
    function openBar() {
        barList.current.classList.add('header__open')
    }
    function closeBar() {
        barList.current.classList.remove('header__open')
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="header__nav">
                    <NavLink to='/'><img className='header__logo' src={Logo} alt="logo" /></NavLink>
                    <div className='header__list'>
                        <NavLink className='header__link' to='/conference'>Conference</NavLink>
                        <NavLink className='header__link' to='/articles'>Articles</NavLink>
                        <NavLink className='header__link' to='/certificates'>Certificates</NavLink>
                        <NavLink className='header__link' to='/pricing'>Pricing</NavLink>
                        <NavLink className='header__link' to='/contacts'>Contacts</NavLink>
                        <NavLink className='header__link' to='/journal'>Journal</NavLink>
                        <NavLink className='header__link' to='/about'>About us</NavLink>
                    </div>
                    <button onClick={openBar} className='header__bar--open'><img src={Bar} alt="bar" /></button>
                    <div ref={barList} className="header__bar">
                        <div className='header__bar--box'>
                            <p className='header__bar--title'>Menu</p>
                            <button className='header__close' onClick={closeBar}>
                                <img className='header__bar--icon' src={x_icon} alt="img" />
                            </button>
                        </div>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header