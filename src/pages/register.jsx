import { NavLink, useNavigate } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from "../components/authContext";

const API_URL = import.meta.env.VITE_API_URL   


export default function Register () {

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { authToken, setAuthToken} = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const baseURL = API_URL ;
        //const baseURL = "";
  
        fetch(baseURL + '/authentication/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, email, password }),
        })
        .then(response => {
          console.log("Response ", response)
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         return response.json();
        })
        .then(data => {
         // Benutzer wurde erfolgreich authentifiziert
         if(data.login_token)
         {
          console.log("Token found :", data.login_token)
          setAuthToken(data.login_token)
         }
         console.log("Success");
         console.log("Data: ",data);
         navigate("/login")
         
         
        })
        .catch(error => {
         // Es gab einen Fehler bei der Authentifizierung
         console.log("Error");
         console.log(error);
        });
        };

    return (
    <>
    <section>
            <div className="bg-[url('/images/people.jpg')] bg-cover flex justify-center items-center h-[700px]">
                    <div className="flex flex-col w-[70%] md:w-[33%] bg-white bg-opacity-80 p-6 rounded-lg">
                    <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="#00BBE4" class="w-20 h-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                    </div> 
                    <div className="flex flex-col justify-center items-center space-y-4">
                    <h3>Registrierung</h3>
                    <div className="relative">
                    <input className="pl-10 h-10 border-grey-100 border-solid border-2 rounded-lg" type="text" placeholder="Benutzername" value={username} onChange={(e) => setName(e.target.value)} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </div>
                    </div>
                    <div className="relative">
                    <input className="pl-10 h-10 border-grey-100 border-solid border-2 rounded-lg" type="text" placeholder="e-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="grey" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    </div>
                    </div>
                    <div className="relative">
                    <input className=" pl-10 h-10 border-grey-100 border-solid border-2 rounded-lg" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="grey" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    </div>
                    </div>
                    <button onClick={handleSubmit} className="callbtn">Registrieren</button>
                    <p className="text-gray-500" style={{fontSize: "11px"}}>Du hast bereits einen Account? Melde dich <NavLink to="/login"><span className="register_login">hier</span> </NavLink> an?</p>
                    </div>
                    </div>
            </div>
    </section>
    </>
    )
    
    }