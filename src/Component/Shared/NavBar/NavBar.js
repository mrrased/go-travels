import React from 'react';
import { NavLink , useNavigate } from 'react-router-dom';
import Pages from '../../Pages/Pages/Pages';
import { faCaretDown , faPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const navigate = useNavigate();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div className='absolute w-full z-10'>
            <div className='flex items-center sm:justify-between mx-5'>
                <div>
                    <div classNAme='flex items-center'>
                        <FontAwesomeIcon icon={faPlane} size="2xl" className='mr-4 text-pink-black bg-smooth-yellow-150 p-2 rounded-full' />
                    </div>
                </div>
                <div className='hidden md:flex space-x-4 text-base font-semibold capitalize font-sans'>

                    <NavLink to={"/dashboard"} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black transition-colors duration-400'>Dashboard</NavLink>
                    <NavLink to={"/"} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black transition-colors duration-400'>Home</NavLink>
                    <NavLink to={"/about"} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black'>About</NavLink>
                    
                    <button 
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className='
                        px-5 
                        py-3 
                        m-2
                         text-white
                          hover:bg-smooth-yellow-150
                           hover:text-black' 
                        
                        >Pages <FontAwesomeIcon icon={faCaretDown} size="lg" className='ml-2 text-smooth-gray-50' /></button>

                    <button 

                    className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black'>Blog</button>
                    <NavLink to={'/contact'} className='px-5 py-3 m-2 text-white hover:bg-smooth-yellow-150 hover:text-black' >Contact</NavLink>

                    <button onClick={()=> navigate('/register')} className='px-5 py-3 m-2 drop-shadow-md bg-white hover:bg-smooth-yellow-150 hover:text-black'>register</button>

                    <button onClick={()=> navigate('/login')} className='px-5 py-3 m-2 drop-shadow-md bg-smooth-yellow-150 hover:bg-white hover:text-black'>Sign In</button>
                </div>
            </div>
                {
                    <Pages
                        id={"composition-button"}
                        open={open}
                        setOpen={setOpen}
                        anchorRef={anchorRef}
                    />
                }
        </div>
    );
};

export default NavBar;