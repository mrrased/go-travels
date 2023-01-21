import { LinearProgress } from '@mui/material';
import React, { Children } from 'react';
import useAuth from './useAuth';

const AdminRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const loaction = useLocation();

    if(isLoading || isAdminLoading){
        return <LinearProgress />
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default AdminRoute;