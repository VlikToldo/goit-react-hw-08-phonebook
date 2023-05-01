import {NavLink} from 'react-router-dom';

import style from './navbar-auth.module.css'

const NavbarAuth = () => {
    return <div className={style.navLinkAuthBox}>
        <NavLink className={style.navLinkAuth} to='register'>Register</NavLink>  |
        <NavLink className={style.navLinkAuth} to='login'> Login</NavLink>
    </div>
}

export default NavbarAuth;