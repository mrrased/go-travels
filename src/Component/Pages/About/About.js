import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import TopBar from '../../Shared/TopBar/TopBar';
import AboutBanner from './AboutBanner/AboutBanner';
import AboutOffer from './AboutOffer/AboutOffer';
import FlightDestinationArea from '../../Home/FlightDestinationArea/FlightDestinationArea';
import ServiceArea from '../../Home/ServiceArea/ServiceArea';
import AboutAsked from './AboutAsked/AboutAsked';
import TopFooter from '../../Shared/TopFooter/TopFooter';
import BottomFooter from '../../Shared/BottomFooter/BottomFooter';

const About = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <AboutBanner />
            <AboutOffer />
            <FlightDestinationArea />
            <ServiceArea  />
            <AboutAsked />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default About;