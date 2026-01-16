import { Navigate } from "react-router-dom"
import { useLogin } from "../../context/Login-context";

export const ProtectedRoute = ({children}) => {

    const {token} = useLogin();

    return token === 'OK' ? children : <Navigate to='/auth/login'/>
        
}