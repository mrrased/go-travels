import React from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import 'animate.css';



const ShowImage = ({item}) => {

    // useEffect(()=>{
    //     AOS.init({duration: 1000})
    // },[])
    
    // setInterval(()=>{
    //     AOS.init({duration: 1000})
    // },1000)
    // console.log(item)
    
    return (
        <div className='relative'>
           <img className=' w-full aspect-video mix-blend-overlay' src={item.img} alt="" /> 
           <div className='absolute  top-10  border-2 border-indigo-600 animate__animated animate__bounce' >
                <p>{item.title}</p>
                <div className=' text-center text-xl p-2 m-2 md:text-5xl font-bold font-sans'>{item.title}</div>
                <div className=' text-center p-2 m-2 text-base'>{item.title}</div>
                <div className=' p-2 m-2 bg-yellow-700 text-center' ><button>Click Me</button></div>
            
            </div>
        </div>
    );
};

export default ShowImage;