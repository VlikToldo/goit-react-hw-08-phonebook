import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';

import style from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  console.log(isLogin);

  return (
    <>
      <header className={style.header}>
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </header>
      <main className={style.main}>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Navbar;
