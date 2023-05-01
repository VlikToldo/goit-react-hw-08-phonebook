import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';

import { useAuth } from 'shared/hooks/useAuth';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import style from './navbar.module.css';

const Navbar = () => {
  const {isLogin} = useAuth();
  return (
    <>
      <header className={style.header}>
        {isLogin ? <NavbarUser /> : <NavbarAuth />}
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
