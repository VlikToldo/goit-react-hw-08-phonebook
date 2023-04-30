import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { signup } from "redux/auth/auth-operations";

import RegisterForm from "components/RegisterForm/RegisterForm";
import { isUserLogin } from "redux/auth/auth-selectors";




const RegisterPage = () => {
    const isLogin = useSelector(isUserLogin);
    const dispatch = useDispatch();

    const handleSignup = (data) => {
        dispatch(signup(data))
    }

    if (isLogin) {
        return <Navigate to='/' />
    }
    
    return <>
    <div>
        <h1>Register page</h1>
        <RegisterForm onSubmit={handleSignup}/>
    </div>
    </>
}

export default RegisterPage;