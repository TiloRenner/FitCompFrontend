import {NavLink} from 'react-router-dom'

export default function Navigation(){
    return (
        <nav>
            <ul>
                <NavLink to="/aboutus" style={({ isActive }) => ({color: isActive ? "red" : "blue"})}>
                    <li>About us</li>
                </NavLink>
                <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? "red" : "blue" })
                }>
                    <li>Login/Register</li>
                </NavLink>
            </ul>
        </nav>
    )
}