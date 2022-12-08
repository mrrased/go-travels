import React from 'react';
import { Container } from '@mui/material';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const PassengerInfo = () => {
    return (
        <Container maxWidth="lg" className='mt-[90px] pb-[90px]'>
            <div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2 '>
                        <div className='bg-pink-blue-50 px-5 py-3 text-white text-xl font-bold font-sans-serif rounded-t-md mb-3'>
                            <h2><PermIdentityOutlinedIcon fontSize="large" />Passenger1: Ms (Primary Contact)</h2>
                        </div>
                        <div>
                        <div className='flex items-center mt-3'>
                            <div>
                                <PersonAddAltIcon fontSize="large" />
                            </div>
                            <div className='w-full '>
                                <select id="cars" name="cars" className='w-full p-3'>
                                    <option value="volvo">Select There</option>
                                    <option value="saab">Saab 95</option>
                                    <option value="mercedes">Mercedes SLK</option>
                                    <option value="audi">Audi TT</option>
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <h1>This is a Right side</h1>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PassengerInfo;