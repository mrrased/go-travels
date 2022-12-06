import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import sunset from '../../../../../Images/icons8-sunset-64.png';
import moon from '../../../../../Images/moon.png';

const FilterItems = () => {
    
    return (
        <div className='p-7'>
            <div>
                <div className='bg-pink-blue text-white py-3 text-center text-[22px] font-bold uppercase tracking-wider'>
                    <h1>Filters</h1>
                </div>
                <div className='p-7 bg-white drop-shadow-lg'>
                    <div>
                        <h2 className='text-lg text-pink-blue mb-[30px] pb-[15px] border-dashed border-b border-pink-blue font-bold'>Price Range</h2>
                    </div>
                    <div>
                        <p>Price:</p>
                    </div>
                </div>
            </div>
            <div className='p-7 bg-white drop-shadow-lg mt-2'>
                <div>
                    <h1 className='text-lg text-pink-blue mb-[30px] pb-[15px] border-dashed border-b border-pink-blue font-bold'>Departure Time</h1>
                </div>
                <div className='text-base font-semibold text-pink-blue'>
                    <button className='bg-gray-100 py-2 px-4'><WbTwilightIcon className='border-r border-h-[10px] border-indigo-500' /> 00:00 - 05:59</button><br />
                    <button className='bg-gray-100 py-2 px-4 mt-2'><LightModeOutlinedIcon /> 06:00 - 11:59</button><br />
                    <button className='bg-gray-100 py-2 px-4 mt-2'><img src={sunset} alt="" className='w-[24px] h-[24px] inline' /> 12:00 - 17:59</button><br />
                    <button className='bg-gray-100 py-2 px-4 mt-2'><img src={moon} alt="" className='w-[24px] h-[24px] inline' /> 18:00 - 23:59</button>
                </div>
            </div>

        </div>
    );
};

export default FilterItems;