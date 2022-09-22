import React from 'react';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import { Container } from '@mui/material';

const TopBookingArea = () => {
    return (
        <Container maxWidth="lg">
            
            <div className='md:absolute flex justify-center md:-mt-16 '>
                <ul className='flex flex-wrap md:text-white'>
                    <li className='px-4 py-3 hover:bg-green-400 hover:cursor-pointer hover:transition hover:duration-150 hover:ease-in-out'> <a href="#*"><FlightTakeoffOutlinedIcon/> <span>Flights</span></a> </li>
                    <li className='px-4 py-3'> <a href="#*"><DirectionsCarFilledOutlinedIcon/> <span>Car Rentals</span></a> </li>
                    <li className='px-4 py-3'> <a href="#*"><DirectionsCarFilledOutlinedIcon/> <span>Attractions</span></a></li>
                    <li className='px-4 py-3'> <a href="#*"><DirectionsCarFilledOutlinedIcon/> <span>Airport Taxis</span></a></li>
                </ul>
            </div>
        </Container>
    );
};

export default TopBookingArea;