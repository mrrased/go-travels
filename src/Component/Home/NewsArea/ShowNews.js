import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faCar, faUser, faCircleDot} from '@fortawesome/free-solid-svg-icons';

const ShowNews = ({newsItem}) => {
    return (
        <div className='divide-y divide-slate-300 last-of-type:divide-y-0'>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0 ">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={newsItem.img}alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                        <div className="sm:flex items-center text-center divide-slate-300 tracking-wide text-sm text-indigo-500 font-medium">
                            <div>
                                <h4 className="mt-2 text-slate-500"><span><FontAwesomeIcon icon={faUser} size="lg" className='mr-1 text-smooth-gray-50' /></span>{newsItem.name}</h4>
                            </div>
                            <div>
                                <h3 className="mt-2 text-slate-500"><span><FontAwesomeIcon icon={faCalendarDays} size="lg" className='mr-1 sm:ml-3 text-smooth-gray-50' /></span>{newsItem.date}</h3>
                            </div>
                        </div>
                        <a href="#" className="block mt-3 text-center md:text-left sm:mt-1  text-sm sm:text-lg leading-tight  font-medium text-black hover:underline">{newsItem.title}</a>
                    </div>
                </div>
            </div>
            <div className='my-8'></div>
        </div>
    );
};

export default ShowNews;