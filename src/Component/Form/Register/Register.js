import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../Images/register.png';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [matchSuccess , setMatchSuccess] = useState();

    const navigate = useNavigate();
    const { googleSignUp } = useAuth();

    useEffect(()=>{
        if(password === confirmPassword){
            setMatchSuccess(password);
        }
    },[confirmPassword, password])

    const handleSubmit = (e) =>{

        e.preventDefault();

        googleSignUp( email, matchSuccess, name);
        
    }
    
    // console.log(matchSuccess);
    return (
        <Container maxWidth='lg'>
                <div className='h-screen flex items-center justify-center'>
                    <div className='flex max-w-xlg bg-blue-50 p-5 drop-shadow-md'>
                        <div>
                            <img className='hidden sm:block mx-auto' src={img1} alt="" />
                        </div>
                        <div className='flex items-center'>
                            <form action='submit' onSubmit={handleSubmit} >
                                <h4 className='mb-2 font-medium text-lg'>Create Account</h4>
                                <input 
                                    type="name" 
                                    name="" 
                                    placeholder='Name' 
                                    className='w-60 sm:w-80 h-10 bg-gray-200 p-2' 
                                    required 
                                    onChange={e => setName(e.target.value)}
                                /><br /><br />

                                <input 
                                    type="email" 
                                    name="" 
                                    placeholder='Email' 
                                    className='w-60 sm:w-80 h-10 bg-gray-200 p-2'
                                    required
                                    onChange={e => setEmail(e.target.value)} 
                                /><br /><br />

                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder='Password'
                                    className='w-60 sm:w-80 h-10 bg-gray-200 p-2' 
                                    required 
                                    onChange={e => setPassword(e.target.value)}
                                /><br /><br />

                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder='Confirm-Password' 
                                    className='w-60 sm:w-80 h-10 bg-gray-200 p-2' 
                                    required 
                                    onChange={e => setConfirmPassword(e.target.value)}
                                /><br /><br />

                                <button 
                                type="submit" 
                                className='text-center bg-green-200 w-60 sm:w-80 h-10 tracking-widest'
                                >register</button>
                                <h4 
                                className='mt-[3px]'>Already have an account? <span 
                                onClick={() => navigate('/login')} className='hover:underline text-pink-blue cursor-pointer'>Sign in</span></h4>
                            </form>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Register;