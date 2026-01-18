import { useNavigate } from "react-router-dom";
import { CartProductCard } from "../../components/Cart-product-card";
import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context";
import { TotalPayment } from "../../components/Price Component/priceDetails";

export const Cart = () => {

    const navigate = useNavigate();
    const { state } = useCart();

    return (
        <div>
            <Navbar/>
            <main className="flex justify-center pt-6 bg-purple-200 min-h-screen">
                <div>
                    {
                        state.cart.length > 0 ? (
                            <div className="flex w-full max-w-6xl gap-6">

                                <div className="flex flex-col gap-4">
                                    {state.cart.map(product => (
                                        <CartProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>
                                <div>
                                    <TotalPayment/>
                                </div>

                            </div>
                        ) : (
                            <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
                                <h1 className="text-2xl font-semibold">Cart is Empty</h1>
                                <button
                                    className="btn-primary rounded-full px-8 py-3 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
                                    onClick={() => navigate("/")}
                                >
                                    Discover
                                </button>
                            </div>
                        )
                    }
                </div>

            </main>
        </div>
    );
}