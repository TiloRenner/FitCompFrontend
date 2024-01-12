import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import UserLayout from '../layouts/UserLayout';
import DashBoard from '../pages/dashboard';
import Homepage from '../pages/homepage';
import AboutUs from '../pages/aboutus';
import Impressum from '../pages/impressum';
import Login from '../pages/login';
import NotFoundPage from '../components/NotFoundPage';
import Abfrage from '../pages/abfrage';
import DankeAbfrage from '../pages/dankeabfrage';
import ResultAbfrage from '../pages/resultabfrage';
import Register from '../pages/register';
import ProtectedRoute from '../components/ProtectedRoutes';








export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="abfrage" element={<Abfrage />} />
            <Route path="result" element={<ResultAbfrage />} />
            <Route path="danke" element={<DankeAbfrage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='/' element={<UserLayout />} />

            <Route element={<ProtectedRoute user="hallo" />} >
                <Route path="dashboard"  element={<UserLayout/>}>
                <Route index element={<DashBoard />} />
                </Route>
            </Route>

        </Route>


    )
)
