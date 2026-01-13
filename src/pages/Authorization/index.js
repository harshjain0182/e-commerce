import { Login } from "../../components/login-form/login"
import { Navbar } from "../../components/Navbar"

export const Authorization = () =>{
    return(
        <>
            <Navbar/>
            <main className="bg-zinc-300 flex justify-center items-center min-h-[calc(100vh-80px)] p-4">
                <Login/>
            </main>
        </>
    )
}