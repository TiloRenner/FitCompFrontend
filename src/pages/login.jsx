import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../components/authContext";

const API_URL = import.meta.env.VITE_API_URL   

export default function Login () {

    
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const { authToken, setAuthToken} = useContext(AuthContext)



    const handleSubmit = async (event) => {
      event.preventDefault();
      
      //const baseURL = "http://localhost:8080/";
      const baseURL = API_URL;

      fetch(baseURL + '/authentication/login', {
       method: 'POST',
       withCredentials: true,
       credentials: 'include',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ username, password }),
      })
      .then(response => {
        console.log("LoginResponse:",response)
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response.json();
      })
      .then(data => {
        console.log("LoginData:",data)
       // Benutzer wurde erfolgreich authentifiziert
       if(data.login_token)
       {
        console.log("Token found :", data.login_token)
        setAuthToken(data.login_token)
       }
       console.log("Success");
       console.log(data);
       
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
            <div className="bg-[url('src/images/people.jpg')] flex justify-center items-center h-[700px]">
                    <div className="flex flex-col w-[70%] md:w-[33%] bg-white bg-opacity-80 p-6 rounded-lg">
                    <div className="flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#00BBE4" class="w-20 h-20">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                    </div> 
                    <div className="flex flex-col justify-center items-center space-y-4">
                    <h3>Login</h3>
                    <div className="relative">
                    <input className="pl-10 h-10 border-grey-100 border-solid border-2 rounded-lg" type="text" placeholder="Benutzername" value={username} onChange={(e) => setName(e.target.value)} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="grey" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    </div>
                    </div>
                    <div className="relative">
                    <input className=" pl-10 h-10 border-grey-100 border-solid border-2 rounded-lg" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="grey" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    </div>
                    </div>
                    <span className="flex justify-end" style={{fontSize: "12px"}}>Forget password?</span>
                    <button onClick={handleSubmit} className="callbtn">Login</button>
                    <p className="text-gray-500" style={{fontSize: "11px"}}>Du hast noch keinen Account? Registriere dich <NavLink to="/register"><span className="register_login">hier</span> </NavLink>?</p>
                    </div>
                    </div>
            </div>
    </section>
    </>
    )
    
    }