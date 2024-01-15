import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage';
import { AuthContext } from "./components/authContext"



function App() {
  console.log("Run App")
  const [authToken, setAuthToken] = useState(null)
  const contextValue = { authToken , setAuthToken };
  console.log("Run App")



  /*fetch(baseURL + '/authentication/status' , {
   method: 'GET',
   withCredentials: true,
   credentials: 'include',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({ username, password }),
  })*/


  return  (
    
      <>
      <AuthContext.Provider value = {contextValue}>
      <Homepage />
      </AuthContext.Provider>
      </>
    
  )
} 

export default App
