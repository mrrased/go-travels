import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import TopBar from '../../Shared/TopBar/TopBar';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutOffer from './AboutOffer/AboutOffer';

const About = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <AboutBanner />
            <AboutOffer />
        </div>
    );
};

export default About;