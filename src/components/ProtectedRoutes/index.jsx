import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../layouts/UserLayout";
import { useContext } from "react"

export default function ProtectedRoute(props) {
console.log("user prop", props)
    const user = useContext(UserContext)
    console.log("user prot", user)

    if(user != "authenticated"){
        return <Navigate to="/login" replace/>
    }

    return <Outlet/>
}

