import React, { useState } from 'react';
import { Container } from '@mui/material';
import { toast, Toaster } from 'react-hot-toast';
import { CirclesWithBar } from 'react-loader-spinner';
import useAuth from '../../../../Hooks/useAuth';

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [number, setNumber] = useState('');
    const [messages, setMessages] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const { user, userMessage, isLoading } = useAuth();

    const handleSubmit = e =>{
        e.preventDefault();

        // const message  = { name, email, subject, number, messages }

        // console.log(message);

        if(!user.email){
            toast.error('Plaese first login then message')
            return;
        }
        else{
            userMessage(name, email, subject, number, messages);
            setButtonDisabled(true);
            
        }
    }

    return (
        <Container maxWidth='lg' className='pt-10 md:pt-20 pb-10 md:pb-20'>
            <Toaster />
                <div>
                    <div>
                        <h5 className='uppercase text-smooth-yellow text-sm font-semibold mb-[5px] tracking-wider text-center'>Contact us Now</h5>
                        <h2 className='capitalize text-pink-black-100 text-4xl font-bold tracking-wider text-center'>Write a Message</h2>
                    </div>
                    <form className='md:px-[80px]  py-10' onSubmit={handleSubmit} >
                        <div className='flex w-full space-x-4'>

                            <input 
                            type="name"  
                            placeholder='Your Name' 
                            required
                            onChange={(e)=>setName( e.target.value)} 
                            className='
                                w-2/4 
                                p-4 
                                border 
                                border-smooth-gray-50 
                                transition 
                                ease-in-out 
                                delay-250 
                                duration-500 
                                focus:outline-none 
                                focus:border 
                                focus:border-smooth-yellow-100'
                            />

                            <input 
                            type="email"  
                            placeholder='Your Email' 
                            required
                            onChange={(e)=>setEmail( e.target.value)} 
                            className='
                                w-2/4 
                                p-4 
                                border 
                                border-smooth-gray-50 
                                transition ease-in-out 
                                delay-250 duration-500 
                                focus:outline-none 
                                focus:border 
                                focus:border-smooth-yellow-100' 
                            />

                        </div>

                        <div 
                            className='
                            flex w-full 
                            space-x-4 mt-3'
                        >
                            <input 
                            type="text"  
                            placeholder='Subject' 
                            required
                            onChange={(e)=>setSubject( e.target.value)} 
                            className='
                                w-2/4 
                                p-4 border 
                                border-smooth-gray-50 
                                transition 
                                ease-in-out 
                                delay-250 
                                duration-500 
                                focus:outline-none 
                                focus:border 
                                focus:border-smooth-yellow-100' 
                            />

                            <input 
                            type="number"  
                            placeholder='Your number' 
                            required
                            onChange={(e)=>setNumber( e.target.value)} 
                            className='
                                w-2/4 
                                p-4 
                                border 
                                border-smooth-gray-50 
                                transition 
                                ease-in-out 
                                delay-250 
                                duration-500 
                                focus:outline-none 
                                focus:border 
                                focus:border-smooth-yellow-100' 
                            />

                        </div>

                        <div 
                            className='
                            mt-3'
                        >
                            
                            <textarea 
                            rows="6" 
                            placeholder='Message' 
                            required
                            onChange={(e)=>setMessages( e.target.value)} 
                            className='
                                p-4 
                                w-full 
                                border 
                                border-smooth-gray-50 
                                transition 
                                ease-in-out 
                                delay-250 
                                duration-500 
                                focus:outline-none 
                                focus:border 
                                focus:border-smooth-yellow-100'
                            />

                        </div>
                        {/* <button type="submit" className='px-6 py-3 text-white bg-smooth-yellow-150 hover:bg-white hover:text-pink-blue-50 hover:border hover:border-pink-blue-50 font-semibold uppercase tracking-wider transition-all '>Submit</button> */}
                        <div 
                            className='
                                flex 
                                justify-center 
                                md:justify-start'
                        >
                        <button type='submit' class="group relative h-12 w-48 overflow-hidden border border-smooth-yellow rounded-lg bg-white text-lg font-semibold shadow" disabled={buttonDisabled} >
                            <div class="absolute inset-0 w-0 bg-smooth-yellow-100 transition-all duration-500 ease-out group-hover:w-full"></div>
                            <span class="relative text-black group-hover:text-white uppercase"><div className='flex items-center justify-center'>{ isLoading ? <CirclesWithBar className="text-center" height="40" width="40" color="#ffa903" wrapperStyle={{}} wrapperClass="" visible={true} outerCircleColor="" innerCircleColor="" barColor=""ariaLabel='circles-with-bar-loading' /> : "Submit Now"}</div></span>
                        </button>
                    </div>
                    </form>
                </div>
        </Container>
    );
};

export default ContactForm;