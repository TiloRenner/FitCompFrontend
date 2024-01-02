import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            {/* <Route index element={<Homepage/>}/>
            <Route path="article" >
                <Route index element={<FetchAmazingUsers /> }/>
            <Route path=":auto" element={<SingleArticle />} />
            </Route>
            <Route path={"users"} >
                <Route index element={<div>users</div>} />
                <Route path={":userId"} element={<div>user single</div>}/>
            </Route>
                
           

            <Route path="*" element={<NotFoundPage/>}/> */}
        </Route>
    )
)