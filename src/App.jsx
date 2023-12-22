import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AbfrageTest, { abfrageLoader } from "./components/AbfrageTest.jsx"
import {createBrowserRouter,Routes,Route, Link,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home, { homeLoader } from './pages/Home.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import HelpLayout from './layouts/HelpLayout.jsx'
import Faq from './pages/Faq.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route 
      index 
      element={<Home/>}
      loader={homeLoader}
      />
      <Route 
        path="assessment/:category/:step?" 
        element={<AbfrageTest/>}
        loader={abfrageLoader}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>

      </Route>


      <Route path="*" element={<NotFound/>}/>
    </Route>

  )
)

function App() {
  const [count, setCount] = useState(0)

  const TEST_ENV = import.meta.env.VITE_TEST
  console.log("ENVTEST:", TEST_ENV)

  return (
    <RouterProvider router={router}>
      <AbfrageTest/>
    </RouterProvider>

    
  )
}

export default App
