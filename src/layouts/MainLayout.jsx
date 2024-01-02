import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


export default function MainLayout() {

    return (
        <div >
            <Header />
            <main className="h-96">
               <Outlet/>
            </main>
            <Footer />
        </div>
    )
}