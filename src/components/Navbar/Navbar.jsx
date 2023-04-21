import { Suspense } from 'react';
import {Outlet} from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';

import style from './navbar.module.css'

const Navbar = () => {
  return (
    <>
      <header className={style.header}>
        <NavbarAuth/>
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