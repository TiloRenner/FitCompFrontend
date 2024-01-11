import { Navigate, useLocation } from 'react-router-dom';



export default function ProtectedRoute({ children, ...rest }) {
 let location = useLocation();

 // Überprüfen Sie hier, ob der Benutzer angemeldet ist
 let isLoggedIn = checkUserAuthentication();

 return (
   <Route {...rest}>
     {isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} />}
   </Route>
 );
}
