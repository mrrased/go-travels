import { LinearProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const AdminRoute = ({children}) => {
    const { user, isLoading , isRole, isRoleLoading } = useAuth();
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(isLoading || isRoleLoading){
        return <LinearProgress />
    }
    if(user && isRole){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;