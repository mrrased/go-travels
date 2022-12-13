import { Container } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
        <Container maxWidth='lg' className='pt-10 md:pt-20 pb-10 md:pb-20'>
                <div>
                    <div>
                        <h5 className='uppercase text-smooth-yellow text-sm font-semibold mb-[5px] tracking-wider text-center'>Contact us Now</h5>
                        <h2 className='capitalize text-pink-black-100 text-4xl font-bold tracking-wider text-center'>Write a Message</h2>
                    </div>
                    <form className='md:px-[80px]  py-10'>
                        <div className='flex w-full space-x-4'>
                            <input type="name"  placeholder='Your Name' required className='w-2/4 p-4 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                            <input type="email"  placeholder='Your Email' required className='w-2/4 p-4 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                        </div>
                        <div className='flex w-full space-x-4 mt-3'>
                            <input type="text"  placeholder='Subject' required className='w-2/4 p-4 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                            <input type="number"  placeholder='Your number' required className='w-2/4 p-4 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                        </div>
                        <div className='mt-3'>
                            <textarea rows="6" placeholder='Message' required className='p-4 w-full border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                        </div>
                        <button type="submit" className='px-6 py-3 text-white bg-smooth-yellow-150 hover:bg-white hover:text-pink-blue-50 hover:border hover:border-pink-blue-50 font-semibold uppercase tracking-wider transition-all '>Submit</button>
                    </form>
                </div>
        </Container>
    );
};

export default ContactForm;