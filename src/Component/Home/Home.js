import React from 'react';
import TopBookingArea from '../BookingItem/ItemOne/TopBookingArea';
import Booking from '../Shared/Booking/Booking';
import FeaturesArea from './FeaturesArea/FeaturesArea';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <TopBookingArea />
            <Booking />
            <FeaturesArea />
        </div>
    );
};

export default Home;