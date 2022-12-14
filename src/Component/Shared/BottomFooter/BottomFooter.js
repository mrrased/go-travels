import React from 'react';
import { Container } from '@mui/material';
import bankIcon1 from '../../../Images/footer.png';

const BottomFooter = () => {
    return (
        <div className='bg-smooth-black py-[30px]'>
            <Container maxWidth="lg">
                <div className='grid grid-cols-1 md:grid-cols-2  gap-4 items-center'>
                    <div>
                        <h3 className='text-smooth-gray-200 text-base'>Copyright © 2022.All Rights Reserved By <span className='text-smooth-yellow-150'>Go-Travel</span></h3>
                    </div>
                    <div className='flex  justify-end'>
                        <img src={bankIcon1} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BottomFooter;