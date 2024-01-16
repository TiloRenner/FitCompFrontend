import { NavLink } from "react-router-dom";
import logo from "../../images/iconv2_blue.png"


export default function Footer(){
    return (
    <footer className="flex flex-col space-y-12">
    <ul className="md:flex-row md:gap-x-4 flex flex-col space-y-4 pt-8 justify-center text-white text-sm md:items-end">
        <NavLink to="aboutus"><li>Über uns</li></NavLink>
        <NavLink to="impressum"><li>Impressum</li></NavLink>
        <NavLink to="login"><li>Login</li></NavLink>
        <NavLink to="start"><li>Create your Plan</li></NavLink>
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