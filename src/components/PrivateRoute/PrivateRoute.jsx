import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "shared/hooks/useAuth";

const PrivateRoute = () => {
    const {isLogin, token} = useAuth();

    if(!isLogin && token){
        return <p>...Loading</p>
    }

    if(!isLogin && !token){
        return <Navigate to='/login'/>
    }

    return <Outlet/>
}

export default PrivateRoute;