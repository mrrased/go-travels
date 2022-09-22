import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-pink-blue'>
            <div className='sm:flex items-center justify-between mx-5 relative'>
                <div>
                    001
                </div>
                <div className='hidden md:flex space-x-4 text-base font-semibold capitalize font-sans'>
                    <NavLink to={"/"} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black transition-colors duration-400'>Home</NavLink>
                    <NavLink to={"/about"} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black'>About</NavLink>
                    <a  className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black' href="*#">Pages</a>
                    <a  className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black' href="*#">Blog</a>
                    <NavLink to={'/contact'} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black' >Contact</NavLink>
                    <button className='px-5 py-3 m-2 drop-shadow-md bg-white hover:bg-smooth-yellow-150 hover:text-black'>register</button>
                    <button className='px-5 py-3 m-2 drop-shadow-md bg-smooth-yellow-150 hover:bg-white hover:text-black'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;