import React from 'react';
import TopBookingArea from '../BookingItem/ItemOne/TopBookingArea';
import Booking from '../Shared/Booking/Booking';
import NavBar from '../Shared/NavBar/NavBar';
import TopBar from '../Shared/TopBar/TopBar';
import FeaturesArea from './FeaturesArea/FeaturesArea';
import FlightDestination from './FlightDestination/FlightDestination';
import FlightDestinationArea from './FlightDestinationArea/FlightDestinationArea';
import FlightOffer from './FlightOffer/FlightOffer';
import Ice from './Ice';
import NewsArea from './NewsArea/NewsArea';
import ServiceArea from './ServiceArea/ServiceArea';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <TopBanner />
            <TopBookingArea />
            <Booking />
            <FeaturesArea />
            <FlightOffer />
            <FlightDestinationArea />
            <FlightDestination />
            <ServiceArea />
            <NewsArea />
        </div>
    );
};

export default Home;