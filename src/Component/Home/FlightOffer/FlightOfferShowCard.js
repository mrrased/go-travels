import React from 'react';

const FlightOfferShowCard = ({offerItem}) => {


    return (
        <div>
            <div className='bg-white p-4 rounded-2xl shadow-xl'>
                <div>
                    <img className='rounded-xl md:h-36 md:w-full' src={offerItem.img} alt="" />
                </div>
                <div className='pt-3 p-2.5 font-sans'>
                    <h3 className='text-xl mb-1 font-semibold text-smooth-black'>{offerItem.title}</h3>
                    <h4 className='mb-2.5 text-pink-blue font-medium text-base block font-sans'>{offerItem.date}</h4>
                    <h5 className='text-pink-blue font-medium mb-1 '>{offerItem.passengertype}</h5>
                    <h6 className='text-lg font-semibold text-smooth-black font-sans'>$ {offerItem.price}</h6>
                </div>
            </div>
        </div>
    );
};

export default FlightOfferShowCard;