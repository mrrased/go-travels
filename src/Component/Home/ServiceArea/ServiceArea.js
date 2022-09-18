import React, { useRef } from 'react';
import { Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../Images/icon-1.png';
import img2 from '../../../Images/icon-2.png';
import img3 from '../../../Images/icon-3.png';
import ShowService from './ShowService';


const services = [
    {
        id: 1,
        icon: img1,
        count: 'Service 01',
        title: 'Pre-Book Your Baggage',
        list1: 'What will it be, window or aisle? ',
        list2: 'Select your preferred seat prior',
        list3: '90% of baggage charges',
    },
    {
        id: 2,
        icon: img3,
        count: 'Service 02',
        title: 'Reserve preferred seat!',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: 'Reserved for you. ',
    },
    {   
        id: 3,
        icon: img2,
        count: 'Service 03',
        title: 'Enjoy stress-free travel',
        list1: 'Travel stress-free by getting',
        list2: 'Covered for flight modification',
        list3: 'Cancellation, accident & medical',
    },
    {   
        id: 4,
        icon: img3,
        count: 'Service 04',
        title: 'Reserve preferred seat!',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: 'Reserved for you. ',
    },
    {
        id: 5,
        icon: img1,
        count: 'Service 05',
        title: 'Pre-Book Your Baggage',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: '90% of baggage charges',
    },
    {
        id: 6,
        icon: img2,
        count: 'Service 06',
        title: 'Pre-Book Your Baggage',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: '90% of baggage charges',
    },
    {
        id: 7,
        icon: img3,
        count: 'Service 07',
        title: 'Pre-Book Your Baggage',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: '90% of baggage charges',
    },
    {   
        id: 9,
        icon: img1,
        count: 'Service 08',
        title: 'Pre-Book Your Baggage',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: '90% of baggage charges',
    },
    {
        id: 10,
        icon: img2,
        count: 'Service 09',
        title: 'Pre-Book Your Baggage',
        list1: 'Pre-book your baggage ',
        list2: 'Allowance now and save up',
        list3: '90% of baggage charges',
    },
]

const ServiceArea = () => {

    const SliderRef = useRef(null)
    // let settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 1200,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed:3000,
    //     fade: true,
    //     arrows: false
    // };


    let settings ={

        slidesToShow: 3,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
    }

    return (
        <Container maxWidth="lg">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                <div>
                    <h4 className='text-sm text-smooth-yellow uppercase block font-semibold mb-1 font-sans tracking-widest'>Why Air geair</h4>
                    <h2 className='text-xl md:text-3xl text-smooth-black font-bold font-sans '>Our Great Flight Options</h2>
                </div>

                <div className='flex items-center justify-end'>
                    <FontAwesomeIcon onClick={()=>SliderRef.current.slickNext()}  icon={faArrowLeft} size="lg" className='mr-4 text-pink-blue bg-white p-4 drop-shadow-md cursor-pointer' />
                    <FontAwesomeIcon onClick={()=>SliderRef.current.slickPrev()} icon={faArrowRight} size="lg" className='mr-4 text-pink-blue bg-white p-4 drop-shadow-md cursor-pointer' />
                </div>

            </div>
            <div>
                <Slider {...settings} ref={SliderRef}  autoplay={true} infinite={true} slidesToScroll={1} speed={1600} mobileFirst={true} >
                            {
                            services.map(service =><ShowService key={service} service={service} />)
                        }
                </Slider>
            </div>
        </Container>
    );
};

export default ServiceArea;