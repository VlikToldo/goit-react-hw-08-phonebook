import { useDispatch } from 'react-redux';

import TextField from 'shared/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from 'shared/hooks/useForm';
import { login } from 'redux/auth/auth-operations';

import initialState from './initialState';
import fields from './fields';
import style from './login-form.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleAuth = data => {
    dispatch(login(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    handleAuth,
    initialState,
  });
 
  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h3>Login</h3>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
