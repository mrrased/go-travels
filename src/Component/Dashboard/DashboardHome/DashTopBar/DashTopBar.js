import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../../Hooks/useFirebase';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';


const DashTopBar = () => {

    const { userMail } = useAuth();
    const navigate = useNavigate();
    

    return (
        <div className='p-8 hidden sm:block'>
            <Toaster />
             <div className='flex justify-between'>
                <div>
                    <h3 className='text-white'>Go-Travels</h3>
                </div>
                <div className='flex space-x-4'>
                    <Badge badgeContent={userMail?.length} color="success" onClick={()=>{  navigate('/dashboard/users-message') }} className="hover:cursor-pointer">
                        <MailIcon sx={{color: '#fff'}} />
                    </Badge>
                    <h3 className='text-white'>wellcome to dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default DashTopBar;