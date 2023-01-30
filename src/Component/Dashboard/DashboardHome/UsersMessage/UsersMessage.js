import React, { useEffect, useState } from 'react';
import { Puff } from 'react-loader-spinner';
import ShowData from './ShowData';

const UsersMessage = () => {

    const [messageData, setMessageData] = useState('');
    const [isLoading, setIsLoading] = useState(0);

    useEffect(()=>{

        setIsLoading(1);

        fetch('http://localhost:5000/user/contact/message')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMessageData(data);
            setIsLoading(0);
        });

    },[])

    return (
        <div>
            { isLoading === 1 &&
                <div className='flex justify-center items-center h-screen w-full'>
                    <Puff
                        height="80"
                        width="80"
                        radius={1}
                        color="#57112f"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            }
           

            <div className='grid grid-cols-3 gap-2 py-20'>
                {
                     messageData?.map( singleData => <ShowData key={singleData._id} singleData={singleData} /> )
                }

                {/* { messageData?.map( singleData =>(
                    
                    <div className='flex items-center justify-between p-4 bg-white drop-shadow-xl'>
                        <h3>{singleData?.name}</h3>
                        <div className='space-x-2'>
                            <button className='px-3 py-1 bg-cyan-100 text-pink-blue-50 hover:underline'>view</button>
                            <button className='px-3 py-1 bg-red-100 text-pink-blue-50 hover:underline'>remove</button>
                        </div>
                    </div>
                ))} */}

            </div>
        </div>
    );
};

export default UsersMessage;