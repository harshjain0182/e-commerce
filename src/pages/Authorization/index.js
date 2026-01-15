import { Login } from "../../components/login-form/login"
import { Navbar } from "../../components/Navbar"

export const Authorization = () =>{
    return(
        <>
            <main className="bg-zinc-300 flex justify-center items-center min-h-screen p-4">
                <Login/>
            </main>
        </>
    )
}