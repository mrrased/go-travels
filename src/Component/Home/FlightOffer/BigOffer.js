import React from 'react';

const BigOffer = ({offerItems}) => {
    return (
        <div className=''>
            <div className='shadow-xl rounded-2xl hover:'>
                <div className=''>
                    <img className='rounded-t-2xl md:h-[29.5rem] md:w-full' src={offerItems.img} alt="" />
                </div>
                <div className='px-8 py-6 bg-white rounded-b-2xl'>
                    <h3 className='text-2xl font-semibold mb-1.5 text-smooth-black font-sans'>{offerItems.title}</h3>
                    <h4 className='text-pink-blue font-sans text-base font-medium block mb-5'>{offerItems.date}</h4>
                    <h5 className='text-pink-blue font-sans text-base font-medium block mb-1'>{offerItems.passengertype}</h5>
                    <h6 className='text-lg font-semibold text-smooth-black'>$ {offerItems.price}</h6>
                </div>
            </div>
        </div>
    );
};

export default BigOffer;