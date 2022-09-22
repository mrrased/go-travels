import { Container } from '@mui/material';
import React from 'react';

const AboutOffer = () => {
    return (
        <Container  maxWidth='lg' className='py-44 px-0'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-5'>
                    <div>
                        <h2 className='text-sm uppercase text-smooth-yellow-150 font-semibold mb-1 tracking-widest'>who we are</h2>
                        <h3 className='text-4xl font-bold text-smooth-black mb-3'>Magical Singapore now even more amazing!</h3>
                        <h4 className='mb-7 font-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn interdum imperdiet ipsum. denounce with rieous indiation and dislike men who beguiled demor.</h4>
                            <ul>
                                <li>Pre-Book Your Baggage Donating</li>
                                <li>Accusamus Iusto Odio Dignissimos Ducimus</li>
                                <li>Dislike Men Who are so Beguiled</li>
                            </ul>
                    </div>
                </div>
                <div className='col-span-7'>
                    02
                </div>
            </div>
        </Container>
    );
};

export default AboutOffer;