import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const notify = (string) => toast(string);
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();
    if(loading){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
    notify("You have to log in first to view details")
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;