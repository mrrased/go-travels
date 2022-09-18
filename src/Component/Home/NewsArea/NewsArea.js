import React from 'react';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../Images/n-1.jpg'
import img2 from '../../../Images/n-2.jpg';
import img3 from '../../../Images/n-3.jpg';
import img4 from '../../../Images/n-4.jpg';
import ShowNews from './ShowNews';


const NewsItems = [
    {
        id: 1,
        img: img2,
        title: 'Happy International Country Flight Attendant Day',
        name: 'Emely Watson',
        date: ' February 19, 2022',
    },
    {
        id: 2,
        img: img3,
        title: 'The US is a Large Country and Climate Varies by Region',
        name: 'Smith Watson',
        date: ' March 6, 2022',
    },
    {
        id: 3,
        img: img4,
        title: 'Happy International Country Flight Attendant Day',
        name: 'Brandon walk',
        date: ' April 10, 2022',
    },
]

const leftNews = [
    {
        id: 1,
        img: img1,
        title: 'Depending on your departure point and destination flights',
        name: 'Emely Watson',
        date: ' jun 19, 2022',
    },
]

const NewsArea = () => {
    return (
        <Container maxWidth="lg" className='pb-10'>
            
            <div className='text-center '>
                <h4 className='text-sm text-smooth-yellow uppercase block font-semibold mb-1 font-sans tracking-widest'>our News Feeds</h4>
                <h2 className='text-xl md:text-4xl text-smooth-black font-bold font-sans '>Latest News Update</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                <div className='mb-12 divide-y drop-shadow-md'>
                    <div className='h-full bg-white rounded-2xl'>
                        <div>
                            <img className='h-full w-full rounded-t-2xl' src={img1} alt="" />
                        </div>
                        <div className='p-8 sm:py-12 sm:px-8'>
                            <div className='sm:flex items-center text-center'>
                                <div className='mt-3 text-slate-500'><span><FontAwesomeIcon icon={faUser} size="lg" className='mr-1 text-smooth-gray-50' /></span>{leftNews[0].name}</div>
                                <div className='mt-3 text-slate-500'><span><FontAwesomeIcon icon={faCalendarDays} size="lg" className='mr-1 sm:ml-3 text-smooth-gray-50' /></span>{leftNews[0].date}</div>
                            </div>
                            <h4 className='text-center sm:text-left text-sm sm:text-xl mt-3 mb-1 font-semibold text-smooth-black'>{leftNews[0].title}</h4>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        NewsItems.map(newsItem => <ShowNews key={newsItem.id} newsItem={newsItem} />)
                    }
                </div>
            </div>
        </Container>
    );
};

export default NewsArea;