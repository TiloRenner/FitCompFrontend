import {NavLink, Outlet} from 'react-router-dom'

export default function HelpLayout(){


    return(
        <div className="root-layout">
            <header>
                <h1>Anderes Layout für irgendwas</h1>

            </header>
            <nav>
                <NavLink to="faq">Link to FAQ</NavLink>
            </nav>


            <main>
                <Outlet/>
            </main>

        </div>



    );



}
