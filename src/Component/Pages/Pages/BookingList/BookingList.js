import React from 'react';
import Booking from '../../../Shared/Booking/Booking';
import NavBar from '../../../Shared/NavBar/NavBar';
import TopBar from '../../../Shared/TopBar/TopBar'
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
        </div>
    );
};

export default BookingList;