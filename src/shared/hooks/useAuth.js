import { useSelector } from "react-redux";
import { getToken, getIsUserLogin, getUser } from "redux/auth/auth-selectors";

export const useAuth = () => {
    const token = useSelector(getToken);
    const user = useSelector(getUser);
    const isLogin = useSelector(getIsUserLogin);

    return {token,user,isLogin};
};