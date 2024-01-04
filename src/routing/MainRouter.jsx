import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/homepage';
import AboutUs from '../pages/aboutus';
import Impressum from '../pages/impressum';
import Login from '../pages/login';
import NotFoundPage from '../components/NotFoundPage';
import Abfrage from '../pages/abfrage';
import DankeAbfrage from '../pages/dankeabfrage';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />}/>
            <Route path="login" element={<Login />} />
                
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="abfrage" element={<Abfrage />} />
            <Route path="danke" element={<DankeAbfrage />} />
            
            
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    )
)
