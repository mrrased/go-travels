import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faCar, faTaxi, faCircleDot} from '@fortawesome/free-solid-svg-icons';
// import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
// import { set } from 'animejs';

const NavButton = ({services, setFiltered, activeData, setActiveData}) => {

    const [buttonValue, setButtonValue] = useState(1);


useEffect(()=>{

    if(activeData === 'flight'){
        setFiltered(services);
        // setButtonValue(true);
        return;
    }
        const serviceItems = services.filter(item => item.type.includes(activeData))
        setFiltered(serviceItems);

},[activeData, services, setFiltered])

    return (
        <div>
            <div className='sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
                <div>
               
                <button onClick={()=>{setActiveData('flight'); setButtonValue(1)}} className={`${ buttonValue === 1 ? "bg-smooth-yellow" : "bg-white" } w-full text-smooth-gray  text-sm font-semibold py-4  pr-7 pl-7 rounded-md drop-shadow-md hover:bg-smooth-yellow transition duration-400`}><FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-50' />Flight<FontAwesomeIcon icon={faPlaneDeparture} size="lg" className='ml-4' /></button>
            
                </div>
                <div>
                    <button onClick={()=>{setActiveData('rental'); setButtonValue(2)}} className={`${ buttonValue === 2 ? "bg-smooth-yellow" : "bg-white" } w-full text-smooth-gray  text-sm font-semibold py-4  pr-7 pl-7  rounded-md drop-shadow-md hover:bg-smooth-yellow transition duration-400`}><FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-50' />Rental Car<FontAwesomeIcon icon={faCar} size="lg" className='ml-4' /></button>
                </div>
                <div>
                    <button onClick={()=>{setActiveData('taxi'); setButtonValue(3)}} className={`${ buttonValue === 3 ? "bg-smooth-yellow" : "bg-white" } w-full text-smooth-gray  text-sm font-semibold py-4  pr-7 pl-7  rounded-md drop-shadow-md hover:bg-smooth-yellow transition duration-400`}><FontAwesomeIcon icon={faCircleDot} size="lg" className='mr-4 text-smooth-gray-50' />Taxis<FontAwesomeIcon icon={faTaxi} size="lg" className='ml-4' /></button>
                </div>
            </div>
        </div>
    );
};

export default NavButton;