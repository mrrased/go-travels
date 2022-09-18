import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

const ShowService = ({service}) => {
    return (
        <div className='bg-white mx-2 p-8 drop-shadow-md rounded-md mb-44 mt-12'>
            <div>
                <div className='mb-8 text-lg'>
                    <img className='h-11' src={service.icon} alt="" />
                </div>
                <div>
                <h3 className='text-smooth-pink font-medium block mb-4'>{service.count}</h3>
                <h1 className='text-pink-blue text-base sm:text-xl md:text-xl font-semibold mb-8'>{service.title}</h1>
                </div>
                <div className=' text-smooth-gray-100'>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-xs sm:text-sm xl:text-base'>{service.list1}</h3>
                        <h4><FontAwesomeIcon icon={faCheck} size="lg"/></h4>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-xs sm:text-sm xl:text-base'>{service.list2}</h3>
                        <h4><FontAwesomeIcon icon={faCheck} size="lg"/></h4>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-xs sm:text-sm xl:text-base'>{service.list3}</h3>
                        <h4><FontAwesomeIcon icon={faCheck} size="lg" /></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowService;