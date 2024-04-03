import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    const loc = useLocation()


    if(user){
        return children;
    }

    return <Navigate to='/login' state={loc.pathname}/>
};

export default PrivateRoute;