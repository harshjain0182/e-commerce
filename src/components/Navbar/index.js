import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 flex bg-purple-400 py-4 px-8 text-slate-50">
            <div>
                <h1 className="text-5xl cursor-pointer" onClick={() => navigate("/")}>e-Bazaar</h1>
            </div>
            
            <nav className="ml-auto flex gap-6 ">
                <span className="material-symbols-outlined text-3xl cursor-pointer">
                    favorite
                </span>

                <span onClick={() => navigate("/cart")} className="material-symbols-outlined text-3xl cursor-pointer">
                    shopping_cart
                </span>

                <span className="material-symbols-outlined text-3xl cursor-pointer">
                    account_circle
                </span>
            </nav>
        </header>
    )
}