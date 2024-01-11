import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import DashBoard from '../pages/dashboard';
import ProtectedRoute from '../components/ProtectedRoutes';
import UserLayout from '../layouts/UserLayout';
import MainLayout from '../layouts/MainLayout';
import { UserContext } from "../layouts/MainLayout";
import { useContext } from "react";


const {user}=useContext(UserContext)

export const router = createBrowserRouter(
    createRoutesFromElements(
        
        
          <Route path='/' element={<UserLayout />} >
            
            <ProtectedRoute path='dashboard' element={<DashBoard />} />
            <ProtectedRoute path='trainingsplan' element={<Trainingsplan />} />
         </Route>  
       
        
    )
)