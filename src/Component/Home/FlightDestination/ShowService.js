import React from 'react';
import { motion } from "framer-motion";

const ShowService = ({service}) => {

    // console.log(service)
    return (
        <motion.div
        className="box"
        layout
        initial={{opacity: 0, scale: .9}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: .9}}
        transition={{
            duration: .3,
            delay:0.1,
        }}
        >
            <div className='bg-white rounded-3xl p-4'>
                <div>
                    <img className='rounded-t-3xl h-52 w-full' src={service.img} alt="" />
                </div>
                <div className='divide-y'>
                    <div className='pb-4 text-center'>
                        <h6 className='block text-pink-blue font-medium	text-sm mb-2'>{service.date}</h6>
                        <h2 className='text-pink-blue font-semibold text-lg	'>{service.title}</h2>
                        <h5 className='text-pink-blue font-semibold text-lg'>{service.country}</h5>
                    </div>
                    <div className='pt-5'>
                        <h3 className='text-sm mb-1 font-medium text-pink-blue'>{service.classes}</h3>
                        <h4 className='text-xl font-semibold text-smooth-black'>$ {service.price}</h4>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ShowService;