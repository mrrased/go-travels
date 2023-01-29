import { LinearProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';


const PrivateRoute = ({ children }) => {

    const { user, isLoading, isRoleLoading , isRole, setCall} = useAuth();
    const token = localStorage.getItem('t_id').split('"')[1];
    const location = useLocation();

    
    if( isLoading || isRoleLoading){
            
            return <LinearProgress />
    }
    
    if( user?.email && isRole ){
        
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />
};

export default PrivateRoute;