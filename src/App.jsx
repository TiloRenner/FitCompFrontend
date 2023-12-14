import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AbfrageTest from "./components/AbfrageTest.jsx"

function App() {
  const [count, setCount] = useState(0)

  const TEST_ENV = import.meta.env.VITE_TEST
  console.log("ENVTEST:", TEST_ENV)

  return (
    <>
      <AbfrageTest/>
    </>
  )
}

export default App
