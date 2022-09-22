import React   from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";
import img1 from '../../../Images/1.jpg';
import img2 from '../../../Images/2.jpg';
import img3 from '../../../Images/3.jpg';
// import ShowImage from './ShowImage';


const ImageItem = [
    {
        id: 1, 
        img: img1,
        title: 'A Lifetime of Discounts? Its Go Travel',
        description: 'Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account'
    },
    {
        id: 2, 
        img: img2,
        title: 'Book Your favourite Place! Go travel',
        description: 'Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account'
    },
    {
        id: 3, 
        img: img3,
        title: 'Book Hotel And Car Package! Go travel ',
        description: 'Get rewarded for your travels – unlock instant savings of 10% or more with a free Geairinfo.com account'
    },
]

const TopBanner = () => {

    // const TextAnimation = useRef(null);

    // useEffect(()=>{
    //     SlideText();
    // },[])

    // let Anime = setInterval(()=>{

    //     stop();

    //     SlideText();

    // },[7000])
    
    // const stop = () =>{

    //     clearInterval(Anime);
    // }
    // const SlideText = () =>{
    //     TextAnimation.current = anime.timeline()
    //     .add({
    //       targets: '.square ',
    //       opacity: [0,1],
    //       easing: "easeInOutQuad",
    //       duration: 1900,
    //       delay: (el, i) => 150 * (i+1),
    //       endDelay: 2000
    //     }).add({
    //       targets: '.square ',
    //       opacity: 0,
    //       duration: 1000,
    //       easing: "easeOutExpo",
    //       delay: 1000
    //     });
    // }

    
    let settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:3000,
        fade: true,
        arrows: false
    };

    

    
    return (
        <div className='text-center'>
            
            <Slider {...settings}>

                {/* {
                ImageItem.map(item => <ShowImage key={item.id} item={item}  /> )
                } */}

                <div className=' bg-green-900'>
                    <img  className=' w-full aspect-video mix-blend-overlay' src={ImageItem[0].img} alt="" /> 

                    <div className='absolute top-10 md:top-80 md:left-40 text-white' >
                        <div className=' text-center text-xl p-2 m-2 md:text-5xl font-bold font-sans animate-blob md:pl-0 md:ml-0'>{ImageItem[0].title}</div>
                        <div className=' text-left p-2 m-2 text-base md:pl-0 md:ml-0 font-normal md:w-4/5'>{ImageItem[0].description}</div>
                        <div className='px-4 py-2 bg-yellow-600 text-center w-40 animate-pulse ' ><button>Join Now</button></div>
                    </div>

                </div>

                <div className=' bg-green-900'>
                    <img className=' w-full aspect-video mix-blend-overlay' src={ImageItem[1].img} alt="" /> 

                    <div className='absolute top-10 md:top-80 md:left-40 text-white' >
                        <div className=' text-center text-xl p-2 m-2 md:text-5xl font-bold font-sans md:pl-0 md:ml-0'>{ImageItem[1].title}</div>
                        <div className=' text-left p-2 m-2 text-base md:pl-0 md:ml-0 font-normal md:w-4/5'>{ImageItem[1].description}</div>
                        <div className=' px-4 py-2 bg-yellow-600 text-center w-40 animate-pulse' ><button>Booking Now</button></div>
                    </div>
                </div>
                <div className=' bg-green-900'>
                    <img className='w-full aspect-video mix-blend-overlay' src={ImageItem[2].img} alt="" /> 
                    <div className='absolute top-10 md:top-80 md:left-40 text-white' >
                        <div className=' text-center text-xl p-2 m-2 md:text-5xl font-bold font-sans md:pl-0 md:ml-0'>{ImageItem[2].title}</div>
                        <div className=' text-left p-2 m-2 text-base md:pl-0 md:ml-0 font-normal md:w-4/5'>{ImageItem[2].description}</div>
                        <div className=' px-4 py-2 bg-yellow-600 text-center w-40 animate-pulse ' ><button>Booking Now</button></div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default TopBanner;