import React from 'react';
import './Banner.css';
import DashTopBar from './DashTopBar/DashTopBar'
import SecondBar from './SecondBar/SecondBar';

const Banner = () => {
    return (
        <div className='bg-img'>
            <DashTopBar />
            <SecondBar />
        </div>
    );
};

export default Banner;