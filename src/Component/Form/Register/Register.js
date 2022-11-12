import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../Images/register.png';
import useAuth from '../../../Hooks/useAuth';
// import { useSnackbar } from 'notistack';

const Register = () => {

    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [matchSuccess , setMatchSuccess] = useState();
    const [isTrue, setIsTrue] = useState(false);
    const [isFalse, setIsFalse] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isCon, setIsCon] = useState(false);
    const [isName, setIsName] = useState(false);

    const navigate = useNavigate();

    const { googleSignUp } = useAuth();
    
    // const { enqueueSnackbar } = useSnackbar();
    
    // const handleClickVariant = (variant) => {
        //     // variant could be success, error, warning, info, or default
        //     enqueueSnackbar('This is a success message!', { variant });
        //   };

        useEffect(()=>{
    
            if(name?.length >= 1){
    
                setIsName(true);
            }
            else if(name?.length === 0){

                setIsName(false);
            }
    
        },[name])

    useEffect(()=>{

        if(password?.length >= 8){

            setIsPassword(true);
            setMatchSuccess(password);
            // console.log(password.length);
            // console.log(isPassword);
        }
        else if(password?.length >= 1 && password?.length <= 8){

            setIsPassword(false);
            // console.log(isPassword);

        }

    },[ password, isPassword ]);

    useEffect(()=>{

        if(password.match(confirmPassword) && confirmPassword?.length === 8){
            
            setIsCon(true);
            // console.log(isCon);
            // if(password.length >= 6){

            //     setIsPassword(true);
                setMatchSuccess(password);
            //     console.log(password.length);
            // }
            // setIsPassword(false);
            // console.log('matching')
        }
        else if(password?.length >= 1 && password.length <= 8){
            setIsCon(false);
            console.log(isCon);
        }

        

    },[ confirmPassword, password, isCon ]);



    useEffect(()=>{
        if(email.toLowerCase().match(/^[^@]+@[^@]{2,}\.[^@]{2,}$/)){

            setIsTrue(true);
            // console.log('green');
            // console.log(isTrue)

        }
        else if( email?.length >= 1 ){
            // console.log(email.length);
            setIsFalse(true);
            setIsTrue(false);
        }
        
        else{
            setIsTrue(false);
            setIsFalse(false);
            
            // console.log(isTrue);
        }
    },[ email, isTrue]);


    const handleSubmit = (e) =>{

        e.preventDefault();

        if( email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){

            // console.log('is right');
            if(confirmPassword !== password){
    
                alert('Do Not password Match');
                return;
            }
            googleSignUp( email, matchSuccess, name);
        }

    };

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
                                    className={`w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1 transition duration-1000 focus:transition focus:duration-1000  ${ isName ? "focus:ring-green-600" : "focus:ring-red-600" }`} 
                                    required 
                                    onChange={e => setName(e.target.value)}
                                /><br /><br />

                                <input 
                                    type="email" 
                                    name="" 
                                    placeholder='Email' 
                                    className={`w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1 transition duration-1000 focus:transition focus:duration-1000  ${ isTrue ? "focus:ring-green-600" : "focus:ring-red-600"}`}
                                    required
                                    onChange={e => setEmail(e.target.value)} 
                                /><br />
                                <label className={`${ isTrue ? "text-green-600" : "text-red-600"} text-xs transition duration-1000  ${ isFalse ? "block" : "hidden"}`}>{`${ isTrue ? "Successful Enter Valid mail" : "Please Enter Valid mail" }`}</label><br />

                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder='Password'
                                    className={`w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1 transition duration-1000 focus:transition focus:duration-1000 ${ isPassword ? "focus:ring-green-600" : "focus:ring-red-600" } `} 
                                    required 
                                    onChange={e => setPassword(e.target.value)}
                                /><br /><br />

                                <input 
                                    type="password" 
                                    name="" 
                                    placeholder='Confirm-Password' 
                                    className={`w-60 sm:w-80 h-10 bg-gray-200 p-2 focus:outline-none focus:ring-1  transition duration-1000 focus:transition focus:duration-1000 ${isCon ? "focus:ring-green-600" : "focus:ring-red-600"}`} 
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