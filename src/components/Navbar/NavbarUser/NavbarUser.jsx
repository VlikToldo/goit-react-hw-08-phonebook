import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

// import style from './navbar-user.module.css';

const NavbarUser = () => {
    const {name,email} = useSelector(getUser);
    return <div>
        <p>{email}</p>
        <p>{name}</p>
        <button>Logout</button>
    </div>
}

export default NavbarUser;