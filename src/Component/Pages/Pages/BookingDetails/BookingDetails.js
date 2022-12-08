import React from 'react';
import NavBar from '../../../Shared/NavBar/NavBar';
import TopBar from '../../../Shared/TopBar/TopBar';
import BookingDetailsBanner from './BookingDetailsBanner/BookingDetailsBanner';
import CustomerStep from './CustomerDetails/CustomerStep';
import PassengerInfo from './PassengerInfo/PassengerInfo';

const BookingDetails = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <BookingDetailsBanner />
            <CustomerStep />
            <PassengerInfo />
        </div>
    );
};

export default BookingDetails;