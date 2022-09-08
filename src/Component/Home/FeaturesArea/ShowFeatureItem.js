import React from 'react';

const ShowFeatureItem = ({FeatureItem}) => {

    console.log(FeatureItem);
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-700">
            <div className="md:flex content-center relative">
                <div className="md:shrink-0">
                    {FeatureItem.img}
                </div>
                <div className="p-4">
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                    <p className="mt-2 text-slate-500">{FeatureItem.contact}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowFeatureItem;