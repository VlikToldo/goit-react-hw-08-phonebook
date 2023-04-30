import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <div>
        <RegisterForm onSubmit={handleSignup} />
      </div>
    </>
  );
};

export default RegisterPage;
