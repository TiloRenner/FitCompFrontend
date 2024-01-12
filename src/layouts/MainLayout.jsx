import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
    console.log("Start MainLayout")
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