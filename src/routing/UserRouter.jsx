import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import DashBoard from '../pages/dashboard';
import ProtectedRoute from '../components/ProtectedRoutes';
import UserLayout from '../layouts/UserLayout'
import MainLayout from '../layouts/MainLayout';


export const router = createBrowserRouter(
    createRoutesFromElements(
        
          <Route path="/dashboard" element={<MainLayout />} >
           < ProtectedRoute path="/trainingsplan" element={<DashBoard />}/>
         </Route>  
        
    )
)