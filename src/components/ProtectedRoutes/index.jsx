import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../userContext"
import { useContext } from "react"
import { AuthContext } from "../authContext";

// export default function ProtectedRoute(props) {
    // console.log("user prop", props)
    // const user = useContext(UserContext)
    
    // console.log("user prot", user)
    // if(user != "authenticated"){
        
    //     return <Navigate to="/login" replace/>
    // }

//     return <Outlet/>
// }



export default function ProtectedRoute() {
 const { isAuth } = useContext(AuthContext);

 if (!isAuth) {
   return <Navigate to="/login" replace />;
 }

 return <Outlet />;
}
