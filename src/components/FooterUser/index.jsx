import { NavLink } from "react-router-dom";
import logo from "../../images/iconv2_blue.png"


export default function FooterUser(){
    return (
    <footer className="flex flex-col space-y-12 ">
    <ul className="md:flex-row md:gap-x-4 flex flex-col space-y-4 pt-8 justify-center text-white text-sm md:items-end">
        <NavLink to="login"><li>Contact</li></NavLink>
        <NavLink to="aboutus"><li>About us</li></NavLink>
        <NavLink to="login"><li>FAQ</li></NavLink>
        <NavLink to="impressum"><li>Impressum</li></NavLink>
        
    </ul>
    <div className="flex justify-center">
        <img className="h-32" src={logo} alt="Logo" />
    </div>
    <p className="text-white text-sm pb-16">
        Copyrights by FitCompagnion 2024
    </p>
    
    </footer>
    )
}