import TextField from 'shared/TextField/TextField';
import Button from 'shared/components/Button/Button';

import useForm from 'shared/hooks/useForm';

import fields from './fields';
import initialState from './initialState';

import style from './register-form.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { name, email, password } = state;

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <h3>Register</h3>
        <TextField value={name} handleChange={handleChange} {...fields.name} />
        <TextField value={email} handleChange={handleChange} {...fields.email} />
        <TextField value={password} handleChange={handleChange} {...fields.password} />
        <Button>Register</Button>
      </form>
    </>
  );
};

export default RegisterForm;
