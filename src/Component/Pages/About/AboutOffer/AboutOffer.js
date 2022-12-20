import { Container } from '@mui/material';
import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import about_img1 from '../../../../Images/about_1.jpg';
import about_img2 from '../../../../Images/about_2.jpg';

const AboutOffer = () => {
    return (
        <Container  maxWidth='lg' className='py-44 px-0'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className='col-span-5'>
                    <div>
                        <h2 className='text-sm uppercase text-smooth-yellow-150 font-semibold mb-1 tracking-widest'>who we are</h2>
                        <h3 className='text-4xl font-bold text-smooth-black mb-3'>Magical Singapore now even more amazing!</h3>
                        <h4 className='mb-7 font-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn interdum imperdiet ipsum. denounce with rieous indiation and dislike men who beguiled demor.</h4>
                    </div>
                    <div className='mb-10'>
                        <div className='flex items-center text-pink-blue-50 mb-[10px]'>
                            <CheckCircleRoundedIcon fontSize='small' className='mr-2' />
                            <p>Pre-Book Your Baggage Donating</p>
                        </div>
                        <div className='flex items-center text-pink-blue-50 mb-[10px]'>
                            <CheckCircleRoundedIcon fontSize='small' className='mr-2'/>
                            <p>Accusamus Iusto Odio Dignissimos Ducimus</p>
                        </div>
                        <div className='flex items-center text-pink-blue-50'>
                            <CheckCircleRoundedIcon fontSize='small' className='mr-2'/>
                            <p>Dislike Men Who are so Beguiled</p>
                        </div>
                    </div>
                    <div>
                        <button class="group relative h-12 w-48 overflow-hidden border border-smooth-yellow rounded-lg bg-white text-lg font-semibold shadow">
                            <div class="absolute inset-0 w-0 bg-smooth-yellow-100 transition-all duration-500 ease-out group-hover:w-full"></div>
                            <span class="relative text-black group-hover:text-white">Contact Us</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-7'>
                    <div className='relative'>
                        <img src={about_img1} alt="" className='absolute' />
                        <div className="content:[''] absolute w-[444px] h-[459px] border-[10px] border-smooth-yellow -top-10 right-12"></div>
                        <img src={about_img2} alt=""  className='absolute -top-20 right-0' />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutOffer;