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

  return  (
    
      <>
      <AuthContext.Provider value = {contextValue}>
    <Homepage />
    </AuthContext.Provider>
      </>
    
  )
} 

export default App
