import React from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot , faTags} from '@fortawesome/free-solid-svg-icons';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StarsIcon from '@mui/icons-material/Stars';
import discount from '../../../../../Images/discount-small.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import icon1 from '../../../../../Images/bank_logo01.png';
import icon2 from '../../../../../Images/bank_logo02.png';
import icon3 from '../../../../../Images/bank_logo03.png';
import icon4 from '../../../../../Images/bank_logo04.png';
import icon5 from '../../../../../Images/bank_logo05.png';
import icon6 from '../../../../../Images/bank_logo06.png';


const OrderFlight = [
    {
        time: '12:00',
        FlightAirportName: 'DEK',
        FlightStartAirport: 'Dubai',
        FlightLandingTime: '16:30',
        FlightLandingAirPortName: 'DEK',
        FlightLandingAirport: 'Istanbul'
    }
]

const PassengerInfo = () => {
    return (
        <Container maxWidth="lg" className='mt-[90px] pb-[90px]'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 xl:gap-8'>
                    
                    {/* Passenger Info Side Start */}

                    <div className='col-span-2 bg-gray-50'>
                        <div className='flex items-center bg-pink-blue-50 px-5 py-3 text-white text-xl font-bold font-sans-serif rounded-t-md mb-3'>
                            <h2><PermIdentityOutlinedIcon className='mr-2' /></h2>
                            <h3>Passenger1: Ms (Primary Contact)</h3>
                        </div>
                        <form className='p-3 md:p-4'>
                            <div className='flex items-center mt-10 mb-2'>
                                <div>
                                    <PersonAddAltIcon  className='text-pink-blue ' />
                                </div>
                                <div className='w-full ml-2'>
                                    <select id="cars" name="cars" className='w-full p-4 border text-pink-blue border-smooth-gray-10'>
                                        <option value="volvo">Select There</option>
                                        <option value="saab">Saab 95</option>
                                        <option value="mercedes">Mercedes SLK</option>
                                        <option value="audi">Audi TT</option>
                                    </select>
                                </div>
                            </div>

                            <div className='md:flex flex-wrap items-center mt-2 mb-2'>

                                <div className='flex items-center w-full md:w-1/5'>
                                    <div><PersonOutlineRoundedIcon  className='text-pink-blue mr-2' /></div>

                                    <div className='w-full'>
                                        <select id="cars" name="cars" className='p-4 border text-pink-blue border-smooth-gray-10 w-full md:w-auto' >
                                            <option value="saab">Mr.</option>
                                            <option value="mercedes">Mrs.</option>
                                            <option value="audi">Others</option>
                                        </select>
                                    </div>

                                </div>

                                <div className='w-full mt-2 mb-2 md:mt-0 md:mb-0 md:w-2/5' >
                                    <input type="name"  value="" placeholder='First Name' className='w-full p-4 border text-pink-blue border-smooth-gray-10' />
                                </div>

                                <div className='w-full md:w-2/5'>
                                    <input type="name"  value="" placeholder='Last Name' className='w-full p-4 border text-pink-blue border-smooth-gray-10'  />
                                </div>

                            </div>

                            <div className='flex mt-2 mb-2'>
                                <div className='p-4'>male</div>
                                <div className='p-4'>Female</div>
                            </div>

                            <div className='md:flex flex-wrap items-center mt-2 mb-2'>

                                <div className='flex items-center w-full md:w-2/5'>
                                    <div>
                                        <LanguageRoundedIcon  className='text-pink-blue mr-2 md:mr-0' />
                                    </div>
                                    <div className='w-full'>
                                        <select id="cars" name="cars" className='w-full p-4 border text-pink-blue border-smooth-gray-10 md:ml-2 md:mr-2' >
                                            <option value="saab">Mr.</option>
                                            <option value="mercedes">Mrs.</option>
                                            <option value="audi">Others</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex items-center w-full md:w-3/5 mt-2 md:mt-0'>
                                    <div>
                                        <CallRoundedIcon  className='text-pink-blue md:ml-9 mr-2 md:mr-[7px]' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="number" placeholder='Mobile Number' className='w-full p-4 border text-pink-blue border-smooth-gray-10 md:ml-0' />
                                    </div>
                                </div>
                            </div>

                            <div className='md:flex flex-wrap items-center mt-2 mb-2'>
                                
                                <div className='flex items-center w-full md:w-2/5'>
                                    <div>
                                        <DateRangeIcon  className='text-pink-blue mr-2 md:mr-0' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="date" className='w-full p-4 border text-pink-blue border-smooth-gray-10 md:ml-2' />
                                    </div>
                                </div>

                               <div className='flex items-center w-full md:w-3/5 mt-2 md:mt-0'>
                                    <div>
                                        <AccountBalanceIcon  className='text-pink-blue md:ml-9 mr-[7px]' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="text" placeholder='Post Code' className='w-full p-4 border text-pink-blue border-smooth-gray-10' />
                                    </div>
                               </div>
                            </div>

                            <div className='md:flex flex-wrap items-center mt-2 mb-2'>
                                <div className='flex items-center w-full md:w-2/5'>
                                    <div>
                                        <AlternateEmailIcon  className='text-pink-blue mr-2 md:mr-0' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="email" placeholder='Your Email' className='w-full p-4 border text-pink-blue border-smooth-gray-10 md:ml-2' />
                                    </div>
                                </div>
                                <div className='flex items-center w-full md:w-3/5 mt-2 md:mt-0'>
                                    <div>
                                        <StarsIcon  className='text-pink-blue md:ml-9 mr-[7px]' />
                                    </div>
                                    <div className='w-full'>
                                        <input type="text" placeholder='Flyer Number' className='w-full p-4 border text-pink-blue border-smooth-gray-10' />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full mt-3 md:mt-10 mb-3'>

                                <select id="cars" name="cars" className='w-full p-4 text-pink-blue border border-smooth-gray-10' >
                                    <option value="saab">Select meal type (optional) </option>
                                    <option value="mercedes">Mrs.</option>
                                    <option value="audi">Others</option>
                                </select>

                            </div>

                            <div className='w-full mt-2 '>
                                <select id="cars" name="cars" className='w-full p-4 text-pink-blue border border-smooth-gray-10' >
                                    <option value="saab">Request wheelchair (optional) </option>
                                    <option value="mercedes">Mrs.</option>
                                    <option value="audi">Others</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    {/* Passenger Info Side End */}

                    {/* Bank Pay Side Start */}

                    <div className='col-span-1 divide-y '>
                        <div>
                            <div className='bg-pink-blue-50 px-5 py-3 text-white text-xl font-bold font-sans-serif rounded-t-md mb-3'>
                                <h3>Booking Info</h3>   
                            </div>
                        </div>
                        <div>
                            {
                                OrderFlight.map(order =>{

                                    return(
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <h2 className='text-sm font-semibold text-pink-blue-50 uppercase'>{`${order.time} (${order.FlightAirportName})`}</h2>
                                                <p className='text-[13px] font-semibold opacity-75 text-pink-blue-50 '>{order.FlightStartAirport}</p>
                                            </div>
                                            <div>
                                                <h2 className='text-sm font-semibold text-pink-blue-50 uppercase'>{`${order.FlightLandingTime} (${order.FlightLandingAirPortName})`}</h2>
                                                <p className='text-[13px] font-semibold opacity-75 text-pink-blue-50 '>{order.FlightLandingAirport}</p>
                                            </div>
                                        </div>
                                    )
                                    
                                })
                            }
                        </div>
                        <div className='mt-3 p-4'>

                            <div className='text-lg text-pink-blue-50 mb-[30px] pb-[15px] font-bold border-b-2 border-smooth-gray-200 border-dotted'>
                                <h3>Select Discount Option</h3>
                            </div>

                            {/* Discount Part Start */}
                            <div className='flex items-center'>
                                <div>
                                    <img src={discount} alt="" className='mr-4 w-6 h-6 md:w-9 md:h-9' />
                                </div>
                                <div className='flex w-9/12 md-w-auto'>
                                    <input type="text" placeholder='Enter code' className='p-3 w-full text-pink-blue border border-smooth-gray-10' />
                                    <button className='p-3 bg-smooth-yellow-150' ><CheckCircleIcon  className='text-pink-blue' /></button>
                                </div>
                            </div>
                            {/* Discount Part End */}

                            {/* Bank Option Part Start */}

                            <div className='p-4 mt-9'>
                                <div className='text-lg text-pink-blue-50 mb-[30px] pb-[15px] font-bold border-b-2 border-smooth-gray-200 border-dotted'>
                                    <h3>Your Preferred Bank</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-2 gap-4">

                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon1} alt="" />
                                    </div>
                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon2} alt="" />
                                    </div>
                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon3} alt="" />
                                    </div>
                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon4} alt="" />
                                    </div>
                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon5} alt="" />
                                    </div>
                                    <div className='flex items-center justify-center bg-gray-200 py-6 border hover:border-smooth-yellow transition-all hover:bg-white cursor-pointer'>
                                        <img src={icon6} alt="" />
                                    </div>

                                </div>

                            </div>

                            {/* Bank Option Part End */}

                            <div className='p-4 '>
                                {/* <div className='text-lg text-pink-blue-50 mb-[30px] pb-[15px] font-bold border-b-2 border-smooth-gray-200 border-dotted'>
                                    <h3>Your price summary</h3>
                                </div>  */}
                                <div className='p-2'>
                                    <div className='flex items-center justify-between p-4 bg-smooth-gray-200 text-base mb-5'>
                                        <h2>Details</h2>
                                        <h3>Amount</h3>
                                    </div>
                                    <div className='flex items-center justify-between text-pink-blue-50'>
                                        <h1 className='text-base font-medium opacity-[.88] mb-2'>Adult x 1</h1>
                                        <h1 className='text-lg font-semibold '>$1,056</h1>
                                    </div>
                                    <div className='flex items-center justify-between border-b border-smooth-gray-200 mb-2 pb-2 text-pink-blue-50'>
                                        <h1 className='text-base font-medium opacity-[.88] mb-2'>Tax x 1</h1>
                                        <h3 className='text-lg font-semibold mb-2'>$35</h3>
                                    </div>
                                    <div className='flex items-center justify-between text-pink-blue-50'>
                                        <h1 className='text-base font-medium opacity-[.88] mb-2'>Total Airfare:</h1>
                                        <h1 className='text-lg font-semibold mb-2'>$1,091</h1>
                                    </div>
                                    <div className='flex items-center justify-between border-b border-smooth-gray-200 mb-2 pb-2 text-pink-blue-50'>
                                        <h1 className='text-base font-medium opacity-[.88] mb-2'>Discount</h1>
                                        <h3 className='text-lg font-semibold mb-2'>-$110</h3>
                                    </div>
                                    <div className='flex items-center justify-between text-pink-blue-50'>
                                        <h1 className='text-base font-medium opacity-[.88] mb-4'>Total Payable</h1>
                                        <h3 className='text-lg font-semibold mb-4'>$981</h3>
                                    </div>

                                    <button className='uppercase bg-pink-blue-50 w-full py-4 text-white'>Pay Now</button>
                                </div>                              
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* Bank Pay Side Start */}

                </div>
            </div>
        </Container>
    );
};

export default PassengerInfo;