import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { WishlistProductCard } from "../../components/Wishliat-card/wishlistCard";
import { Navbar } from "../../components/Navbar";

export const WishList = () => {

    const navigate = useNavigate();
    const { state } = useCart();

    return (
        <div className="overflow-x-auto overflow-y-auto">
            <Navbar/>
            <div className="bg-purple-200 min-h-screen p-6">

                <h1 className="text-5xl">Your Wishlist</h1>
                <main className="flex justify-center pt-6 ">
                    <div>
                        {
                            state.wishList.length > 0 ? (
                                <div className="flex w-full max-w-6xl gap-6">

                                    <div className="flex flex-col gap-4">
                                        {state.wishList.map(product => (
                                            <WishlistProductCard
                                                key={product.id}
                                                product={product}
                                            />
                                        ))}
                                    </div>

                                </div>
                            ) : (
                                <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
                                    <h1 className="text-2xl font-semibold">WishList is Empty</h1>
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
        </div>

    );
}