import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../../Hooks/useFirebase';


const DashTopBar = () => {

    const { userMail } = useAuth();

    // const UsersMessage = (e) =>{
    //     e.preventDefault();

    //     const token = localStorage.getItem('t_id').split('"')[1];
        
    //     fetch('http://localhost:5000/user/conatact',{

    //         method: 'GET',
    //         headers:{
    //             'authorization': `bearer ${token}`,
    //             'content-type' : 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         // toast.success('New Join Successfully');
    //     })
    // }

    // console.log(userMail?.length)

    return (
        <div className='p-8 hidden sm:block'>
             <div className='flex justify-between'>
                <div>
                    <h3 className='text-white'>Go-Travels</h3>
                </div>
                <div className='flex space-x-4'>
                    <Badge badgeContent={userMail?.length} color="success">
                        <MailIcon sx={{color: '#fff'}} />
                    </Badge>
                    <h3 className='text-white'>wellcome to dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default DashTopBar;