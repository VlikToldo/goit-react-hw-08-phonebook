import TextField from 'shared/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from 'shared/hooks/useForm';

import initialState from './initialState';
import fields from './fields';
import style from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
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
