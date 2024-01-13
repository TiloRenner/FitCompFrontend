import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";




export const Layout = () => {
    const { pathname } = useLocation();
    // Define the paths where you don't want to show the MainLayout
    const noLayoutPaths = ["/login", "/register", "/dashboard"];
   
    // Check if the current path is in the noLayoutPaths array
    const shouldRenderLayout = !noLayoutPaths.includes(pathname);  
    return (
        <>
          {shouldRenderLayout && <MainLayout />}
          <Outlet />
        </>
      );
     };
     


export default function MainLayout() {

    return (
        <div >
             
            <Header />
            <main className="">
               <Outlet/>
            </main>
            <Footer />
        </div>
    )
}