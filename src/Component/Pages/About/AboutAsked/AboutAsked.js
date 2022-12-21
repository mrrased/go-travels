import { Container } from '@mui/material';
import React from 'react';
import about_askedImg from '../../../../Images/about_asked.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCar, faTaxi, faCircleDot} from '@fortawesome/free-solid-svg-icons';

const AboutAsked = () => {

    return (
        <Container maxWidth="lg">
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4 py-10'>
                <div className='col-span-6'>
                    <div>
                        <h3 className='text-sm uppercase text-smooth-yellow-150 font-semibold mb-1 tracking-widest'>Asked Question</h3>
                        <h1 className='text-xl md:text-4xl font-bold text-smooth-black mb-3'>Flight Asked Question</h1>
                        <p className='mb-7 font-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn imperdiet interdum imperdiet ipsum.</p>
                    </div>

                    <div className='flex justify-center mb-4'>
                        <div className='w-full overflow-hidden h-[340px] block  border-box md:hidden text-center'>
                            <div className='relative'>
                                <img src={about_askedImg} alt="" className='absolute z-10' />
                                {/* <div className="content:[''] absolute bg-smooth-yellow md:w-[465px] md:h-[470px]  sm:w-[560px]  sm:h-[360px] top-3 left-6 z-0">02</div> */}
                            </div>
                        </div>
                    </div>
                    <div>


                        <div className='relative w-full overflow-hidden '>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-[68px] z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-smooth-gray-15 h-[68px] w-full pl-2 pr-8 md:pl-5 flex items-center text-pink-blue-50 peer-checked:bg-pink-blue-50 peer-checked:text-white transition-all duration-500'>
                                <FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-200' />
                                <h1 className='text-base md:text-[22px] font-semibold'>Pre-Book Your Baggage Donating a Small </h1>
                            </div>

                            <div className='absolute top-5 right-3 text-pink-blue-50 peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='bg-white peer-checked:text-smooth-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-64 peer-checked:bg-pink-blue-50'>
                                <div className='p-4 pl-8 font-semibold text-base'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>

                        <div className='relative w-full overflow-hidden mt-3'>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-[68px] z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-smooth-gray-15 h-[68px]  w-full pl-2 pr-8 md:pl-5 flex items-center text-pink-blue-50 peer-checked:bg-pink-blue-50 peer-checked:text-white transition-all duration-500'>
                                <FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-200' />
                                <h1 className='text-base md:text-[22px] font-semibold'>Search and Save on Cheap Car Rentals </h1>
                            </div>

                            <div className='absolute top-5 right-3 overflow-hidden text-pink-blue-50 peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='bg-white peer-checked:text-smooth-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-64 peer-checked:bg-pink-blue-50'>
                                <div className='p-4 pl-8 font-semibold text-base'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>

                        <div className='relative w-full overflow-hidden mt-3'>

                            <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-[68px] z-10 cursor-pointer opacity-0 peer' />

                            <div className='bg-smooth-gray-15 h-[68px] w-full pl-2 pr-8 md:pl-5 flex items-center text-pink-blue-50 peer-checked:bg-pink-blue-50 peer-checked:text-white transition-all duration-500'>
                                <FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-200' />
                                <h1 className='text-base md:text-[22px] font-semibold'>Leave it to us when it comes to finding you </h1>
                            </div>

                            <div className='absolute top-5 right-3 text-pink-blue-50 peer-checked:text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                            <div className='bg-white peer-checked:text-smooth-gray-200 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-64  peer-checked:bg-pink-blue-50'>
                                <div className='p-4 pl-8 font-semibold text-base'>
                                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='col-span-6 w-full h-screen border-box hidden md:block'> 
                    <div className='relative'>
                        <img src={about_askedImg} alt="" className='absolute z-10' />
                        <div className="content:[''] absolute bg-smooth-yellow md:w-[465px] md:h-[470px] xl:w-[560px]  xl:h-[560px] top-3 left-6 z-0">02</div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutAsked;