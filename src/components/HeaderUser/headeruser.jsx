import {NavLink} from 'react-router-dom';
import logo from "../../images/iconv2_capri.png"
import { useContext } from "react";
import { useState } from 'react';
import { UserContext } from '../userContext';

const API_URL = import.meta.env.VITE_API_URL   

export default function HeaderUser(){ 
    // const {user}=useContext(UserContext)
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    async function handleLogout(){
        console.log("Start Logout")
        const baseURL = API_URL + '/authentication/logout' ;
        const response = await fetch(`${baseURL}`, { credentials: 'include',})
        if (!response.ok) {
            const responseMSG = await response.json();
            console.log("Response Message:" , responseMSG)
            throw new Error('Network response was not ok');
            }
          
        const data = await response.json();
        console.log("data von fetch:", data);

        sessionStorage.removeItem("userLoggedIn")
        window.location.reload()
    }

    return (
        <header>

  

                <nav className={`flex flex-col text-white p-4 lg:fixed lg:top-0 lg:left-0 lg:h-full lg:overflow-hidden lg:transition-all lg:duration-200 lg:ease-in-out lg:transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} translate-x-0 lg:static lg:overflow-visible`}>
 

                {/* <nav className={'flex flex-col text-white p-4 '}> */}
                <div className='flex items-center justify-between'>
               {isOpen ? <NavLink to="/"><img className="h-16" src={logo} alt="Logo" /></NavLink> : ''}
                
                <button onClick={toggleMenu} className=" block lg:hidden">
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
                <button onClick={toggleMenu} className="lg:block hidden">
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
                <div className={`${isOpen ? 'block' : 'hidden'}`}>
                <ul className='flex flex-col pt-6 pb-4 items-center lg:items-start lg:pl-8 space-y-4 lg:space-y-0 lg:gap-6'>
                    <NavLink to="/dashboard" className="text-lg">
                    Dashboard
                    </NavLink>
                    <NavLink to="/dashboard/trainingsplan" className="text-lg">
                    Trainingsplan
                    </NavLink>
                    <NavLink to="/trainingsplan" className="text-lg">
                    Profil
                    </NavLink>
                    <NavLink to="/trainingsplan" className="text-lg">
                    Settings
                    </NavLink>
                    <NavLink to="/trainingsplan" className="text-lg">
                    Produkte
                    </NavLink>
                    <div onClick={handleLogout} className="text-lg">
                    Logout
                    </div>
                </ul>
                </div>
            </nav>

         
            
       </header>
    )
}