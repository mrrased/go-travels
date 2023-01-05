import React, { useRef } from 'react';
import { Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Service.css';

const CssTextField = styled(TextField)({
    
    '& label.Mui-focused': {
      color: 'green',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'green',
    // },
    '& .MuiOutlinedInput-root': {
      
      '&:hover fieldset': {
        borderColor: '#e7e8eb',
      },
      '&.Mui-focused fieldset': {
        borderWidth: 1,
        borderColor: '#cd7e0f',
        transition: '.8s'
      },
    },
  });

const ProfileItem = () => {

    const timeRef = useRef();

    console.log(timeRef?.current);
    return (
        <div>
            <div className='bg-service'>
            </div>
            <div className='text-right -mt-16 mr-[240px]'>
                <div className=''>
                    <h3 className=''>IT'S TIME TO</h3>
                    <h1 className='text-4xl font-bold text-pink-blue-50'>Go-Travel</h1>
                </div>
            </div>
            {/* <div className='bg-gradient-to-b from-indigo-500'>jkfgvuiyfvuyv</div> */}

            <Container maxWidth="lg" className='mt-6'>
                <div>
                    <h1 className='text-4xl uppercase'>Add Flight Service</h1>
                    <p>Please make sure that you fill in the name of service</p>
                </div>
                <form className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 mt-8 mb-12'>

                        <input type="name" placeholder='Service key' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Plane Name' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <CssTextField id="date" label="Date" type="date" InputLabelProps={{ shrink: true, }} sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' ref={timeRef} />

                        <input type="name" placeholder='Month' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <CssTextField id="time" label="Time" InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} type="time" sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Area' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Hour' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Stops' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Operate' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Price' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Airport' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Next Day' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <CssTextField id="date" label="Next Date" type="date" InputLabelProps={{ shrink: true, }} sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' ref={timeRef} />

                        <CssTextField id="time" label="Next Time"  InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} type="time" sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='tpm' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Passenger Class' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='flight Number' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='AirPlane Number' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Weight' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input type="name" placeholder='Next Flight & AirPort Name' className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                        
                        <button type="submit" className='px-6 py-3 bg-smooth-yellow-100 text-lg text-white font-semibold'>Add</button>
                </form>
            </Container>
            
        </div>
    );
};

export default ProfileItem;