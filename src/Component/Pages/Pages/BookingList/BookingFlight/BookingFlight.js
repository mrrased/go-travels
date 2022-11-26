import React from 'react';
import { Container } from '@mui/system';
import ShowBookingFlight from './ShowBookingFlight';


const flightList = [
    {
        id: 1,
        planeName: 'Etihad Airway',
        date: `Thursday`,
        month: 'Jun 16',
        time: `12 : 55 AM`,
        area: 'DAC',
        hour: `22h`,
        stops: '2 Stops',
        Operate: 'Operated by Emirates',
        price: '1,056.40',
        airport: 'IST - Istanbul Airport, Turkish',
        nextDay: 'Friday',
        nextDate: 'Jun 17',
        nextTime: '03:20',
        tpm: 'Tpm Line',
        passengerClass: 'Economy',
        flightNumber: 'Flight EK585',
        airPlaneNumber: ' Aircraft BOEING 777-300ER',
        weight: 'Adult(s): 25KG luggage free',
        nextFlightAirPortName: 'DXB - Dubai, United Arab Emirates'
        
    },
    {
        id: 2,
        planeName: 'Etihad Airway',
        date: `Thursday`,
        month: 'Jun 16',
        time: `01 : 00 PM`,
        area: 'DAC',
        hour: `22h`,
        stops: '2 Stops',
        Operate: 'Operated by Emirates',
        price: '1,056.40',
        airport: 'IST - Istanbul Airport, Turkish',
        nextDay: 'Friday',
        nextDate: 'Jun 17',
        nextTime: '03:20',
        tpm: 'Tpm Line',
        class: 'Economy',
        flightNumber: 'Flight EK585',
        airPlaneNumber: ' Aircraft BOEING 777-300ER',
        weight: 'Adult(s): 25KG luggage free',
        nextFlightAirPortName: 'DXB - Dubai, United Arab Emirates'
    },
]

const BookingFlight = () => {

    return (
        <Container maxWidth="lg" className="py-20">
            <div className='grid grid-cols-3 gap-4'>
                <div>
                    <h1>This is a Left Side</h1>
                </div>
                <div className='col-span-2'>
                    {
                        flightList.map(list =><ShowBookingFlight key={list.id} list={list} />)
                    }
                </div>
            </div>
        </Container>
    );
};

export default BookingFlight;