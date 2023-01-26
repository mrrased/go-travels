import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';


const PrivateRoute = ({ children }) => {

    const { user, isLoading, isRoleLoading , isRole, setCall} = useAuth();
    const token = localStorage.getItem('t_id').split('"')[1];
    const location = useLocation();

    setCall(true);

    if( isLoading || isRoleLoading){
            console.log( 'call from private route', isLoading );
            return <LinearProgress />
    }
    
    if( user?.email && isRole ){
        console.log( 'is role', user);
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace />
};

export default PrivateRoute;