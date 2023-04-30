import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import LoginForm from "components/LoginForm/LoginForm";

import {login} from "redux/auth/auth-operations";
import { isUserLogin } from "redux/auth/auth-selectors";

const LoginPage = () => {
    const isLogin = useSelector(isUserLogin)
    const dispatch = useDispatch();

    if (isLogin) {
        return <Navigate to='/' />
    }

    const handleLogin = (data) => {
        dispatch(login(data))
    }

    return <div>
        <h1>LoginPage</h1>
        <div>
            <LoginForm onSubmit={handleLogin}/>
        </div>
    </div>
}

export default LoginPage;