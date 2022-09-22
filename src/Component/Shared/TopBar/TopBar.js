import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments , faUserGroup, faPlane, faTaxi, faCircleDot} from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {

    return (
        <div className='bg-pink-black-100 block'>
            <div className='flex items-center justify-center sm:justify-between whitespace-normal text-smooth-gray-200 sm:mx-2 sm:ml-6'>
                <div className=' hidden sm:inline'>
                   
                    <h3 className=''><span><FontAwesomeIcon icon={faPlane} size="lg" className='mr-1 text-smooth-yellow-100' /></span> Safely travel And Enjoy your life</h3>
                </div>
                <div className='flex items-center justify-center divide-x tracking-wide sm:tracking-widest'>
                    <h3 className='text-xs px-2 py-1 sm:text-sm sm:px-5 sm:py-2 '>Corporate Club</h3>
                    <h3 className='text-xs px-2 py-1 sm:text-sm sm:px-5 sm:py-2 '>Smiles</h3>
                    <h3 className='text-xs px-2 py-1 sm:text-sm sm:px-5 sm:py-2 '>Feedback</h3>
                    <h3 className='text-xs px-2 py-1 sm:text-sm sm:px-5 sm:py-2 '>Search</h3>
                </div>
            </div>
        </div>
    );
};

export default TopBar;