import { NavLink } from 'react-router-dom'

//IMAGES

function MobileNav() {
    return (
        <>
            <NavLink className='header__link header__mobile--link' to='/'>Conference</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>Articles</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>Certificates</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>Pricing</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>Contacts</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>Journal</NavLink>
            <NavLink className='header__link header__mobile--link' to='/'>About us</NavLink>
        </>
    )
}

export default MobileNav