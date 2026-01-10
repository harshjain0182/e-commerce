import { useNavigate } from "react-router-dom";
import { CartProductCard } from "../../components/Cart-product-card";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context";

export const Cart = () => {

    const navigate = useNavigate();
    const { state } = useCart();

    return (
        <>
            <Navbar />
            {
                state.cart.length > 0 ? state.cart.map(product => <CartProductCard key={product.id} product={product} />) : (
                    <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
                        <h1 className="ext-2xl font-semibold">Cart is Empty</h1>
                        <button
                            className="btn-primary rounded-full px-8 py-3 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
                            onClick={() => navigate("/")}
                        >
                            Discover
                        </button>
                    </div>
                )
            }
        </>
    );
}