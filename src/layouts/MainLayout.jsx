import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


export default function MainLayout() {

    return (
        <div >
            <Header />
            <main className="h-full">
               <Outlet/>
            </main>
            <Footer />
        </div>
    )
}