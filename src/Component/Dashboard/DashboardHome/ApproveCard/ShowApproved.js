import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faXmark } from '@fortawesome/free-solid-svg-icons';

const ShowApproved = ({list}) => {
    return (
        <div className='bg-slate-50 p-4 rounded-md drop-shadow-md'>
            <div>
                <div>
                    <h2 className='font-medium text-base text-pink-black-100 mb-[6px] tracking-wider'>{list.clientName}</h2>
                </div>
                <div className='mb-[6px] text-pink-black-100'>
                    
                    <h5 className='text-xs mb-[2px] tracking-widest'>Service</h5>
                    <h3 className='text-sm font-medium tracking-widest capitalize'>{list.companyName}</h3>
                </div>
                <div className='flex mb-2'>
                    <div className='mr-3'>
                        <h5 className='text-xs font-400 mb-[2px] tracking-wider'>Date</h5>
                        <h3 className='text-pink-black-100 font-medium text-sm'>{list.date}</h3>
                    </div>
                    <div>
                        <h5 className='text-xs font-400 mb-[2px] tracking-wider'>Time</h5>
                        <h3 className='text-pink-black-100 font-medium text-sm'>{list.time}</h3>
                    </div>
                </div>
                <hr className='text-smooth-gray py-2' />
                <div className='flex items-center justify-between'>

                    <div className='flex items-center text-green-600 cursor-pointer hover:underline'>
                        <FontAwesomeIcon icon={faCheck} size="xl" />
                        <h3 className='tracking-wider font-'>Accept Booking</h3>
                    </div>

                    <div className='flex items-center justify-center text-red-600 cursor-pointer hover:underline'>

                        <FontAwesomeIcon icon={faXmark} size="xl" className='mr-1' />
                        <h3 className='tracking-wider'>Decline</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowApproved;