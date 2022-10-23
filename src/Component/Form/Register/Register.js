import { Container } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../Images/register.png';

const Register = () => {

    const navigate = useNavigate();
    return (
        <Container maxWidth='lg'>
                <div className='h-screen flex items-center justify-center'>
                    <div className='flex max-w-xlg bg-blue-50 p-5 drop-shadow-md'>
                        <div>
                            <img className='hidden sm:block mx-auto' src={img1} alt="" />
                        </div>
                        <div className='flex items-center'>
                            <form>
                                <h4 className='mb-2 font-medium text-lg'>Create Account</h4>
                                <input type="name" name="" placeholder='Name' className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required  /><br /><br />
                                <input type="email" name="" placeholder='Email' className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required /><br /><br />
                                <input type="password" name="" placeholder='Password'className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required /><br /><br />
                                <input type="password" name="" placeholder='Confirm-Password' className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required /><br /><br />
                                <button type="submit" className='text-center bg-green-200 w-60 sm:w-80 h-10 tracking-widest'>register</button>
                                <h4 className='mt-[3px]'>Already have an account? <span onClick={() => navigate('/login')} className='hover:underline text-pink-blue cursor-pointer'>Sign in</span></h4>
                            </form>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Register;