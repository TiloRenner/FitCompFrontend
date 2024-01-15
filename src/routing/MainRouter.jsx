import {createBrowserRouter, createRoutesFromElements, Link, Route, Routes} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import UserLayout from '../layouts/UserLayout';
import { Layout } from '../layouts/MainLayout';
import DashBoard from '../pages/dashboard';
import Homepage from '../pages/homepage';
import AboutUs from '../pages/aboutus';
import Impressum from '../pages/impressum';
import Login from '../pages/login';
import NotFoundPage from '../components/NotFoundPage';
import Abfrage from '../pages/abfrage';
import AssessStart,{assessStartLoader} from '../pages/assessStart';
import Assessment,{assessmentLoader} from '../pages/assessment';
import DankeAbfrage from '../pages/dankeabfrage';
import ResultAbfrage from '../pages/resultabfrage';
import Register from '../pages/register';
import ProtectedRoute from '../components/ProtectedRoutes';






export const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage />}/>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />    
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="abfrage" element={<Abfrage />} />


            <Route path="start" element={<AssessStart/>} loader={assessStartLoader}/>
            <Route 
                path="assessment/:category/:step?" 
                element={<Assessment/>}
                loader={assessmentLoader}/>
            <Route path="result" element={<ResultAbfrage />} />
            <Route path="danke" element={<DankeAbfrage />} />

            {/* <Route path="/" element={<UserLayout />}/> */}

            <Route element={<ProtectedRoute/>} >
                <Route path="dashboard" element={<UserLayout />} >
                            <Route index element={<DashBoard />} />
                            {/* <Route path="dashboard" element={<DashBoard />} /> */}
                </Route>
                </Route>
            <Route path="*" element={<NotFoundPage/>}/>
           
        </Route>


    )
)
