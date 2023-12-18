import {NavLink, Outlet} from 'react-router-dom'

export default function RootLayout(){


    return(
        <div className="root-layout">
            <header>
                <h1>RootLayout und So, Navbar</h1>
                
                <NavLink to="help">Help</NavLink>
                <NavLink to="login">Login</NavLink>
                

            </header>


            <main>
                <Outlet/>
            </main>

        </div>



    );



}
