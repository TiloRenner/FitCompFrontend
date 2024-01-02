import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage';

function App() {
  // const [count, setCount] = useState(0)


  return  (
      <>
      {/* <div className='flex justify-center items-center min-h-screen'>
    <h1 className=" text-3xl  font-bold  text-cyan-500"><span>Hello world! Tailwind is working now</span></h1> 
    </div> */}
    <Homepage />
      </>
    
  )
} 

export default App
