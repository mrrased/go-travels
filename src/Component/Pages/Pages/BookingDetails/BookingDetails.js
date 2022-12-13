import React from 'react';
import BottomFooter from '../../../Shared/BottomFooter/BottomFooter';
import NavBar from '../../../Shared/NavBar/NavBar';
import TopBar from '../../../Shared/TopBar/TopBar';
import TopFooter from '../../../Shared/TopFooter/TopFooter';
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
            <TopFooter />
            <BottomFooter />
      </div>
    );
};

export default BookingDetails;