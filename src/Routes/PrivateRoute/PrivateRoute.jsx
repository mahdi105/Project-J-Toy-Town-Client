import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;