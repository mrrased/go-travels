import { Container } from '@mui/material';
import React from 'react';
import './TopFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const TopFooter = () => {
    return (
        <div className='top-footer'>
            <Container maxWidth='lg' className='py-20'>
                <div className='grid grid-cols-4 gap-6'>
                    <div>
                        <div className='flex items-center mb-[30px]'>
                            <FontAwesomeIcon icon={faPlane} size="2xl" className='mr-4 text-pink-black bg-smooth-yellow-150 p-2 rounded-full' />
                            <h1 className='text-4xl text-smooth-gray-20 font-bold'>Go-Travel</h1>
                        </div>
                        <div className='text-smooth-gray-20 text-[22px] font-semibold mb-[25px] border-b border-smooth-gray-100 pb-[25px]'>
                            <h1 >Online to make your journey even more memorable access or meet</h1>
                        </div>
                        <div className=' space-x-4'>
                            
                            <FacebookIcon fontSize="large" className='text-smooth-gray-10 bg-black rounded-full p-2 hover:text-smooth-yellow-150 cursor-pointer transition-all' />
                            <TwitterIcon fontSize="large" className='text-smooth-gray-10 bg-black rounded-full p-2 hover:text-smooth-yellow-150 cursor-pointer transition-all' />
                            <InstagramIcon fontSize="large" className='text-smooth-gray-10 bg-black rounded-full p-2 hover:text-smooth-yellow-150 cursor-pointer transition-all' />
                            <LinkedInIcon fontSize="large" className='text-smooth-gray-10 bg-black rounded-full p-2 hover:text-smooth-yellow-150 cursor-pointer transition-all' />
                        </div>
                    </div>
                    <div>
                        <div className='mb-[30px]'>
                            <h3 className='text-[22px] text-smooth-gray-20 font-semibold'>Explore</h3>
                        </div>
                        <div className='text-smooth-gray-200 text-base cursor-pointer space-y-[10px] font-medium tracking-wide'>
                            <p>About</p>
                            <p>Awards</p>
                            <p>Careers</p>
                            <p>Press release</p>
                            <p>Sponsorship</p>
                        </div>
                    </div>
                    <div>
                    <div className='mb-[30px]'>
                            <h3 className='text-[22px] text-smooth-gray-20 font-semibold'>Privacy</h3>
                        </div>
                        <div className='text-smooth-gray-200 text-base cursor-pointer space-y-[10px] font-medium tracking-wide'>
                            <p>Airline fees</p>
                            <p>Airline guides</p>
                            <p>Airport guides</p>
                            <p>Low fare tips</p>
                            <p>Flights</p>
                        </div>
                    </div>
                    <div>
                        <div className='mb-[30px]'>
                            <h3 className='text-[22px] text-smooth-gray-20 font-semibold'>Contacts</h3>
                        </div>
                        <div>
                            <p className='text-smooth-gray-200 text-base mb-[10px]'>PO Box W75 Street lan West new queens</p>
                            <p className='text-smooth-yellow-150 text-[26px] font-semibold mb-2'>+880 1732 920 - 164</p>
                            <p className='text-smooth-yellow-100 text-base mb-[25px]'>gotravel@company.com</p>
                        </div>
                        <form className='flex'>
                            <input type="email" placeholder='Enter Your Email' className='p-3' />
                            <button type='submit' className='px-4 py-3 bg-smooth-yellow-150' ><FontAwesomeIcon icon={faPaperPlane} size="lg" className='text-white' /></button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopFooter;