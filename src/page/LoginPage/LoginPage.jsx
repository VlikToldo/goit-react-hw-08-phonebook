import { useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';

import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
      <div>
        <LoginForm onSubmit={handleLogin} />
      </div>
  );
};

export default LoginPage;
