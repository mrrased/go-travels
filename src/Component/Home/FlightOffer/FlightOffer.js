import React from 'react';
import { Box, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img1 from '../../../Images/offer-1.jpg';
import img2 from '../../../Images/offer-2.jpg';
import img3 from '../../../Images/offer-3.jpg';
import img4 from '../../../Images/offer-6.jpg';
import img5 from '../../../Images/3.jpg';
import FlightOfferShowCard from './FlightOfferShowCard';
import BigOffer from './BigOffer';



const showItem = [
    { 
        id: 1,
        img: img1, 
        title: 'New York to California',
        date: '09 Jun 2022 - 16 Jun 2022',
        passengertype: 'Economy from',
        price: '310'
    },
    { 
        id: 2,
        img: img2, 
        title: 'Malaga to Finland',
        date: '09 Jun 2022 - 16 Jun 2022',
        passengertype: 'Economy from',
        price: '710'
    },
    { 
        id: 3,
        img: img3, 
        title: 'Dubai to Maldives',
        date: '09 Jun 2022 - 16 Jun 2022',
        passengertype: 'Economy from',
        price: '1200'
    },
    { 
        id: 4,
        img: img5, 
        title: 'Dubai to New York',
        date: '09 Jun 2022 - 16 Jun 2022',
        passengertype: 'Economy from',
        price: '370'
    },
]

const bigItems = [
    {
        id: 1,
        img: img4,
        title: 'Dhaka to Dubai',
        date: '09 Jun 2022 - 16 Jun 2022',
        passengertype: 'Economy from',
        price: 480
    }
]

const FlightOffer = () => {
    return (
        <Container maxWidth="lg" >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-9'>
                <div className='text-center md:text-left'>
                    <h5 className='text-sm text-pink-yellow uppercase tracking-widest block font-semibold antialiased font-sans'>OFFER DEALS</h5>
                    <h3 className='text-4xl	text-smooth-black font-bold'>Flight Offer Deals</h3>
                </div>
                <div className='text-center md:flex md:items-center md:justify-end text-pink-blue'>
                        <a className='text-base font-bold' href="#">Best Price Guarantee</a>
                        <span className='flex justify-center mt-2 md:flex md:items-center md:mt-0'><CheckCircleIcon fontSize="small" className='ring-offset-2 ring-2 rounded-full ml-2 ring-pink-blue' /></span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                <div>
                    {
                        bigItems.map(offerItems => <BigOffer key={offerItems.id} offerItems={offerItems} />)
                    }
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                    {
                        showItem.map(offerItem => <FlightOfferShowCard key={offerItem.id} offerItem={offerItem} />)
                    }
                </div>
            </div>
        </Container>
    );
};

export default FlightOffer;