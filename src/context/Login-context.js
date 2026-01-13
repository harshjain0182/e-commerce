import { createContext, useContext, useReducer } from "react";
import { LoginReducer, initialState } from "../login-reducer/login-reducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    
    const [{email, password, token}, loginDispatch] = useReducer(LoginReducer, initialState);
    return (
        <LoginContext.Provider value={{email, password, token, loginDispatch }}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);
export { useLogin, LoginProvider };