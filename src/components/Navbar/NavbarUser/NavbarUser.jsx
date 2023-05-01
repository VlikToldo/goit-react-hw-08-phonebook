import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';
import { getUser } from 'redux/auth/auth-selectors';

const NavbarUser = () => {
  const { name, email } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{email}</p>
      <p>{name}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
