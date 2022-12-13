import React from 'react';
import Booking from '../../../Shared/Booking/Booking';
import BottomFooter from '../../../Shared/BottomFooter/BottomFooter';
import NavBar from '../../../Shared/NavBar/NavBar';
import TopBar from '../../../Shared/TopBar/TopBar'
import TopFooter from '../../../Shared/TopFooter/TopFooter';
import BookingFlight from './BookingFlight/BookingFlight';
import BookingListBanner from './BookingListBanner';

const BookingList = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <BookingListBanner />
            <Booking />
            <BookingFlight />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default BookingList;