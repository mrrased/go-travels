import React from 'react';
import { Container } from '@mui/material';
import img1 from '../../../Images/login.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
                                <h4 className='mb-2 font-medium text-lg'>Login Account</h4>
                                <input type="email" name="" placeholder='Email' className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required /><br /><br />
                                <input type="password" name="" placeholder='Password'className='w-60 sm:w-80 h-10 bg-gray-200 p-2' required /><br /><br />
                                <button type="submit" className='text-center bg-green-200 w-60 sm:w-80 h-10 tracking-widest'>Login</button>
                                <h4 className='mt-[3px]'>New Account Create ? <span onClick={() => navigate('/register')} className='hover:underline text-pink-blue cursor-pointer'>Register</span></h4>
                            </form>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Login;