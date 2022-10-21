import React from 'react';

const DashTopBar = () => {
    return (
        <div className='p-8 hidden sm:block'>
             <div className='flex justify-between'>
                <div>
                    <h3 className='text-white'>Go-Travels</h3>
                </div>
                <div>
                    <h3 className='text-white'>wellcome to dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default DashTopBar;