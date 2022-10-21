import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus , faPlaneDeparture, faTaxi} from '@fortawesome/free-solid-svg-icons';
// import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../../Images/pending-approval.png';


const TotalViewArea = () => {
    return (
        <Container maxWidth='lg' className='-mt-[50px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2'>
                <div className='grid grid-cols-2 items-center  p-3 py-5 bg-white rounded-md drop-shadow-lg'>
                        <div className='flex justify-center transition ease-in-out delay-150 hover:scale-125 duration-300'>
                            <FontAwesomeIcon icon={faCartPlus} size="xl" className='p-4 bg-green-200 rounded-md text-pink-blue' />
                        </div>
                    <div className=''>
                        <h3 className='text-base text-smooth-gray'>Total Booking</h3>
                        <h5 className='mt-1 text-2xl font-medium '>44</h5>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center  p-3 py-5 bg-white rounded-md drop-shadow-lg'>
                        <div className='flex justify-center transition ease-in-out delay-150 hover:scale-125 duration-300'>
                            <FontAwesomeIcon icon={faTaxi} size="xl" className='p-4 bg-yellow-200 rounded-md text-pink-blue' />
                        </div>
                    <div className=''>
                        <h3 className='text-base text-smooth-gray'>Texi Booking</h3>
                        <h5 className='mt-1 text-2xl font-medium '>20</h5>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center  p-3 py-5 bg-white rounded-md drop-shadow-lg'>
                        <div className='flex justify-center transition ease-in-out delay-150 hover:scale-125 duration-300'>
                            <FontAwesomeIcon icon={faPlaneDeparture} size="xl" className='p-4 bg-teal-200 rounded-md text-pink-blue' />
                        </div>
                    <div className=''>
                        <h3 className='text-base text-smooth-gray'>Total Travel</h3>
                        <h5 className='mt-1 text-2xl font-medium '>15</h5>
                    </div>
                </div>
                <div className='grid grid-cols-2 items-center  p-3 py-5 bg-white rounded-md drop-shadow-lg'>
                        <div className='flex justify-center transition ease-in-out delay-150 hover:scale-125 duration-300 '>
                            <img src={img1} alt="" className='p-2 h-[60px] w-[60px] bg-sky-200 rounded-md' />
                        </div>
                    <div className=''>
                        <h3 className='text-base text-red-600'>Pending</h3>
                        <h5 className='mt-1 text-2xl font-medium text-red-600'>70</h5>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TotalViewArea;