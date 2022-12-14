import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import 'tw-elements';
import { NavLink, useNavigate } from 'react-router-dom';

const ShowBookingFlight = ({list}) => {
    // console.log(list);
    const {planeName, date, month, time, area, hour, stops, Operate, price, nextDay, nextDate, nextTime, airport, nextFlightAirPortName, tpm, passengerClass, flightNumber, airPlaneNumber, weight, key} = list;

    const navigate = useNavigate();
    return (
        <div className="grid grid-cols-1 divide-y divide-dashed divide-gray-600 p-2 sm:p-9 bg-white my-6 drop-shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-4 sm:divide-x sm:divide-dashed sm:divide-gray-600 mb-6">
                <div className="col-span-3">
                    <div className='grid grid-cols-1 sm:grid-cols-5'>

                            <div className='col-span-2 mb-3 sm:mb-0'>
                                <div>
                                    <h1 className='text-pink-blue font-semibold text-lg'>{planeName}</h1>
                                </div>
                                <div className='text-pink-blue text-[13px] font-medium tracking-wider'>
                                    {Operate}
                                </div>
                            </div>
                            <div className='text-pink-blue font-medium text-base'>
                                <h1>{date}</h1>
                                <h2>{month}</h2>
                            </div>
                            <div>
                                <h1 className='text-pink-blue font-bold text-base'>{time}</h1>
                                <h2 className='text-pink-blue font-medium text-base'>{area}</h2>
                            </div>
                            <div className='text-pink-blue font-medium text-base mb-3 sm:mb-0'>
                                <h1>{hour}</h1>
                                <h2>{stops}</h2>
                            </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='text-center'>
                        <h1 className='text-pink-blue text-lg font-semibold mb-2 '>US$ {price}</h1>
                        <button onClick={(e)=>navigate(`/booking-details/${key}`)} to='/booking-details' className='px-8 py-2 bg-smooth-yellow-150 text-black font-semibold text-lg capitalize rounded-[3px] '>Select <FontAwesomeIcon icon={faPlaneDeparture} size="sm" className='ml-1 text-pink-blue' /></button>
                    </div>
                </div>
            </div>
            <div><h1 className='text-[13px] text-pink-blue text-medium tracking-wider text-center sm:text-right'>Price per person (incl. taxes & fees)</h1></div>
            <div className="flex justify-between pt-3 w-full">
                    <div className='relative w-full overflow-hidden '>

                        <input type="checkbox"  className='absolute top-0 inset-x-0 w-full h-12 z-10 cursor-pointer opacity-0 peer' />

                        <div className='h-12 w-full pl-8 flex items-center peer-checked:bg-gray-100 transition-all duration-500'>
                            <h1 className='text-pink-blue font-medium text-base peer-checked:text-white'>Flight Detail</h1>
                        </div>

                        <div className='absolute top-3 left-2 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink-blue">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>

                        <div className='bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[450px] sm:peer-checked:max-h-[200px] peer-checked:bg-gray-100'>
                            <div className='p-4'>
                                <div className='grid grid-cols-1 sm:grid-cols-7 sm:divide-x sm:divide-pink-blue'>
                                    <div className='col-span-2 mb-3 sm:mb-0'>
                                        <div className='w-[138px] py-[3px] bg-smooth-yellow-150 text-white text-center rounded-sm mb-5'>
                                            <h1 >{date}, {month}</h1>
                                        </div>
                                        <div className='mb-5'>
                                            <div>
                                                <h1 className='text-sm text-pink-blue font-semibold'>{date},{month}-{time}</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-pink-blue text-sm font-semibold opacity-75'>{hour}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className='text-sm text-pink-blue font-semibold'>{nextDay}, {nextDate} - {nextTime}</h1>
                                        </div>
                                    </div>
                                    <div className='col-span-5 sm:pl-2'>
                                        <div className='text-base font-semibold text-pink-blue mb-[10px]'><h1><FontAwesomeIcon icon={faPlaneDeparture} size="sm" className='mr-[10px] text-pink-blue' />{airport}</h1></div>
                                        <div className='sm:flex items-center justify-center p-1 bg-slate-300'>
                                            <div className='flex items-center'>
                                                <h1>Image</h1>
                                            </div>
                                            <div className='text-[13px] text-pink-blue opacity-75 font-medium tracking-wider'>
                                                <div className=''><h1>{tpm}</h1></div>
                                                <div><h1>Operated by Airlines</h1></div>
                                                <div className='sm:flex items-center  sm:divide-x sm:divide-gray-600 '>
                                                    <div className='sm:pr-1'><h1>{passengerClass}</h1></div>
                                                    <div className='sm:pr-1 sm:pl-1'><h1>{flightNumber}</h1></div>
                                                    <div className='sm:pr-1 sm:pl-1'><h1>{airPlaneNumber}</h1></div>
                                                </div>
                                                <div><h1>{weight}</h1></div>
                                            </div>
                                        </div>
                                        <div className='text-base font-semibold text-pink-blue mt-[10px]'><h1>{nextFlightAirPortName}</h1></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <h1 className='text-[13px] text-pink-blue text-medium tracking-wider'>Price per person (incl. taxes & fees)</h1>
                        </div> */}
                    </div>
                </div>
            
        </div>
    );
};

export default ShowBookingFlight;