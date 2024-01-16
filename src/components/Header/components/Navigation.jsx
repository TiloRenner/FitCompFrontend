import {NavLink} from 'react-router-dom'
import logo from "../../../images/iconv2_capri.png";
import { useState } from 'react';

export default function Navigation(){ 
    
    const [isOpen, setIsOpen] = useState(false);
    const userLoggedIn = sessionStorage.getItem('userLoggedIn')

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    const path = userLoggedIn ? "/dashboard" : "/";

    return (

        <nav className='flex flex-col lg:flex-row justify-between text-white p-4'>
        <div className='flex items-center justify-between'>
          <NavLink to={path}><img className="h-16" src={logo} alt="Logo" /></NavLink>
        
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:items-center lg:flex`}>
          <ul className='flex flex-col pt-6 pb-4 items-center space-y-4 lg:space-y-0 md:gap-6 lg:flex-row'>
            <NavLink to="/aboutus" className="text-lg">
              About us
            </NavLink>
            <NavLink to="/login" className="text-lg">
              Login/Register
            </NavLink>
          </ul>
        </div>
       </nav>
    )
}