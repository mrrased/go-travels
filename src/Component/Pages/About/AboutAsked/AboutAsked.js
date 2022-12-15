import { Container } from '@mui/material';
import React from 'react';
import about_askedImg from '../../../../Images/about_asked.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCar, faTaxi, faCircleDot} from '@fortawesome/free-solid-svg-icons';

const AboutAsked = () => {

    return (
        <Container maxWidth="lg">
            <div className='grid grid-cols-12 gap-4 py-10'>
                <div className='col-span-5'>
                    <div>
                        <h3 className='text-sm uppercase text-smooth-yellow-150 font-semibold mb-1 tracking-widest'>Asked Question</h3>
                        <h1 className='text-4xl font-bold text-smooth-black mb-3'>Flight Asked Question</h1>
                        <p className='mb-7 font-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn imperdiet interdum imperdiet ipsum.</p>
                    </div>
                    <div className='bg-green-100'>

                        <div className='relative w-full overflow-hidden '>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-smooth-gray-15 h-12 w-full pl-5 flex items-center peer-checked:bg-red-800 transition-all duration-500'>
                                <FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-200' />
                                <h1 className='text-lg font-semibold text-pink-blue'>What is Tailwindcss</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            </div>

                            <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 peer-checked:bg-red-800'>
                                <div className='p-4'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full overflow-hidden'>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-blue-500 h-12 w-full pl-5 flex items-center peer-checked:bg-red-800 transition-all duration-500'>
                                <h1 className='text-lg font-semibold text-white'>What is Tailwindcss Short</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 peer-checked:bg-red-800'>
                                <div className='p-4'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full overflow-hidden'>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-blue-500 h-12 w-full pl-5 flex items-center peer-checked:bg-red-800 transition-all duration-500'>
                                <h1 className='text-lg font-semibold text-white'>What is Tailwindcss Short</h1>
                            </div>

                            <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 peer-checked:bg-red-800'>
                                <div className='p-4'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-7 w-full h-screen border-box'> 
                    <div className='relative'>
                        <img src={about_askedImg} alt="" className='absolute z-10' />
                        <div className="content:[''] absolute bg-smooth-yellow w-[570px] h-[570px] top-3 left-6 z-0">02</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutAsked;