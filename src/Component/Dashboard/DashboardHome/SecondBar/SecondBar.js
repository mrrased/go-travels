import React from 'react';
import { useNavigate } from 'react-router-dom';

const SecondBar = () => {
    const navigate = useNavigate();

    return (
        <div className=''>
           <div className='divide-x text-right px-3 py-2 '>
                <button onClick={() => navigate('/')} className='px-3 bg-green-100 py-1 hover:bg-green-200'>Home</button>
                <button className='px-3 bg-green-100 py-1 ring-2 text-green-600 cursor-default'>Dashboard</button>
           </div>
        </div>
    );
};

export default SecondBar;