import React from 'react';

const ShowFeatureItem = ({FeatureItem}) => {

    
    return (
        <div className="max-w-md mx-auto bg-white  md:flex items-center justify-center rounded-xl shadow-md overflow-hidden md:max-w-2xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-700 p-8">
            <div className="sm:flex md:flex content-center">
                <div className="md:shrink-0 pb-5 md:pb-0 text-pink-blue md:flex md:items-center text-center">
                    {FeatureItem.img}
                </div>
                <div className="pl-4">
                    <a href="*#" className="block mt-0 text-xl leading-tight font-semibold font-sans  text-pink-black hover:underline mb-1">{FeatureItem.title}</a>
                    <p className="mt-0 text-slate-500">{FeatureItem.contact}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowFeatureItem;