import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../layouts/UserLayout";
import { useContext } from "react"

export default function ProtectedRoute() {

    const {user} = useContext(UserContext)

    if(user != "authenticated"){
        return <Navigate to="/login" replace/>
    }

    return <Outlet/>
}

