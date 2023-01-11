import React, { useEffect, useRef, useState } from 'react';
import { Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import './Service.css';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

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
    const [date, setDate] = useState(new Date())
    const [serviceKey, setServiceKey] = useState('');
    const [planeName, setPlaneName] = useState('');
    const [month, setMonth] = useState('');
    const [time, setTime] = useState('');
    const [area, setArea] = useState('');
    const [hour, setHour] = useState('');
    const [stops, setStops] = useState('');
    const [operate, setOperate] = useState('');
    const [price, setPrice] = useState('');
    const [airPort, setAirport] = useState('');
    const [nextDay, setNextDay] = useState('');
    const [tmp, setTmp] = useState('');
    const [passengerClass, setPassengerClass] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [airplaneNumber, setAirplaneNumber] = useState('');
    const [weight, setWeight] = useState('');
    const [nextFlightAirPortName, setNextFlightAirPortName] = useState('');
    const [image, setImage] = useState(null);
  // useEffect(()=>{
  //   console.log(date?.toLocaleDateString());

  // },[date])
    // console.log(serviceKey);

    const handleSubmit = e =>{
      
      e.preventDefault();
      console.log(date.toLocaleDateString());
      const localDate = date.toLocaleDateString();
      const service = {
        localDate, serviceKey, planeName
      }

      const bookingData = new FormData();

      bookingData.append('date', date);
      bookingData.append('serviceKey', serviceKey);
      bookingData.append('planeName', planeName);
      bookingData.append('month', month);
      bookingData.append('time', time);
      bookingData.append('area', area);
      bookingData.append('hour', hour);
      bookingData.append('stops', stops);
      bookingData.append('operate', operate);
      bookingData.append('price', price);
      bookingData.append('airPort', airPort);
      bookingData.append('nextDay', nextDay);
      bookingData.append('tmp', tmp);
      bookingData.append('passengerClass', passengerClass);
      bookingData.append('flightNumber', flightNumber);
      bookingData.append('airplaneNumber', airplaneNumber);
      bookingData.append('weight', weight);
      bookingData.append('nextFlightAirPortName', nextFlightAirPortName);
      bookingData.append('image', image);

      console.log(service);

      fetch('http://localhost:5000/booking',{
        method: 'POST',
        // headers:{
        //   'content-type': 'application/json'
        // },
        body: bookingData
      })
      .then(res => res.json())
      .then(data => console.log())
    }
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
                <form onSubmit={handleSubmit} className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 mt-8 mb-12'>

                        <input 
                          type="name" 
                          placeholder='Service key'
                          onChange={ e => setServiceKey(e.target.value)}
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' 
                        />
                        <input 
                          accept="image/*" 
                          placeholder='Service key'
                          onChange={ e => setImage(e.target.files[0])}
                          multiple type = "file"
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' 
                        />

                        <input 
                          type="name" 
                          placeholder='Plane Name'
                          onChange={ e =>setPlaneName(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' 
                        />
                        
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker 
                            label="Date"
                            id="date"  
                            type="date"
                            value={date}
                            onChange={(newValue) => {
                              setDate(newValue);
                            }}
                            InputLabelProps={{ shrink: true, }} 
                            renderInput={(params) => <TextField {...params} />}
                            sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} 
                            className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' ref={timeRef} />
                        </LocalizationProvider>

                        <input 
                          type="name" 
                          placeholder='Month'
                          onChange={ e => setMonth(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <CssTextField 
                          id="time" 
                          label="Time" 
                          InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} 
                          type="time" 
                          sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Area'
                          onChange={ e => setArea(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Hour'
                          onChange={ e => setHour(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Stops'
                          onChange={ e => setStops(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Operate'
                          onChange={ e => setOperate(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Price'
                          onChange={ e => setPrice(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Airport'
                          onChange={ e => setAirport(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Next Day'
                          onChange={ e => setNextDay(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <CssTextField 
                          id="date" 
                          label="Next Date" 
                          type="date" InputLabelProps={{ shrink: true, }} 
                          sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' ref={timeRef} />

                        <CssTextField 
                          id="time" 
                          label="Next Time"  
                          InputLabelProps={{ shrink: true }} inputProps={{ step: 300 }} 
                          type="time" 
                          sx={{backgroundColor: 'white' , borderRadius: '0px', '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline':{borderColor: '#e7e8eb', borderRadius: '0px'}}} className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='tpm'
                          onChange={ e => setTmp(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Passenger Class'
                          onChange={ e => setPassengerClass(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='flight Number'
                          onChange={ e => setFlightNumber(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='AirPlane Number'
                          onChange={ e => setAirplaneNumber(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Weight'
                          onChange={ e => setWeight(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />

                        <input 
                          type="name" 
                          placeholder='Next Flight & AirPort Name'
                          onChange={ e => setNextFlightAirPortName(e.target.value)} 
                          className='p-3 border border-smooth-gray-50 transition ease-in-out delay-250 duration-500 focus:outline-none focus:border focus:border-smooth-yellow-100' />
                        
                        <button type="submit" className='px-6 py-3 bg-smooth-yellow-100 text-lg text-white font-semibold'>Add</button>
                </form>
            </Container>
            
        </div>
    );
};

export default ProfileItem;