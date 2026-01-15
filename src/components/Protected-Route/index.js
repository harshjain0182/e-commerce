import { Navigate, useNavigate } from "react-router-dom"
import { useLogin } from "../../context/Login-context";

export const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();

    const {token} = useLogin();

    return token === 'OK' ? children : <Navigate to='/auth/login'/>
        
}