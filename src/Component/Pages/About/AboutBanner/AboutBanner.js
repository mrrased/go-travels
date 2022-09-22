import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutBanner.css';

const AboutBanner = () => {
    return (
        <div>
            <div className='about-bg'>
                <div className='w-full h-72 flex items-center justify-center'>
                    <div>
                    <h1 className='text-5xl font-bold text-white mb-2'>About Us</h1>
                    <div className="flex justify-center divide-x mt-0">
                        <NavLink to={'/'} className="px-4 text-white text-sm sm:text-lg font-semibold hover:text-smooth-yellow-150">Home</NavLink>
                        <h3 className="px-4  text-sm sm:text-lg font-semibold text-smooth-yellow hover:text-smooth-yellow">Contact</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;