import React ,{ useState } from 'react';
import { Container } from '@mui/system';
import img1 from '../../../Images/d-2.jpg';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments , faUserGroup, faGlobe, faTaxi, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import './flight.css';

const FlightDestinationArea = () => {

    const [countOn, setCountOn] = useState(false)

    return (
        <div className="gap-4 img-bg mt-20">
           <Container maxWidth="lg" className='col-start-1 col-span-3 p-6 sm:p-11 md:p-20'>

                <div >
                    <div className='text-center md:text-left'>
                        <button className='bg-smooth-yellow-100 tracking-widest text-sm uppercase font-semibold mb-1 text-white py-1.5 px-5 rounded-3xl'>Offer Deals</button>
                        <h2 className='text-2xl mt-3 md:mt-0 md:text-4xl mb-2.5 text-white font-bold'>Your Great Destination</h2>
                        <h4 className='text-smooth-gray-150 font-mediums md:w-2/4'>Get rewarded for your travels – unlock instant savings of 10% or more with a free <span className='text-smooth-yellow-150'>GoTravels.com</span> account</h4>
                    </div>

                <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>

                <div className='md:flex my-4 w-full md:w-3/6'>

                    <div className='flex items-center justify-between px-8 py-5 bg-white rounded-xl md:w-2/4 md:mr-4'>
                        <h2 className='font-bold text-3xl'>{countOn && <CountUp start={0} end={5340} duration={2} delay={0} />}+ </h2>
                        <h3><FontAwesomeIcon icon={faUserGroup} size="2x" className='mr-4 text-pink-blue' /></h3>
                    </div>

                    <div className='flex items-center justify-between px-8 py-5 mt-2 md:mt-0 bg-white rounded-xl md:w-2/4'>
                        <h2 className='font-bold text-3xl'>{countOn && <CountUp start={0} end={100} duration={2} delay={0} />}%</h2>
                        <h3><FontAwesomeIcon icon={faGlobe} size="2x" className='mr-4 text-pink-blue' /></h3>
                    </div>
                </div>
                
                </ScrollTrigger>

                <div className='text-center md:text-left md:flex'>
                    <h4 className='text-base text-smooth-gray-150 md:mr-3'>Discover the latest offers & news and start planning</h4>
                    <button className='bg-smooth-yellow-100 mt-5 md:mt-0 tracking-widest text-sm uppercase font-semibold mb-1 text-white py-1.5 px-5 rounded-3xl'>contact us</button>
                </div>
                </div>

           </Container>
        </div>
    );
};

export default FlightDestinationArea;