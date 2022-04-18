import { NavLink } from 'react-router-dom'

//IMAGES

function MobileNav() {
    return (
        <>
            <NavLink className='header__link header__mobile--link' to='/conference'>Conference</NavLink>
            <NavLink className='header__link header__mobile--link' to='/articles'>Articles</NavLink>
            <NavLink className='header__link header__mobile--link' to='/certificates'>Certificates</NavLink>
            <NavLink className='header__link header__mobile--link' to='/pricing'>Pricing</NavLink>
            <NavLink className='header__link header__mobile--link' to='/contacts'>Contacts</NavLink>
            <NavLink className='header__link header__mobile--link' to='/journal'>Journal</NavLink>
            <NavLink className='header__link header__mobile--link' to='/about'>About us</NavLink>
        </>
    )
}

export default MobileNav