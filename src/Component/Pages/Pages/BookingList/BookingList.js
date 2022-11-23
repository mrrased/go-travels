import React from 'react';
import Booking from '../../../Shared/Booking/Booking';
import NavBar from '../../../Shared/NavBar/NavBar';
import TopBar from '../../../Shared/TopBar/TopBar'
import BookingListBanner from './BookingListBanner';

const BookingList = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <BookingListBanner />
            <Booking />
        </div>
    );
};

export default BookingList;