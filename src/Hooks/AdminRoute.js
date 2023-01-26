import { LinearProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const AdminRoute = ({children}) => {
    const { user, isLoading , isRole, isRoleLoading } = useAuth();
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if( isLoading || isRoleLoading ){
        
        return <LinearProgress />
    }
    if( !isRole && user.email ){
        
        return <Navigate to="/" state={{ from: location }} replace />
    }
    
    return children;
    
};

export default AdminRoute;